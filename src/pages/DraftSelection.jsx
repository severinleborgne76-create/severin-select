import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LangContext } from "../i18n/context";
import LeadForm from "../components/LeadForm";
import { getDraftProduct } from "../data/draftProducts";

function PlaceholderPhoto() {
  return (
    <div className="jadran-hero-media photo-placeholder" data-photo-placeholder="true">
      <div className="image-fallback" />
    </div>
  );
}

function Reserved({ fr, labelFr, labelEn, titleFr, titleEn, children }) {
  return (
    <section className="jadran-chapter jadran-chapter--tight reserved-block">
      <div className="split">
        <div>
          <p className="eyebrow">{fr ? labelFr : labelEn}</p>
          <h2>{fr ? titleFr : titleEn}</h2>
        </div>
        <div className="prose">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function DraftSelection({ slug }) {
  const { lang } = useContext(LangContext);
  const fr = lang === "fr";
  const product = getDraftProduct(slug);

  if (!product) return <Navigate to="/" replace />;

  const title = fr ? product.titleFr : product.titleEn;
  const origin = fr ? product.originFr : product.originEn;
  const eyebrow = [product.producer, origin].filter(Boolean).join(" · ").toUpperCase();
  const scientific = product.scientificName;
  const form = fr ? product.formFr : product.formEn;
  const whySelected = fr ? product.whySelectedFr : product.whySelectedEn;
  const method = fr ? product.methodFr : product.methodEn;

  const knownFacts = [
    scientific ? { value: scientific, label: fr ? "Nom scientifique" : "Scientific name" } : null,
    origin ? { value: origin, label: fr ? "Origine" : "Origin" } : null,
    product.producer ? { value: product.producer, label: fr ? "Partenaire" : "Partner" } : null,
    form ? { value: form, label: fr ? "Présentation" : "Form" } : null
  ].filter(Boolean);

  return (
    <main className="jadran-page">
      <section className="jadran-hero">
        {product.heroImage ? (
          <div className="jadran-hero-media">
            <img
              src={product.heroImage}
              alt={title}
              data-photo-placeholder={product.placeholder ? "true" : undefined}
            />
          </div>
        ) : (
          <PlaceholderPhoto />
        )}
        <div className="jadran-hero-overlay" />
        <div className="jadran-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>
            {scientific
              ? scientific
              : (fr ? product.lineFr : product.lineEn)}
          </p>
          <span className="selection-chip">
            {fr ? product.badgeFr : product.badgeEn}
          </span>
        </div>
      </section>

      <section className="jadran-chapter">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LE PRODUIT" : "THE PRODUCT"}</p>
            <h2>{fr ? product.lineFr : product.lineEn}</h2>
          </div>
          <div className="prose">
            <p>{fr ? product.introFr : product.introEn}</p>
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "L’ORIGINE" : "THE ORIGIN"}</p>
            <h2>{origin || product.producer}</h2>
          </div>
          <div className="prose">
            <p>{fr ? product.originStoryFr : product.originStoryEn}</p>
            {knownFacts.length > 0 && (
              <div className="fact-grid">
                {knownFacts.map(fact => (
                  <div key={fact.label}>
                    <strong>{fact.value}</strong>
                    <span>{fact.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="jadran-chapter">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "POURQUOI JE L’AI SÉLECTIONNÉ" : "WHY I SELECTED IT"}</p>
            <h2>
              {whySelected
                ? (fr ? "Une sélection personnelle." : "A personal selection.")
                : (fr ? "Un texte encore à écrire." : "A text still to be written.")}
            </h2>
          </div>
          <div className="prose">
            <p>
              {whySelected || (fr
                ? "Ce bloc est réservé à Séverin. Il dira, pour cette référence, pourquoi elle entre dans la sélection : l’origine, le producteur, le geste, ce qui la rend singulière."
                : "This block is reserved for Séverin. It will say, for this reference, why it enters the selection: the origin, the producer, the craft, what makes it singular.")}
            </p>
          </div>
        </div>
      </section>

      {method ? (
        <section className="jadran-chapter jadran-chapter--tight">
          <div className="split">
            <div>
              <p className="eyebrow">{fr ? "LA MÉTHODE" : "THE METHOD"}</p>
              <h2>{fr ? "Production et pêche." : "Production and fishing."}</h2>
            </div>
            <div className="prose">
              <p>{method}</p>
            </div>
          </div>
        </section>
      ) : (
        <Reserved
          fr={fr}
          labelFr="LA MÉTHODE"
          labelEn="THE METHOD"
          titleFr="Le geste n’est pas encore écrit."
          titleEn="The craft is not yet written."
        >
          <p>
            {fr
              ? "Pêche ou élevage, saison, engin, zone : rien n’est affiché tant que le producteur ne l’a pas confirmé."
              : "Fishing or farming, season, gear, zone: nothing is shown until the producer has confirmed it."}
          </p>
        </Reserved>
      )}

      <Reserved
        fr={fr}
        labelFr="CONDITIONNEMENT · CALIBRES"
        labelEn="PACKING · SIZES"
        titleFr="Les formats viendront ensuite."
        titleEn="The formats will follow."
      >
        <p>
          {fr
            ? "Calibres, conditionnements, DLC/DDM et formats destinés aux professionnels seront indiqués ici dès qu’ils seront connus."
            : "Sizes, packing, shelf life and professional formats will be stated here once known."}
        </p>
        <div className="fact-grid reserved-facts">
          <div><strong>—</strong><span>{fr ? "Calibres" : "Sizes"}</span></div>
          <div><strong>—</strong><span>{fr ? "Conditionnement" : "Packing"}</span></div>
          <div><strong>—</strong><span>{fr ? "Certifications" : "Certifications"}</span></div>
          <div><strong>—</strong><span>{fr ? "Logistique" : "Logistics"}</span></div>
        </div>
      </Reserved>

      <section className="jadran-chapter">
        <div className="section-heading left">
          <p className="eyebrow">{fr ? "POURQUOI SÉVERIN SELECT ?" : "WHY SÉVERIN SELECT?"}</p>
          <h2>
            {fr
              ? "Une sélection, pas une fiche produit."
              : "A selection, not a product sheet."}
          </h2>
          <p>{fr ? product.whySeverinFr : product.whySeverinEn}</p>
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
        <LeadForm lang={lang} product={`${title} — ${product.producer}`} />
      </section>

      <section className="source-note">
        <p>
          {fr
            ? "Sélection en préparation. Les photographies définitives du producteur n’ont pas encore été reçues : le visuel actuel est un placeholder, remplaçable dès qu’une image autorisée sera disponible. Aucune donnée technique non confirmée n’est affichée."
            : "Selection in preparation. The producer’s final photographs have not yet been received: the current visual is a placeholder, to be replaced once an authorised image is available. No unconfirmed technical data is shown."}
        </p>
      </section>
    </main>
  );
}
