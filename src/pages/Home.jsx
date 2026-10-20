import { useContext } from "react";
import { LangContext } from "../i18n/context";
import { universes } from "../data/universes";
import UniverseCard from "../components/UniverseCard";
import LeadForm from "../components/LeadForm";

export default function Home() {
  const { lang } = useContext(LangContext);
  const fr = lang === "fr";

  return (
    <main>
      <section className="hero">
        <div className="hero-media">
          <picture>
            <source srcSet="/images/hero-crabe-royal.avif?v=2" type="image/avif" />
            <source srcSet="/images/hero-crabe-royal.webp?v=2" type="image/webp" />
            <img
              src="/images/hero-crabe-royal.jpg?v=2"
              alt={fr ? "Crabe royal de Norvège" : "Norwegian king crab"}
            />
          </picture>
        </div>
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">{fr ? "SÉLECTION PERSONNELLE · EUROPE" : "PERSONAL SELECTION · EUROPE"}</p>
          <h1>
            {fr ? <>Des produits<br />remarquables.</> : <>Remarkable<br />products.</>}
            <br />
            <em>{fr ? <>Des producteurs<br />sélectionnés sur le terrain.</> : <>Producers selected<br />at source.</>}</em>
          </h1>
          <p className="hero-intro">
            {fr
              ? "Je ne sélectionne pas des catalogues. Je sélectionne des producteurs."
              : "I don't select catalogues. I select producers."}
          </p>
          <a className="primary-button" href="#selection">
            {fr ? "DÉCOUVRIR LA SÉLECTION" : "DISCOVER THE SELECTION"}
          </a>
        </div>
      </section>

      <section className="section selection-univers" id="selection">
        <div className="section-heading">
          <p className="eyebrow">{fr ? "UNE SÉLECTION, PAS UN CATALOGUE" : "A SELECTION, NOT A CATALOGUE"}</p>
          <h2>{fr ? "La Sélection" : "The Selection"}</h2>
          <p>
            {fr
              ? "Des origines, des gestes, des territoires."
              : "Origins, gestures, territories."}
          </p>
        </div>
        <div className="universe-mosaic">
          {universes.map(item => (
            <UniverseCard key={item.slug} universe={item} lang={lang} />
          ))}
        </div>
      </section>

      <section className="dark-section" id="producers">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LES PRODUCTEURS" : "THE PRODUCERS"}</p>
            <h2>{fr ? "Derrière chaque produit de la mer, des femmes, des hommes et un lieu." : "Behind every seafood product, people and a place."}</h2>
          </div>
          <p>
            {fr
              ? "Séverin Select met en avant les producteurs de la mer, leur origine et leur savoir-faire. Aucun produit n'est présenté comme une simple ligne de catalogue."
              : "Séverin Select highlights seafood producers, their origin and their craft. No product is presented as just another catalogue line."}
          </p>
        </div>
      </section>

      <section className="section" id="approach">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "MA DÉMARCHE" : "OUR APPROACH"}</p>
            <h2>{fr ? "Connaître avant de recommander." : "Know before recommending."}</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "L'ambition de Séverin Select est simple : aller au-delà des fiches techniques. Comprendre une origine, rencontrer un producteur, observer son savoir-faire, goûter et replacer le produit de la mer dans son territoire."
                : "Séverin Select aims to go beyond specifications: understand an origin, meet a producer, observe their craft, taste, and place the seafood back in its territory."}
            </p>
            <p className="note">
              {fr
                ? "Le badge « sélectionné sur place » n'est utilisé qu'après visite effective du site de production."
                : "The “selected at source” badge is only used after an actual visit to the production site."}
            </p>
          </div>
        </div>
      </section>

      <section className="portrait-section" id="severin">
        <div className="portrait-band">
          <img
            src="/images/severin-chez-un-producteur.jpg"
            alt={fr ? "Séverin chez un producteur" : "Séverin at a producer"}
          />
          <div className="portrait-on">
            <p className="eyebrow">SÉVERIN</p>
            <h2>{fr ? "Une sélection de la mer, construite sur le terrain." : "A seafood selection built in the field."}</h2>
          </div>
        </div>
        <p className="portrait-under">
          {fr
            ? "Séverin Select est une signature personnelle : une expertise des produits de la mer, construite au fil des rencontres avec des producteurs européens."
            : "Séverin Select is a personal signature: seafood expertise, built through encounters with European producers."}
        </p>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">{fr ? "POUR LES PROFESSIONNELS" : "FOR PROFESSIONALS"}</p>
          <h2>{fr ? "Vous souhaitez travailler l’un de ces produits de la mer ?" : "Would you like to work with one of these seafood products?"}</h2>
          <p>
            {fr
              ? "Indiquez votre établissement et votre localisation. Séverin Select vous aidera à trouver la solution d’approvisionnement adaptée."
              : "Tell us about your business and location. Séverin Select will help you find the right supply solution."}
          </p>
        </div>
        <LeadForm lang={lang} />
      </section>
    </main>
  );
}
