import { interestMeta } from "./constants";

export function formatDateTime(timestamp) {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "—";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year} ${hours}h${minutes}`;
}

export function formatDate(value) {
  if (!value) return "—";
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split("-");
    return `${day}/${month}/${year}`;
  }
  return formatDateTime(value).split(" ")[0];
}

export function formatTime(timestamp) {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "—";
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}h${minutes}`;
}

export function formatInterest(value) {
  const meta = interestMeta(value);
  return `${meta.stars} ${meta.label}`;
}

export function formatMeeting(meeting) {
  const company = (meeting.company || "Sans société").toUpperCase();
  return [
    `⚓ ${company} — ${formatDateTime(meeting.createdAt)}`,
    `👤 Contact : ${meeting.contactName || "—"}`,
    `🏷 Catégorie : ${meeting.category || "—"}`,
    `🚤 Projet : ${meeting.project || "—"}`,
    `⭐ Intérêt : ${formatInterest(meeting.interest)}`,
    "🎙 COMPTE RENDU",
    meeting.notes?.trim() || "—",
    "➡️ SUITE",
    meeting.nextAction || "—",
    `📅 Relance : ${formatDate(meeting.followUpDate)}`,
    "————————————",
  ].join("\n");
}

export function formatAllMeetings(meetings) {
  const chronological = [...meetings].sort((a, b) => a.createdAt - b.createdAt);
  const header = [
    "⚓ SEVERIN BD — CANNES CRM",
    `Export du ${formatDateTime(Date.now())}`,
    `${chronological.length} rendez-vous`,
    "",
  ].join("\n");
  if (!chronological.length) return `${header}Aucun rendez-vous.`;
  return `${header}${chronological.map(formatMeeting).join("\n\n")}`;
}
