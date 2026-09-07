const DB_NAME = "severin-cannes-crm";
const DB_VERSION = 1;
const STORE = "meetings";
const LS_KEY = "severin-cannes-crm-meetings";

let memory = [];
let backend = "idb";

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: "id" });
        store.createIndex("createdAt", "createdAt");
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function requestDone(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function withTimeout(promise, ms = 2000) {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error("storage-timeout")), ms);
    promise.then(
      (value) => {
        window.clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        window.clearTimeout(timer);
        reject(error);
      }
    );
  });
}

async function runStore(mode, fn) {
  const db = await openDb();
  try {
    const store = db.transaction(STORE, mode).objectStore(STORE);
    return await fn(store);
  } finally {
    db.close();
  }
}

function readLocal() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [...memory];
  }
}

function writeLocal(meetings) {
  memory = meetings;
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(meetings));
  } catch {
    memory = meetings;
  }
}

async function blobToDataUrl(blob) {
  if (!blob) return "";
  if (typeof blob === "string") return blob;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

async function toLocalRecord(meeting) {
  return {
    ...meeting,
    photo: await blobToDataUrl(meeting.photo),
  };
}

export async function listMeetings() {
  try {
    const rows = await withTimeout(runStore("readonly", (store) => requestDone(store.getAll())));
    backend = "idb";
    return (rows || []).sort((a, b) => b.createdAt - a.createdAt);
  } catch {
    backend = "local";
    return readLocal().sort((a, b) => b.createdAt - a.createdAt);
  }
}

export async function saveMeeting(meeting) {
  if (backend === "idb") {
    try {
      await withTimeout(runStore("readwrite", (store) => requestDone(store.put(meeting))));
      return meeting;
    } catch {
      backend = "local";
    }
  }
  const record = await toLocalRecord(meeting);
  const next = readLocal().filter((item) => item.id !== meeting.id);
  next.push(record);
  writeLocal(next);
  return record;
}

export async function deleteMeeting(id) {
  if (backend === "idb") {
    try {
      await withTimeout(runStore("readwrite", (store) => requestDone(store.delete(id))));
      return;
    } catch {
      backend = "local";
    }
  }
  writeLocal(readLocal().filter((item) => item.id !== id));
}

export async function clearMeetings() {
  if (backend === "idb") {
    try {
      await withTimeout(runStore("readwrite", (store) => requestDone(store.clear())));
    } catch {
      backend = "local";
    }
  }
  writeLocal([]);
  try {
    localStorage.removeItem(LS_KEY);
  } catch {
    /* ignore */
  }
}
