import { useEffect, useMemo, useState } from "react";
import {
  CATEGORIES,
  FILTERS,
  INTEREST_LEVELS,
  NEXT_ACTIONS,
  PROJECTS,
  interestMeta,
  matchesFilter,
} from "./constants";
import { formatAllMeetings, formatDate, formatDateTime, formatInterest, formatMeeting, formatTime } from "./format";
import { compressImage, photoUrl } from "./media";
import { disableCrmPwa, enableCrmPwa, isIosSafari } from "./pwa";
import { clearMeetings, deleteMeeting, listMeetings, saveMeeting } from "./storage";
import "./crm.css";

const emptyForm = {
  company: "",
  contactName: "",
  category: "Constructeur",
  project: "Greenbay",
  interest: 3,
  notes: "",
  nextAction: "Envoyer mail",
  followUpDate: "",
  photo: null,
};

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  }
}

function PhotoPreview({ photo }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    const next = photoUrl(photo);
    setSrc(next);
    return () => {
      if (next && typeof photo !== "string") URL.revokeObjectURL(next);
    };
  }, [photo]);

  if (!src) return null;
  return <img src={src} alt="Photo du rendez-vous" />;
}

function MeetingForm({ initial, onCancel, onSave }) {
  const [form, setForm] = useState(() => ({ ...emptyForm, ...initial }));
  const [saving, setSaving] = useState(false);

  function update(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function onPhotoChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const compressed = await compressImage(file);
    update("photo", compressed);
  }

  async function submit(event) {
    event.preventDefault();
    if (!form.company.trim() || saving) return;
    setSaving(true);
    try {
      const now = Date.now();
      await onSave({
        id: initial?.id || crypto.randomUUID(),
        createdAt: initial?.createdAt || now,
        updatedAt: now,
        company: form.company.trim(),
        contactName: form.contactName.trim(),
        category: form.category,
        project: form.project,
        interest: Number(form.interest),
        notes: form.notes.trim(),
        nextAction: form.nextAction,
        followUpDate: form.followUpDate,
        photo: form.photo || null,
      });
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className="crm-form" onSubmit={submit}>
      <label className="crm-field">
        <span>Société</span>
        <input
          autoFocus
          enterKeyHint="next"
          placeholder="Nom de la société"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          required
        />
      </label>

      <label className="crm-field">
        <span>Nom du contact</span>
        <input
          enterKeyHint="next"
          autoComplete="name"
          placeholder="Prénom Nom"
          value={form.contactName}
          onChange={(e) => update("contactName", e.target.value)}
        />
      </label>

      <div>
        <div className="crm-label">Catégorie</div>
        <div className="crm-choices">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              className={`crm-choice ${form.category === item ? "active" : ""}`}
              onClick={() => update("category", item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="crm-label">Projet concerné</div>
        <div className="crm-choices">
          {PROJECTS.map((item) => (
            <button
              key={item}
              type="button"
              className={`crm-choice ${form.project === item ? "active" : ""}`}
              onClick={() => update("project", item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="crm-label">Niveau d’intérêt</div>
        <div className="crm-interest">
          {INTEREST_LEVELS.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`crm-choice ${Number(form.interest) === item.value ? "active" : ""}`}
              onClick={() => update("interest", item.value)}
            >
              <small>{item.stars}</small>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <label className="crm-field">
        <span>Compte rendu</span>
        <textarea
          placeholder="Dictez ou saisissez le compte rendu…"
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          autoCapitalize="sentences"
          enterKeyHint="enter"
        />
      </label>

      <div>
        <div className="crm-label">Suite à donner</div>
        <div className="crm-choices">
          {NEXT_ACTIONS.map((item) => (
            <button
              key={item}
              type="button"
              className={`crm-choice ${form.nextAction === item ? "active" : ""}`}
              onClick={() => update("nextAction", item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <label className="crm-field">
        <span>Date de relance (facultatif)</span>
        <input
          type="date"
          value={form.followUpDate}
          onChange={(e) => update("followUpDate", e.target.value)}
        />
      </label>

      <div className="crm-photo">
        <div className="crm-label">Photo carte de visite ou bateau</div>
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={onPhotoChange}
        />
        <PhotoPreview photo={form.photo} />
        {form.photo ? (
          <button type="button" className="crm-btn crm-btn-ghost" onClick={() => update("photo", null)}>
            Retirer la photo
          </button>
        ) : null}
      </div>

      <button className="crm-btn crm-save" type="submit" disabled={saving || !form.company.trim()}>
        {saving ? "Enregistrement…" : "Enregistrer le RDV"}
      </button>
      <button type="button" className="crm-btn crm-btn-ghost" onClick={onCancel}>
        Annuler
      </button>
    </form>
  );
}

export default function CrmApp() {
  const [view, setView] = useState("list");
  const [meetings, setMeetings] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(null);
  const [editing, setEditing] = useState(null);
  const [toast, setToast] = useState("");
  const [wipeOpen, setWipeOpen] = useState(false);
  const [wipeText, setWipeText] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    enableCrmPwa();
    return () => disableCrmPwa();
  }, []);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem("cannes-crm-install-hint") === "1";
    } catch {
      dismissed = false;
    }
    setShowInstall(isIosSafari() && !dismissed);
  }, []);

  async function refresh() {
    setMeetings(await listMeetings());
  }

  useEffect(() => {
    refresh();
  }, []);

  function notify(message) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  }

  const visible = useMemo(
    () => meetings.filter((item) => matchesFilter(item, filter)),
    [meetings, filter]
  );
  const selected = meetings.find((item) => item.id === selectedId) || null;

  function openNew() {
    setEditing(null);
    setSelectedId(null);
    setView("form");
  }

  function openDetail(id) {
    setSelectedId(id);
    setView("detail");
  }

  async function persist(meeting) {
    const wasEdit = Boolean(editing);
    await saveMeeting(meeting);
    await refresh();
    setSelectedId(meeting.id);
    setEditing(null);
    setView(wasEdit ? "detail" : "list");
    notify("RDV enregistré");
  }

  async function onCopy(meeting) {
    const ok = await copyText(formatMeeting(meeting));
    notify(ok ? "Fiche copiée" : "Copie impossible");
  }

  async function onExport() {
    const ok = await copyText(formatAllMeetings(meetings));
    notify(ok ? "Export copié" : "Copie impossible");
  }

  async function onDeleteOne() {
    if (!deleteId) return;
    await deleteMeeting(deleteId);
    setDeleteId("");
    await refresh();
    setView("list");
    notify("RDV supprimé");
  }

  async function onWipe() {
    if (wipeText.trim().toUpperCase() !== "EFFACER") return;
    await clearMeetings();
    setWipeOpen(false);
    setWipeText("");
    await refresh();
    setView("list");
    notify("Toutes les données ont été effacées");
  }

  function dismissInstall() {
    try {
      localStorage.setItem("cannes-crm-install-hint", "1");
    } catch {
      /* ignore */
    }
    setShowInstall(false);
  }

  return (
    <div className="crm-app">
      <div className="crm-shell">
        <header className="crm-header">
          {view !== "list" ? (
            <button className="crm-back" type="button" onClick={() => setView(view === "form" && selected ? "detail" : "list")}>
              ← Retour
            </button>
          ) : (
            <div>
              <p className="crm-kicker">Privé</p>
              <h1 className="crm-title">⚓ Severin BD — Cannes CRM</h1>
            </div>
          )}
        </header>

        {view === "list" ? (
          <>
            <button className="crm-btn" type="button" onClick={openNew}>
              + Nouveau RDV
            </button>

            {showInstall ? (
              <div className="crm-hint">
                <strong>Écran d’accueil :</strong> Partager → Sur l’écran d’accueil. L’app s’ouvrira sans barre Safari.
                <button className="crm-btn crm-btn-ghost" type="button" onClick={dismissInstall}>
                  Masquer
                </button>
              </div>
            ) : null}

            <div className="crm-filters" role="tablist" aria-label="Filtres">
              {FILTERS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`crm-chip ${filter === item.id ? "active" : ""}`}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {visible.length === 0 ? (
              <div className="crm-empty">
                <p>Aucun rendez-vous. Touchez + Nouveau RDV pour commencer.</p>
              </div>
            ) : (
              visible.map((meeting) => {
                const interest = interestMeta(meeting.interest);
                return (
                  <button
                    key={meeting.id}
                    type="button"
                    className="crm-card"
                    onClick={() => openDetail(meeting.id)}
                  >
                    <div className="crm-card-top">
                      <h2>{meeting.company}</h2>
                      <span className="crm-card-time">
                        {formatTime(meeting.createdAt)}
                        <em>{formatDate(meeting.createdAt)}</em>
                      </span>
                    </div>
                    <p className="crm-card-contact">{meeting.contactName || "Contact non renseigné"}</p>
                    <div className="crm-meta">
                      <span className="crm-tag">{meeting.project}</span>
                      <span className="crm-tag">{interest.stars} {interest.label}</span>
                      <span className="crm-tag">{meeting.nextAction}</span>
                    </div>
                  </button>
                );
              })
            )}

            <div className="crm-actions">
              <button className="crm-btn crm-btn-secondary" type="button" onClick={onExport} disabled={!meetings.length}>
                Exporter tous les RDV
              </button>
              <button className="crm-btn crm-btn-ghost" type="button" onClick={() => setWipeOpen(true)}>
                Effacer toutes les données
              </button>
            </div>
          </>
        ) : null}

        {view === "form" ? (
          <>
            <h1 className="crm-title">{editing ? "Modifier le RDV" : "Nouveau RDV"}</h1>
            <MeetingForm
              initial={editing || emptyForm}
              onCancel={() => setView(selected ? "detail" : "list")}
              onSave={persist}
            />
          </>
        ) : null}

        {view === "detail" && selected ? (
          <div className="crm-detail">
            <div className="crm-detail-block crm-detail-hero">
              <h1>{selected.company}</h1>
              <p>{formatDateTime(selected.createdAt)}</p>
            </div>
            <div className="crm-detail-block">
              <h2>Contact</h2>
              <p>{selected.contactName || "—"}</p>
            </div>
            <div className="crm-detail-block">
              <h2>Catégorie</h2>
              <p>{selected.category || "—"}</p>
            </div>
            <div className="crm-detail-block">
              <h2>Projet</h2>
              <p>{selected.project || "—"}</p>
            </div>
            <div className="crm-detail-block">
              <h2>Intérêt</h2>
              <p>{formatInterest(selected.interest)}</p>
            </div>
            <div className="crm-detail-block">
              <h2>Compte rendu</h2>
              <p>{selected.notes || "—"}</p>
            </div>
            <div className="crm-detail-block">
              <h2>Suite</h2>
              <p>{selected.nextAction || "—"}</p>
            </div>
            <div className="crm-detail-block">
              <h2>Relance</h2>
              <p>{formatDate(selected.followUpDate)}</p>
            </div>
            {selected.photo ? (
              <div className="crm-photo">
                <PhotoPreview photo={selected.photo} />
              </div>
            ) : null}
            <div className="crm-actions">
              <button
                className="crm-btn"
                type="button"
                onClick={() => {
                  setEditing(selected);
                  setView("form");
                }}
              >
                Modifier
              </button>
              <button className="crm-btn crm-btn-secondary" type="button" onClick={() => onCopy(selected)}>
                Copier la fiche
              </button>
              <button className="crm-btn crm-btn-danger" type="button" onClick={() => setDeleteId(selected.id)}>
                Supprimer
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {toast ? <div className="crm-toast">{toast}</div> : null}

      {wipeOpen ? (
        <div className="crm-modal" role="dialog" aria-modal="true">
          <div className="crm-modal-card">
            <h2>Effacer toutes les données ?</h2>
            <p>
              Action irréversible. Tous les rendez-vous et photos stockés sur cet iPhone seront définitivement perdus.
              Tapez <strong>EFFACER</strong> pour confirmer.
            </p>
            <input
              autoCapitalize="characters"
              autoCorrect="off"
              placeholder="EFFACER"
              value={wipeText}
              onChange={(e) => setWipeText(e.target.value)}
            />
            <div className="crm-modal-actions">
              <button
                className="crm-btn crm-btn-danger"
                type="button"
                disabled={wipeText.trim().toUpperCase() !== "EFFACER"}
                onClick={onWipe}
              >
                Tout effacer
              </button>
              <button className="crm-btn crm-btn-secondary" type="button" onClick={() => { setWipeOpen(false); setWipeText(""); }}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {deleteId ? (
        <div className="crm-modal" role="dialog" aria-modal="true">
          <div className="crm-modal-card">
            <h2>Supprimer ce RDV ?</h2>
            <p>La fiche et la photo associées seront supprimées de cet iPhone.</p>
            <div className="crm-modal-actions">
              <button className="crm-btn crm-btn-danger" type="button" onClick={onDeleteOne}>
                Supprimer
              </button>
              <button className="crm-btn crm-btn-secondary" type="button" onClick={() => setDeleteId("")}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
