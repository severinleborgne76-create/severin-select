/**
 * Références en préparation — à montrer aux producteurs.
 * Les champs à null ne doivent pas recevoir de contenu inventé.
 * heroImage / image : placeholders jusqu’aux photographies producteur.
 */
export const draftProducts = [
  {
    slug: "saint-jacques-normandie",
    href: "/selection/saint-jacques-normandie",
    status: "preparation",
    placeholder: true,
    badgeFr: "EN PROJET",
    badgeEn: "PROJECT",
    titleFr: "Coquille Saint-Jacques de Normandie",
    titleEn: "Normandy scallop",
    lineFr: "Une saison, une noix, un territoire.",
    lineEn: "A season, a nut, a territory.",
    originFr: "Normandie",
    originEn: "Normandy",
    producer: "Normandie Seafood",
    scientificName: "Pecten maximus",
    formFr: null,
    formEn: null,
    image: null,
    heroImage: null,
    introFr:
      "La coquille Saint-Jacques de Normandie est l’un des produits de la mer les plus attendus de la table française. On la recherche pour sa noix, son corail, et pour ce qu’elle dit d’un littoral.",
    introEn:
      "The Normandy scallop is one of the most anticipated seafoods on the French table. It is sought for its nut, its coral, and for what it says of a coastline.",
    originStoryFr:
      "Cette référence est construite en partenariat avec Normandie Seafood, autour d’un produit d’origine normande : Pecten maximus. Le détail du gisement, du geste de pêche et de la saison sera indiqué ici dès qu’il sera confirmé avec le producteur.",
    originStoryEn:
      "This reference is being built with Normandie Seafood, around a Norman product: Pecten maximus. The fishing ground, the method and the season will be stated here once confirmed with the producer.",
    methodFr: null,
    methodEn: null,
    whySelectedFr: null,
    whySelectedEn: null,
    whySeverinFr:
      "Séverin Select ne présente pas une ligne de mareyage. Il présente une coquille Saint-Jacques choisie pour son origine, son producteur, et la place qu’elle peut tenir dans une cuisine exigeante.",
    whySeverinEn:
      "Séverin Select does not present a wholesale line. It presents a scallop chosen for its origin, its producer, and the place it can hold in a demanding kitchen.",
    packaging: null,
    calibres: null,
    certifications: null,
    logistics: null
  },
  {
    slug: "araignee-normandie",
    href: "/selection/araignee-normandie",
    status: "preparation",
    placeholder: true,
    badgeFr: "EN PROJET",
    badgeEn: "PROJECT",
    titleFr: "Chair d’araignée de mer de Normandie",
    titleEn: "Normandy spider crab meat",
    lineFr: "Un crustacé de travail, une chair à révéler.",
    lineEn: "A working crustacean, a flesh to reveal.",
    originFr: "Normandie",
    originEn: "Normandy",
    producer: "Normandie Seafood",
    scientificName: null,
    formFr: "Chair",
    formEn: "Meat",
    image: null,
    heroImage: null,
    introFr:
      "L’araignée de mer est un crustacé de littoral, souvent moins mis en avant que le tourteau ou le homard. Ici, c’est sa chair qui est regardée : un produit de préparation, destiné à la cuisine.",
    introEn:
      "Spider crab is a coastal crustacean, often less prominent than brown crab or lobster. Here it is the meat that is considered: a prepared product, intended for the kitchen.",
    originStoryFr:
      "Cette référence est construite en partenariat avec Normandie Seafood, à partir d’araignées de mer de Normandie. L’espèce exacte, le lieu de pêche et la méthode d’extraction de la chair seront précisés avec le producteur.",
    originStoryEn:
      "This reference is being built with Normandie Seafood, from Normandy spider crab. The exact species, fishing ground and extraction method will be specified with the producer.",
    methodFr: null,
    methodEn: null,
    whySelectedFr: null,
    whySelectedEn: null,
    whySeverinFr:
      "Séverin Select s’intéresse à ce que l’on ne trouve pas naturellement sur toutes les cartes : une chair de crustacé liée à un territoire, travaillée par un partenaire, et présentée pour ce qu’elle est — pas comme une référence de catalogue.",
    whySeverinEn:
      "Séverin Select is interested in what does not naturally appear on every menu: crustacean meat tied to a territory, worked by a partner, and presented for what it is — not as a catalogue reference.",
    packaging: null,
    calibres: null,
    certifications: null,
    logistics: null
  },
  {
    slug: "couteaux-dzm",
    href: "/selection/couteaux-dzm",
    status: "preparation",
    placeholder: true,
    badgeFr: "EN PROJET",
    badgeEn: "PROJECT",
    titleFr: "Couteaux",
    titleEn: "Razor clams",
    lineFr: "Un coquillage de précision, encore à arrêter.",
    lineEn: "A precise shellfish, still to be settled.",
    originFr: null,
    originEn: null,
    producer: "DZM",
    scientificName: null,
    formFr: null,
    formEn: null,
    image: null,
    heroImage: null,
    introFr:
      "Le couteau est un coquillage à la chair fine, que l’on sert souvent cru ou à peine saisi. Sa présence en cuisine tient à la fraîcheur, à la propreté du sable, et à la justesse du calibre.",
    introEn:
      "The razor clam is a fine-fleshed shellfish, often served raw or barely seared. Its place in the kitchen depends on freshness, the absence of sand, and the right size.",
    originStoryFr:
      "Cette référence est construite en partenariat avec DZM. L’origine, l’espèce, le bateau et le geste de pêche seront indiqués ici dès que la sélection définitive sera arrêtée avec le producteur.",
    originStoryEn:
      "This reference is being built with DZM. Origin, species, vessel and fishing method will be stated here once the final selection is settled with the producer.",
    methodFr: null,
    methodEn: null,
    whySelectedFr: null,
    whySelectedEn: null,
    whySeverinFr:
      "Séverin Select ne retient un couteau que s’il peut être raconté : un producteur, un geste, une qualité. La référence exacte retenue avec DZM n’est pas encore close.",
    whySeverinEn:
      "Séverin Select retains a razor clam only if it can be told: a producer, a gesture, a quality. The exact reference with DZM is not yet closed.",
    packaging: null,
    calibres: null,
    certifications: null,
    logistics: null
  }
];

export function getDraftProduct(slug) {
  return draftProducts.find(item => item.slug === slug);
}
