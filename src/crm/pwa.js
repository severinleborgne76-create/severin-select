const APP_TITLE = "⚓ Severin BD — Cannes CRM";
const SITE_TITLE = "Séverin Select";
const injected = [];

function upsertMeta(name, content) {
  let node = document.querySelector(`meta[name="${name}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute("name", name);
    document.head.appendChild(node);
    injected.push(node);
  } else if (!injected.includes(node)) {
    node.dataset.crmPrev = node.getAttribute("content") || "";
  }
  node.setAttribute("content", content);
}

function upsertLink(rel, href, extra = {}) {
  let node = document.querySelector(`link[rel="${rel}"]`);
  if (!node) {
    node = document.createElement("link");
    node.setAttribute("rel", rel);
    document.head.appendChild(node);
    injected.push(node);
  } else if (!injected.includes(node)) {
    node.dataset.crmPrev = node.getAttribute("href") || "";
  }
  node.setAttribute("href", href);
  Object.entries(extra).forEach(([key, value]) => node.setAttribute(key, value));
}

export function enableCrmPwa() {
  document.title = APP_TITLE;
  document.documentElement.lang = "fr";
  document.documentElement.dataset.crm = "true";

  upsertMeta("theme-color", "#071923");
  upsertMeta("apple-mobile-web-app-capable", "yes");
  upsertMeta("mobile-web-app-capable", "yes");
  upsertMeta("apple-mobile-web-app-status-bar-style", "black-translucent");
  upsertMeta("apple-mobile-web-app-title", "Cannes CRM");
  upsertLink("manifest", "/manifest.webmanifest");
  upsertLink("apple-touch-icon", "/icons/crm-180.png", { sizes: "180x180" });

  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.dataset.crmPrev = viewport.getAttribute("content") || "";
    viewport.setAttribute(
      "content",
      "width=device-width, initial-scale=1, viewport-fit=cover"
    );
  }

  if (import.meta.env.PROD && "serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js").catch(() => {});
  }
}

export function disableCrmPwa() {
  document.title = SITE_TITLE;
  delete document.documentElement.dataset.crm;

  injected.forEach((node) => node.remove());
  injected.length = 0;

  document.querySelectorAll("[data-crm-prev]").forEach((node) => {
    const prev = node.dataset.crmPrev;
    if (prev) node.setAttribute(node.tagName === "LINK" ? "href" : "content", prev);
    else if (node.getAttribute("name") !== "viewport") node.remove();
    delete node.dataset.crmPrev;
  });
}

export function isIosSafari() {
  const ua = navigator.userAgent || "";
  const iOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  return iOS && !standalone;
}
