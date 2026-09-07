export const CATEGORIES = [
  "Constructeur",
  "Dealer / réseau",
  "Financement",
  "Assurance",
  "Électronique / IoT",
  "Équipementier",
  "Concurrent",
  "Autre",
];

export const PROJECTS = [
  "Greenbay",
  "Marvel",
  "BlueHawk",
  "Réseau France",
  "Financement",
  "Veille concurrence",
  "Autre",
];

export const NEXT_ACTIONS = [
  "Envoyer mail",
  "Envoyer présentation",
  "Appeler",
  "Relancer",
  "Organiser RDV",
  "Demander proposition",
  "Rien",
];

export const INTEREST_LEVELS = [
  { value: 1, stars: "⭐", label: "Faible" },
  { value: 2, stars: "⭐⭐", label: "Moyen" },
  { value: 3, stars: "⭐⭐⭐", label: "Bon" },
  { value: 4, stars: "⭐⭐⭐⭐", label: "Prioritaire" },
];

export const FILTERS = [
  { id: "all", label: "Tous" },
  { id: "priority", label: "Prioritaires" },
  { id: "greenbay", label: "Greenbay" },
  { id: "marvel", label: "Marvel" },
  { id: "bluehawk", label: "BlueHawk" },
  { id: "finance", label: "Financement" },
  { id: "reseau", label: "Réseau" },
];

export function interestMeta(value) {
  return INTEREST_LEVELS.find((item) => item.value === Number(value)) || INTEREST_LEVELS[0];
}

export function matchesFilter(meeting, filterId) {
  if (filterId === "priority") return Number(meeting.interest) === 4;
  if (filterId === "greenbay") return meeting.project === "Greenbay";
  if (filterId === "marvel") return meeting.project === "Marvel";
  if (filterId === "bluehawk") return meeting.project === "BlueHawk";
  if (filterId === "finance") return meeting.project === "Financement";
  if (filterId === "reseau") return meeting.project === "Réseau France";
  return true;
}
