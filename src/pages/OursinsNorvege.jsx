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

export default function OursinsNorvege() {
  const { lang } = useContext(LangContext);
  const fr = lang === "fr";
  const img = "/images/oursins-ecofang";

  return (
    <main className="jadran-page">
      <section className="jadran-hero">
        <div className="jadran-hero-media oursins-hero">
          <img
            src={`${img}/hero.jpg`}
            alt={fr
              ? "Oursin sauvage de Norvège ouvert, corail orange et uni"
              : "Opened wild Norwegian sea urchin, orange coral and uni"}
          />
        </div>
        <div className="jadran-hero-overlay" />
        <div className="jadran-hero-copy">
          <p className="eyebrow">ECOFANG · NORWAY</p>
          <h1>{fr ? "Oursins sauvages de Norvège" : "Wild Norwegian Sea Urchins"}</h1>
          <p>Tromsø</p>
          <span className="selection-chip">{fr ? "SÉLECTION SÉVERIN" : "SÉVERIN SELECTION"}</span>
        </div>
      </section>

      <section className="jadran-chapter">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LE PRODUIT" : "THE PRODUCT"}</p>
            <h2>
              {fr
                ? "Un corail délicat, recherché par les chefs."
                : "A delicate coral, sought by chefs."}
            </h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Les oursins sauvages de Norvège abritent un corail, aussi appelé uni, recherché pour son caractère marin et sa singularité."
                : "Wild Norwegian sea urchins harbour a coral, also called uni, sought for its marine character and singularity."}
            </p>
            <p>
              {fr
                ? "Une matière première rare, née des eaux froides du nord de la Norvège, destinée aux professionnels de la gastronomie."
                : "A rare raw material, born of the cold waters of northern Norway, intended for gastronomy professionals."}
            </p>
          </div>
        </div>
      </section>

      <Photo
        className="jadran-wide oursins-coral"
        src={`${img}/01-open.jpg?v=2`}
        alt={fr
          ? "Gros plan d’un oursin ouvert, corail gastronomique orange"
          : "Close-up of an opened sea urchin, orange gastronomic coral"}
        caption={fr ? "Le corail" : "The coral"}
      />

      <section className="dark-section">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "L’ORIGINE" : "THE ORIGIN"}</p>
            <h2>Tromsø</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "À Tromsø, dans le nord de la Norvège, les oursins sont récoltés dans leur environnement naturel, au-delà du cercle polaire."
                : "In Tromsø, in northern Norway, the urchins are harvested in their natural environment, beyond the Arctic Circle."}
            </p>
            <p>
              {fr
                ? "Les eaux froides des fjords du Grand Nord forment le cadre de cette ressource marine locale."
                : "The cold waters of the High North fjords are the setting for this local marine resource."}
            </p>
            <div className="fact-grid">
              <div><strong>Tromsø</strong><span>{fr ? "Origine" : "Origin"}</span></div>
              <div><strong>{fr ? "Sauvage" : "Wild"}</strong><span>{fr ? "Récolte" : "Harvest"}</span></div>
              <div><strong>Ecofang</strong><span>{fr ? "Producteur" : "Producer"}</span></div>
              <div><strong>{fr ? "Norvège" : "Norway"}</strong><span>{fr ? "Pays" : "Country"}</span></div>
            </div>
          </div>
        </div>
      </section>

      <Photo
        className="jadran-wide"
        src={`${img}/07-whole.jpg?v=2`}
        alt={fr
          ? "Oursins sauvages entiers, récoltés en Norvège"
          : "Whole wild sea urchins, harvested in Norway"}
        caption={fr ? "Oursins entiers" : "Whole sea urchins"}
      />

      <section className="jadran-chapter">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LE PRODUCTEUR" : "THE PRODUCER"}</p>
            <h2>Ecofang</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Ecofang développe à Tromsø une approche de la récolte des oursins sauvages. L’entreprise valorise une ressource marine locale tout en s’inscrivant dans une démarche de meilleure gestion des écosystèmes côtiers."
                : "In Tromsø, Ecofang is developing an approach to harvesting wild sea urchins. The company values a local marine resource while taking part in a more careful management of coastal ecosystems."}
            </p>
            <p>
              {fr
                ? "Dans certaines zones du littoral norvégien, la prolifération des oursins exerce une forte pression sur les forêts sous-marines de laminaires, habitats essentiels pour de nombreuses espèces. En développant la récolte et la valorisation de ces oursins, Ecofang participe à une démarche visant à réduire cette pression."
                : "In some areas of the Norwegian coast, the proliferation of sea urchins puts strong pressure on underwater kelp forests, essential habitats for many species. By developing the harvest and use of these urchins, Ecofang takes part in an approach aimed at reducing that pressure."}
            </p>
          </div>
        </div>
      </section>

      <section className="jadran-chapter jadran-chapter--tight">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LA RÉCOLTE" : "THE HARVEST"}</p>
            <h2>
              {fr
                ? "Récoltés dans leur environnement naturel."
                : "Harvested in their natural environment."}
            </h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Récoltés dans leur environnement naturel et soigneusement sélectionnés, les oursins norvégiens offrent aux professionnels un produit singulier, identifié par son origine et par le producteur qui le travaille."
                : "Harvested in their natural environment and carefully selected, Norwegian sea urchins offer professionals a singular product, identified by its origin and by the producer who works it."}
            </p>
          </div>
        </div>
      </section>

      <div className="jadran-pair">
        <Photo
          src={`${img}/06-whole.jpg?v=2`}
          alt={fr
            ? "Oursins sauvages entiers, piquants visibles"
            : "Whole wild sea urchins, spines visible"}
          caption={fr ? "Oursins entiers" : "Whole sea urchins"}
        />
        <Photo
          className="oursins-snow"
          src={`${img}/04-whole.jpg`}
          alt={fr
            ? "Oursin sauvage entier, piquants dorés"
            : "Whole wild sea urchin, golden spines"}
          caption={fr ? "Oursin entier" : "Whole sea urchin"}
        />
      </div>

      <section className="section accent-panel">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "EN CUISINE" : "IN THE KITCHEN"}</p>
            <h2>
              {fr
                ? "Uni, une matière première de cuisine."
                : "Uni, a kitchen raw material."}
            </h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Leur corail, également appelé uni, est une matière première appréciée dans les cuisines gastronomiques et japonaises."
                : "Their coral, also called uni, is a raw material valued in gastronomic and Japanese kitchens."}
            </p>
            <p>
              {fr
                ? "Séverin Select accompagne les chefs et les distributeurs français dans la découverte et l’approvisionnement de ces oursins."
                : "Séverin Select accompanies French chefs and distributors in discovering and sourcing these urchins."}
            </p>
          </div>
        </div>
      </section>

      <div className="jadran-cuts oursins-gallery">
        <Photo
          src={`${img}/03-open.jpg`}
          alt={fr
            ? "Oursin sauvage ouvert, corail orange visible"
            : "Opened wild sea urchin, orange coral visible"}
          caption={fr ? "Le geste" : "The gesture"}
        />
        <Photo
          src={`${img}/02-open.jpg`}
          alt={fr
            ? "Uni et oursin ouvert, préparation professionnelle"
            : "Uni and opened sea urchin, professional preparation"}
          caption="Uni"
        />
        <Photo
          src={`${img}/05-whole.jpg?v=2`}
          alt={fr
            ? "Oursin sauvage entier tenu dans la main"
            : "Whole wild sea urchin held in the hand"}
          caption={fr ? "Oursin entier" : "Whole sea urchin"}
        />
      </div>

      <section className="jadran-chapter">
        <div className="section-heading left">
          <p className="eyebrow">{fr ? "POURQUOI SÉVERIN SELECT ?" : "WHY SÉVERIN SELECT?"}</p>
          <h2>
            {fr
              ? "Sélectionné avec Ecofang, pour son origine et son identité."
              : "Selected with Ecofang, for origin and identity."}
          </h2>
          <p>
            {fr
              ? "Sélection Séverin. Les oursins sauvages sont récoltés à Tromsø, en Norvège, puis présentés aux professionnels français en partenariat avec Ecofang."
              : "Séverin Selection. Wild sea urchins are harvested in Tromsø, Norway, then presented to French professionals in partnership with Ecofang."}
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
          product={fr ? "Oursins sauvages de Norvège — Ecofang" : "Wild Norwegian sea urchins — Ecofang"}
        />
      </section>

      <section className="source-note">
        <p>
          {fr
            ? "Photographies transmises par Ecofang, Tromsø. Séverin Select — oursins sauvages de Norvège, pour les professionnels de la gastronomie."
            : "Photographs provided by Ecofang, Tromsø. Séverin Select — wild Norwegian sea urchins, for gastronomy professionals."}
        </p>
      </section>
    </main>
  );
}
