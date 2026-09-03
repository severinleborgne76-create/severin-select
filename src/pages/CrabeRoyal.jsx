import { useContext } from "react";
import { LangContext } from "../i18n/context";
import LeadForm from "../components/LeadForm";

function Photo({ src, alt, caption, className = "" }) {
  return (
    <figure className={`jadran-photo ${className}`.trim()}>
      <img src={src} alt={alt} />
      {caption ? <figcaption className="jadran-caption">{caption}</figcaption> : null}
    </figure>
  );
}

export default function CrabeRoyal() {
  const { lang } = useContext(LangContext);
  const fr = lang === "fr";
  const img = "/images/crabe-royal";

  return (
    <main className="jadran-page">
      <section className="jadran-hero">
        <div className="jadran-hero-media king-hero">
          <img
            src={`${img}/hero.jpg`}
            alt={fr ? "Crabe royal vivant tenu à bord, devant les casiers" : "Live king crab held on deck, in front of the pots"}
          />
        </div>
        <div className="jadran-hero-overlay" />
        <div className="jadran-hero-copy">
          <p className="eyebrow">CRUSTAOCÉANS · NORWAY</p>
          <h1>{fr ? "Crabe Royal vivant de Norvège" : "Live Norwegian King Crab"}</h1>
          <p>{fr ? "King of the Ocean · Paralithodes camtschaticus" : "King of the Ocean · Paralithodes camtschaticus"}</p>
          <span className="selection-chip">{fr ? "SÉLECTION SÉVERIN" : "SÉVERIN SELECTION"}</span>
        </div>
      </section>

      <section className="jadran-chapter">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LA NORVÈGE" : "NORWAY"}</p>
            <h2>{fr ? "Les eaux froides du Grand Nord." : "The cold waters of the High North."}</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Le crabe royal est pêché dans les eaux froides de Norvège, exclusivement aux casiers et aux pièges. La pêche est strictement encadrée par des quotas et s'interrompt notamment en mars et avril, pendant la période de mue."
                : "King crab is caught in the cold waters of Norway, exclusively in pots and traps. The fishery is strictly quota-managed and stops in particular in March and April, during the moulting period."}
            </p>
            <p>
              {fr
                ? "Cette gestion rigoureuse de la ressource et les conditions naturelles des eaux norvégiennes font partie intégrante de l'identité de ce produit d'exception."
                : "This rigorous management of the resource, and the natural conditions of Norwegian waters, are an integral part of the identity of this exceptional product."}
            </p>
          </div>
        </div>
      </section>

      <Photo
        className="jadran-full king-aurora"
        src={`${img}/norvege.jpg`}
        alt={fr ? "Aurores boréales au-dessus d’un village côtier en Norvège" : "Northern lights over a coastal village in Norway"}
        caption={fr ? "Norvège" : "Norway"}
      />

      <section className="jadran-chapter jadran-chapter--tight">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LA PÊCHE" : "THE FISHERY"}</p>
            <h2>{fr ? "Casiers et pièges." : "Pots and traps."}</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Le crabe royal est pêché exclusivement aux casiers et aux pièges. La pêche est strictement encadrée par des quotas et s'interrompt notamment en mars et avril, pendant la période de mue."
                : "King crab is caught exclusively in pots and traps. The fishery is strictly quota-managed and stops in particular in March and April, during the moulting period."}
            </p>
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "L’ANIMAL" : "THE ANIMAL"}</p>
            <h2>King of the Ocean</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Paralithodes camtschaticus est un animal spectaculaire, reconnaissable à sa puissante carapace hérissée de pointes. Les calibres commercialisés se situent principalement entre 2 et 4 kg, mais certains spécimens peuvent atteindre 6 à 7 kg."
                : "Paralithodes camtschaticus is a spectacular animal, recognisable by its powerful, spike-covered carapace. Commercial sizes are mainly between 2 and 4 kg, but some specimens can reach 6 to 7 kg."}
            </p>
            <p>
              {fr
                ? "Une taille exceptionnelle pour un crustacé qui compte parmi les produits de la mer les plus emblématiques de Norvège."
                : "An exceptional size for a crustacean that is among Norway’s most emblematic seafood products."}
            </p>
            <div className="fact-grid">
              <div><strong>2–4 kg</strong><span>{fr ? "Calibres principaux" : "Main sizes"}</span></div>
              <div><strong>6–7 kg</strong><span>{fr ? "Certains spécimens" : "Some specimens"}</span></div>
              <div><strong>{fr ? "Casiers" : "Pots"}</strong><span>{fr ? "Pêche" : "Fishery"}</span></div>
              <div><strong>{fr ? "Norvège" : "Norway"}</strong><span>{fr ? "Origine" : "Origin"}</span></div>
            </div>
          </div>
        </div>
      </section>

      <Photo
        className="jadran-wide"
        src={`${img}/animal.jpg`}
        alt={fr ? "Crabe royal, carapace épineuse" : "King crab, spiny carapace"}
        caption={fr ? "Paralithodes camtschaticus" : "Paralithodes camtschaticus"}
      />

      <section className="jadran-chapter">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LA SÉLECTION" : "THE SELECTION"}</p>
            <h2>{fr ? "L'expertise CrustaOcéans" : "CrustaOcéans expertise"}</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Pour Séverin Select, le crabe royal est sélectionné en partenariat avec CrustaOcéans, spécialiste des crustacés vivants."
                : "For Séverin Select, king crab is selected in partnership with CrustaOcéans, a specialist in live crustaceans."}
            </p>
            <p>
              {fr
                ? "Leur savoir-faire couvre la sélection des animaux, leur réception, leur maintien en bassin et l'organisation de leur expédition. Cette maîtrise du vivant permet de proposer un produit sélectionné pour sa qualité, sa vitalité et sa traçabilité."
                : "Their know-how covers the selection of the animals, their intake, holding in tanks and the organisation of dispatch. This command of the live animal makes it possible to offer a product selected for its quality, vitality and traceability."}
            </p>
          </div>
        </div>
      </section>

      <section className="jadran-chapter jadran-chapter--tight">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LE VIVANT" : "KEPT ALIVE"}</p>
            <h2>{fr ? "De la capture à l'expédition, une traçabilité maîtrisée." : "From capture to dispatch, controlled traceability."}</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Chaque lot est suivi depuis sa capture en Norvège jusqu'à son expédition. À son arrivée chez CrustaOcéans, le crabe royal est maintenu vivant en bassin et tracé selon sa date de réception jusqu'à son départ."
                : "Each lot is tracked from capture in Norway through to dispatch. On arrival at CrustaOcéans, the king crab is kept alive in tanks and traced by intake date until it leaves."}
            </p>
            <p>
              {fr
                ? "Certains spécimens disposent également d'une identification individuelle par QR code permettant notamment de retrouver leur date de capture et leur poids."
                : "Some specimens also have individual identification by QR code, making it possible in particular to recover their capture date and weight."}
            </p>
          </div>
        </div>
      </section>

      <div className="jadran-pair">
        <Photo
          src={`${img}/vivant.jpg`}
          alt={fr ? "Crabe royal vivant préparé pour l’expédition" : "Live king crab prepared for dispatch"}
          caption={fr ? "Maintenu vivant" : "Kept alive"}
        />
        <Photo
          src={`${img}/tracabilite.jpg`}
          alt={fr ? "Étiquette de traçabilité sur un crabe royal" : "Traceability tag on a king crab"}
          caption={fr ? "Suivi, animal par animal" : "Tracked, animal by animal"}
        />
      </div>

      <section className="jadran-chapter">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LA TRAÇABILITÉ" : "TRACEABILITY"}</p>
            <h2>{fr ? "De la capture au départ." : "From capture to dispatch."}</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Chaque lot est suivi depuis sa capture en Norvège jusqu'à son expédition. Certains spécimens disposent également d'une identification individuelle par QR code permettant notamment de retrouver leur date de capture et leur poids."
                : "Each lot is tracked from capture in Norway through to dispatch. Some specimens also have individual identification by QR code, making it possible in particular to recover their capture date and weight."}
            </p>
          </div>
        </div>
      </section>

      <Photo
        className="jadran-wide"
        src={`${img}/expedition.jpg`}
        alt={fr ? "Crabe royal vivant dans son contenant d’expédition" : "Live king crab in its dispatch container"}
        caption={fr ? "Le départ" : "Dispatch"}
      />

      <section className="section accent-panel">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "EN CUISINE" : "IN THE KITCHEN"}</p>
            <h2>{fr ? "Une chair ferme, douce et délicate." : "Firm, mild and delicate flesh."}</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Sous son imposante carapace, le crabe royal offre une chair ferme à la saveur douce et délicate. Sa texture et la générosité de ses pattes permettent des préparations très simples : vapeur, grill ou cuisson douce suffisent à mettre le produit en valeur."
                : "Beneath its imposing carapace, king crab offers firm flesh with a mild, delicate flavour. Its texture and the generosity of its legs allow very simple preparations: steaming, grilling or gentle cooking are enough to show the product at its best."}
            </p>
            <p>
              {fr
                ? "Une version surgelée est également disponible. Elle est produite pendant la période où le taux de chair est optimal, en cru glacé ou après cuisson en saumure. Le glaçage de protection est de 10 %, non compensé."
                : "A frozen version is also available. It is produced when the meat yield is at its best, either raw-glazed or after cooking in brine. Protective glaze is 10%, not compensated."}
            </p>
          </div>
        </div>
      </section>

      <section className="jadran-chapter">
        <div className="section-heading left">
          <p className="eyebrow">{fr ? "POURQUOI SÉVERIN SELECT ?" : "WHY SÉVERIN SELECT?"}</p>
          <h2>
            {fr
              ? "Sélectionné avec CrustaOcéans, pour sa qualité, sa vitalité et sa traçabilité."
              : "Selected with CrustaOcéans, for quality, vitality and traceability."}
          </h2>
          <p>
            {fr
              ? "Sélection Séverin. Le crabe royal est pêché en Norvège aux casiers et aux pièges, puis sélectionné, maintenu vivant et tracé en partenariat avec CrustaOcéans, spécialiste des crustacés vivants."
              : "Séverin Selection. King crab is caught in Norway in pots and traps, then selected, kept alive and traced in partnership with CrustaOcéans, a specialist in live crustaceans."}
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="section-heading">
          <p className="eyebrow">{fr ? "POUR LES PROFESSIONNELS" : "FOR PROFESSIONALS"}</p>
          <h2>{fr ? "Où trouver ce produit ?" : "Where can I find this product?"}</h2>
          <p>
            {fr
              ? "Indiquez votre établissement et votre localisation. Aucun distributeur n’est affiché publiquement sur Séverin Select."
              : "Tell us about your business and location. No distributor is publicly listed on Séverin Select."}
          </p>
        </div>
        <LeadForm
          lang={lang}
          product={fr ? "Crabe Royal vivant de Norvège — CrustaOcéans" : "Live Norwegian King Crab — CrustaOcéans"}
        />
      </section>
    </main>
  );
}
