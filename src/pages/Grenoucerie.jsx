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

export default function Grenoucerie() {
  const { lang } = useContext(LangContext);
  const fr = lang === "fr";
  const img = "/images/grenoucerie";

  return (
    <main className="jadran-page">
      <section className="jadran-hero">
        <div className="jadran-hero-media">
          <img
            src={`${img}/lyonnaise-natural.jpg`}
            alt={fr ? "Cuisses de grenouille, préparation" : "Frog legs, preparation"}
          />
        </div>
        <div className="jadran-hero-overlay" />
        <div className="jadran-hero-copy">
          <p className="eyebrow">GRENOUCERIE · SPAIN</p>
          <h1>{fr ? "Grenouille" : "Frog"}</h1>
          <p>{fr ? "Carbellino de Sayago · Zamora" : "Carbellino de Sayago · Zamora"}</p>
          <span className="selection-chip">{fr ? "SÉLECTION SÉVERIN" : "SÉVERIN SELECTION"}</span>
        </div>
      </section>

      <section className="jadran-chapter">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LE PRODUIT" : "THE PRODUCT"}</p>
            <h2>{fr ? "Un filet maigre, une chair nette." : "A lean fillet, a clean flesh."}</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Grenoucerie travaille l’espèce native Pelophylax perezi. La maison décrit un filet 100 % maigre, à 0,3 g de lipides pour 100 g — une protéine animale très maigre, sans additifs."
                : "Grenoucerie works the native species Pelophylax perezi. The house describes a 100% lean fillet, at 0.3 g of fat per 100 g — a very lean animal protein, with no additives."}
            </p>
            <p>
              {fr
                ? "Plusieurs découpes existent. Nous en montrons ici le geste et la matière, pas une gamme à parcourir."
                : "Several cuts exist. What follows is the gesture and the flesh — not a range to browse."}
            </p>
          </div>
        </div>
      </section>

      <Photo
        className="jadran-wide photo-studio"
        src={`${img}/supremes-hero.jpg`}
        alt={fr ? "Les Suprêmes, cuisses de grenouille" : "Les Suprêmes, frog legs"}
        caption={fr ? "Les Suprêmes" : "Les Suprêmes"}
      />

      <div className="jadran-pair">
        <Photo
          className="photo-studio"
          src={`${img}/perles-raw.jpg`}
          alt={fr ? "La Perle, muscle isolé" : "La Perle, isolated muscle"}
          caption={fr ? "La Perle" : "La Perle"}
        />
        <Photo
          className="photo-studio"
          src={`${img}/grenouchup.jpg`}
          alt={fr ? "Le Grenouchup, découpe exclusive" : "Le Grenouchup, exclusive cut"}
          caption={fr ? "Le Grenouchup" : "Le Grenouchup"}
        />
      </div>

      <section className="dark-section">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "L’ORIGINE" : "THE ORIGIN"}</p>
            <h2>Zamora</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "À Carbellino de Sayago, dans la province de Zamora, Paula et Fabián recréent les conditions naturelles des rivières européennes. Aquaculture en cycle fermé : eau recirculée, purifiée, analysée en continu. Grenoucerie indique 11 300 hectares de territoire."
                : "In Carbellino de Sayago, in the province of Zamora, Paula and Fabián recreate the natural conditions of European rivers. Closed-cycle aquaculture: water recirculated, purified and analysed continuously. Grenoucerie states 11,300 hectares of territory."}
            </p>
            <p>
              {fr
                ? "Aucune pression sur les populations sauvages. Pelophylax perezi est élevée, jamais capturée, jamais importée d’Asie."
                : "No pressure on wild populations. Pelophylax perezi is farmed, never captured, never imported from Asia."}
            </p>
          </div>
        </div>
      </section>

      <section className="jadran-chapter">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LE SAVOIR-FAIRE" : "THE CRAFT"}</p>
            <h2>{fr ? "De l’étang au lot." : "From pond to lot."}</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Chaque lot est élevé dans une eau contrôlée, sans antibiotique préventif. Plan HACCP, analyses bactériologiques lot par lot, chaîne du froid ATP. Un code relie l’étang d’origine, la date de préparation et le transport."
                : "Each lot is raised in controlled water, without preventive antibiotics. HACCP plan, lot-by-lot bacteriological analyses, ATP cold chain. A code links the source pond, the preparation date and the transport."}
            </p>
          </div>
        </div>
      </section>

      <div className="jadran-pair">
        <Photo
          src={`${img}/lyonnaise-natural.jpg`}
          alt={fr ? "Découpe et préparation" : "Cutting and preparation"}
          caption={fr ? "Le geste" : "The gesture"}
        />
        <Photo
          className="photo-studio"
          src={`${img}/ancachup-plato.jpg`}
          alt={fr ? "Préparation gastronomique" : "Gastronomic preparation"}
          caption={fr ? "En cuisine" : "In the kitchen"}
        />
      </div>

      <section className="jadran-chapter">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LE PRODUCTEUR" : "THE PRODUCER"}</p>
            <h2>Grenoucerie</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Paula et Fabián ont commencé en 2014 avec une question simple : pourquoi l’Europe dépendrait-elle de l’importation asiatique pour une protéine liée à ses rivières ? Grenoucerie se présente comme le premier réseau d’aquaculture européenne de grenouilles en cycle fermé. Onze ans de savoir-faire."
                : "Paula and Fabián began in 2014 with a simple question: why should Europe depend on Asian imports for a protein tied to its rivers? Grenoucerie presents itself as the first European closed-cycle frog aquaculture network. Eleven years of know-how."}
            </p>
          </div>
        </div>
      </section>

      <Photo
        className="jadran-wide photo-studio"
        src={`${img}/perles-cuisinees.jpg`}
        alt={fr ? "La Perle, préparation gastronomique" : "La Perle, gastronomic preparation"}
        caption={fr ? "La Perle, en cuisine" : "La Perle, in the kitchen"}
      />

      <section className="jadran-chapter">
        <div className="section-heading left">
          <p className="eyebrow">{fr ? "POURQUOI SÉVERIN SELECT ?" : "WHY SÉVERIN SELECT?"}</p>
          <h2>
            {fr
              ? "Un produit rare, une origine européenne lisible."
              : "A rare product, a readable European origin."}
          </h2>
          <p>
            {fr
              ? "Sélection Séverin. Grenoucerie rassemble une espèce native, un élevage en cycle fermé et une traçabilité de lot — ce que les cartes professionnelles attendent de la grenouille, sans en faire un produit industriel."
              : "Séverin Selection. Grenoucerie brings together a native species, closed-cycle farming and lot traceability — what professional kitchens expect of frog, without turning it into an industrial product."}
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
        <LeadForm lang={lang} product={fr ? "Grenouille — Grenoucerie" : "Frog — Grenoucerie"} />
      </section>

      <section className="source-note">
        <p>
          {fr
            ? "Maquette de travail. Photographies issues du site officiel de Grenoucerie (grenoucerie.com), utilisées provisoirement pour construire la page. Une autorisation d’utilisation sera demandée avant publication définitive."
            : "Working mock-up. Photographs from Grenoucerie’s official website (grenoucerie.com), used provisionally to build the page. Usage rights will be requested before final publication."}
        </p>
      </section>
    </main>
  );
}
