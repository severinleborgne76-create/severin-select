import { useContext, useEffect } from "react";
import { LangContext } from "../i18n/context";
import LeadForm from "../components/LeadForm";

const IMG = "/images/baku-caviar";
const FORMATS = ["30 g", "50 g", "100 g", "125 g", "250 g", "500 g"];

function Photo({ src, alt, caption, className = "" }) {
  const webp = src.replace(/\.(jpe?g|png)$/i, ".webp");
  return (
    <figure className={`jadran-photo ${className}`.trim()}>
      <picture>
        <source srcSet={webp} type="image/webp" />
        <img src={src} alt={alt} />
      </picture>
      {caption ? <figcaption className="jadran-caption">{caption}</figcaption> : null}
    </figure>
  );
}

const EXTRA_FIELDS = [
  {
    name: "activity",
    labelFr: "Activité",
    labelEn: "Activity",
    type: "select",
    required: true,
    options: [
      { value: "", labelFr: "À préciser", labelEn: "To specify" },
      { value: "Poissonnerie", labelFr: "Poissonnerie", labelEn: "Fishmonger" },
      { value: "Épicerie fine", labelFr: "Épicerie fine", labelEn: "Fine grocery" },
      { value: "Restauration", labelFr: "Restauration", labelEn: "Restaurant" },
      { value: "Distributeur", labelFr: "Distributeur", labelEn: "Distributor" },
      { value: "Autre", labelFr: "Autre", labelEn: "Other" }
    ]
  },
  {
    name: "species",
    labelFr: "Espèces recherchées",
    labelEn: "Species sought",
    type: "text"
  },
  {
    name: "formats",
    labelFr: "Formats",
    labelEn: "Formats",
    type: "text"
  },
  {
    name: "quantities",
    labelFr: "Quantités indicatives",
    labelEn: "Indicative quantities",
    type: "text"
  },
  {
    name: "period",
    labelFr: "Période souhaitée",
    labelEn: "Desired period",
    type: "text"
  }
];

const SPECIES = [
  {
    id: "beluga",
    lid: "lid-beluga.jpg",
    latin: "Huso huso",
    titleFr: "Béluga",
    titleEn: "Beluga",
    textFr: "Esturgeon béluga.",
    textEn: "Beluga sturgeon.",
    altFr: "Couvercle officiel Baku Caviar, béluga Huso huso",
    altEn: "Official Baku Caviar lid, beluga Huso huso"
  },
  {
    id: "osetra",
    lid: "lid-osetra.jpg",
    latin: "Acipenser gueldenstaedtii",
    titleFr: "Osciètre",
    titleEn: "Osetra",
    textFr: "Esturgeon russe, présenté par Baku Caviar sous le nom Osetra.",
    textEn: "Russian sturgeon, presented by Baku Caviar as Osetra.",
    altFr: "Couvercle officiel Baku Caviar, osciètre Acipenser gueldenstaedtii",
    altEn: "Official Baku Caviar lid, osetra Acipenser gueldenstaedtii"
  },
  {
    id: "sterlet",
    lid: null,
    latin: "Acipenser ruthenus",
    titleFr: "Sterlet",
    titleEn: "Sterlet",
    textFr: "Esturgeon sterlet.",
    textEn: "Sterlet sturgeon."
  }
];

export default function BakuCaviar() {
  const { lang } = useContext(LangContext);
  const fr = lang === "fr";

  useEffect(() => {
    const prevTitle = document.title;
    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content") || "";

    document.title = fr
      ? "Baku Caviar — Le caviar d’Azerbaïdjan | Séverin Select"
      : "Baku Caviar — Caviar from Azerbaijan | Séverin Select";
    desc?.setAttribute(
      "content",
      fr
        ? "Baku Caviar, caviar d’élevage d’Azerbaïdjan. Béluga, osciètre et sterlet. Azerbaijan Fish Farm, mer Caspienne. Séverin Select, pour les professionnels."
        : "Baku Caviar, farmed caviar from Azerbaijan. Beluga, osetra and sterlet. Azerbaijan Fish Farm, Caspian Sea. Séverin Select, for professionals."
    );

    return () => {
      document.title = prevTitle;
      desc?.setAttribute("content", prevDesc);
    };
  }, [fr]);

  return (
    <main className="jadran-page">
      <section className="jadran-hero">
        <div className="jadran-hero-media baku-hero">
          <picture>
            <source srcSet={`${IMG}/osetra-open.webp`} type="image/webp" />
            <img
              src={`${IMG}/osetra-open.jpg`}
              alt={fr
                ? "Boîte de caviar Baku Caviar ouverte, grains d’osciètre"
                : "Opened Baku Caviar tin, osetra eggs"}
            />
          </picture>
        </div>
        <div className="jadran-hero-overlay" />
        <div className="jadran-hero-copy">
          <p className="eyebrow">BAKU CAVIAR · AZERBAIJAN</p>
          <h1>{fr ? "Le caviar d’Azerbaïdjan" : "Caviar from Azerbaijan"}</h1>
          <p>{fr ? "Azerbaijan Fish Farm · mer Caspienne" : "Azerbaijan Fish Farm · Caspian Sea"}</p>
          <span className="selection-chip">{fr ? "SÉLECTION SÉVERIN" : "SÉVERIN SELECTION"}</span>
          <a className="primary-button baku-hero-cta" href="#caviars">
            {fr ? "DÉCOUVRIR LES CAVIARS" : "DISCOVER THE CAVIARS"}
          </a>
        </div>
      </section>

      <section className="jadran-chapter jadran-chapter--tight">
        <div className="split">
          <div>
            <img
              className="baku-logo"
              src={`${IMG}/logo.svg`}
              alt="Baku Caviar"
              width="96"
              height="96"
            />
            <p className="eyebrow">BAKU CAVIAR</p>
            <h2>{fr ? "Le caviar d’Azerbaïdjan." : "Caviar from Azerbaijan."}</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Baku Caviar est la marque de caviar d’élevage d’Azerbaijan Fish Farm LLC, en Azerbaïdjan, sur la côte ouest de la mer Caspienne. Trois références : béluga, osciètre et sterlet."
                : "Baku Caviar is the farmed-caviar brand of Azerbaijan Fish Farm LLC, in Azerbaijan, on the west coast of the Caspian Sea. Three references: beluga, osetra and sterlet."}
            </p>
          </div>
        </div>
      </section>

      <section className="jadran-chapter jadran-chapter--tight" id="caviars">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LES PRODUITS" : "THE PRODUCTS"}</p>
            <h2>{fr ? "Trois références." : "Three references."}</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Béluga (Huso huso), osciètre (Acipenser gueldenstaedtii) et sterlet (Acipenser ruthenus). Aucune note de dégustation n’est reprise ici."
                : "Beluga (Huso huso), osetra (Acipenser gueldenstaedtii) and sterlet (Acipenser ruthenus). No tasting notes are repeated here."}
            </p>
          </div>
        </div>
        <div className="baku-species baku-species--three">
          {SPECIES.map(item => (
            <article key={item.id}>
              {item.lid ? (
                <div className="baku-lid">
                  <picture>
                    <source srcSet={`${IMG}/${item.lid.replace(".jpg", ".webp")}`} type="image/webp" />
                    <img src={`${IMG}/${item.lid}`} alt={fr ? item.altFr : item.altEn} />
                  </picture>
                </div>
              ) : (
                <div className="baku-lid baku-lid--empty" aria-hidden="true">
                  <span>{item.latin}</span>
                </div>
              )}
              <div className="baku-species-copy">
                <p className="eyebrow">{item.latin}</p>
                <h3>{fr ? item.titleFr : item.titleEn}</h3>
                <p>{fr ? item.textFr : item.textEn}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="baku-formats">
          <p className="eyebrow">{fr ? "FORMATS" : "FORMATS"}</p>
          <p>
            {fr
              ? "Boîtes métalliques : 30, 50, 100, 125, 250 et 500 g. Les disponibilités sont à confirmer."
              : "Metal tins: 30, 50, 100, 125, 250 and 500 g. Availability is to be confirmed."}
          </p>
          <div className="fact-grid">
            {FORMATS.map(weight => (
              <div key={weight}><strong>{weight}</strong><span>{fr ? "Métal" : "Metal"}</span></div>
            ))}
          </div>
        </div>

        <p className="baku-actions">
          <a className="primary-button" href="#contact">
            {fr ? "DEMANDER UNE OFFRE" : "REQUEST A QUOTE"}
          </a>
        </p>
      </section>

      <Photo
        className="baku-packing"
        src={`${IMG}/packing.jpg`}
        alt={fr
          ? "Boîtes de caviar Baku Caviar, béluga et osciètre"
          : "Baku Caviar tins, beluga and osetra"}
        caption={fr ? "Présentation du producteur" : "As presented by the producer"}
      />

      <section className="dark-section">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LE PRODUCTEUR" : "THE PRODUCER"}</p>
            <h2>Azerbaijan Fish Farm</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Azerbaijan Fish Farm LLC (AFF) élève des esturgeons à Neftchala, à l’estuaire de la Koura, sur la côte ouest de la mer Caspienne. bakucaviar.az situe l’installation à 1954 ; elle a été privatisée par AFF en 2017."
                : "Azerbaijan Fish Farm LLC (AFF) raises sturgeon in Neftchala, at the Kura River estuary, on the west coast of the Caspian Sea. bakucaviar.az dates the site to 1954; it was privatised by AFF in 2017."}
            </p>
            <p>
              {fr
                ? "L’élevage combine un circuit recirculé (RAS), des cages et des bassins côtiers, avec de l’eau douce de la Koura et de l’eau salée de la Caspienne. Le caviar présenté ici est issu d’élevage, non d’une pêche d’esturgeons sauvages."
                : "Farming combines a recirculating system (RAS), cages and coastal tanks, using freshwater from the Kura and salt water from the Caspian. The caviar presented here is farmed, not from wild sturgeon fishing."}
            </p>
            <p>
              {fr
                ? "Chaque pot est authentifié par deux codes liés, à usage unique."
                : "Each tin is authenticated by two linked, one-time codes."}
            </p>
            <div className="fact-grid">
              <div><strong>{fr ? "Azerbaïdjan" : "Azerbaijan"}</strong><span>{fr ? "Origine" : "Origin"}</span></div>
              <div><strong>{fr ? "Élevage" : "Farmed"}</strong><span>{fr ? "Production" : "Production"}</span></div>
              <div><strong>Neftchala</strong><span>{fr ? "District" : "District"}</span></div>
              <div><strong>2017</strong><span>{fr ? "Privatisation AFF" : "AFF privatisation"}</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="jadran-pair">
        <Photo
          src={`${IMG}/farm-tanks.jpg`}
          alt={fr
            ? "Bassins d’élevage d’esturgeons, Azerbaijan Fish Farm"
            : "Sturgeon rearing tanks, Azerbaijan Fish Farm"}
          caption={fr ? "Bassins d’élevage" : "Rearing tanks"}
        />
        <Photo
          src={`${IMG}/farm-cages.jpg`}
          alt={fr
            ? "Cages d’élevage en mer, nourrissage des esturgeons"
            : "Sea cages, feeding sturgeon"}
          caption={fr ? "Élevage en cages" : "Cage farming"}
        />
      </div>

      <section className="section accent-panel">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "L’OFFRE PROFESSIONNELLE" : "THE PROFESSIONAL OFFER"}</p>
            <h2>
              {fr
                ? "Des commandes regroupées, sur réservation."
                : "Grouped orders, by reservation."}
            </h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Séverin Select reçoit les demandes des professionnels — poissonneries, épiceries fines, restauration et distributeurs — et organise des commandes regroupées sur réservation. Cette page n’enregistre aucune commande ferme, ni aucun paiement."
                : "Séverin Select receives professional enquiries — fishmongers, fine grocers, restaurants and distributors — and organises grouped orders by reservation. This page does not take firm orders or payments."}
            </p>
            <a className="primary-button baku-cta" href="#contact">
              {fr ? "DEMANDER UNE OFFRE" : "REQUEST A QUOTE"}
            </a>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">{fr ? "POUR LES PROFESSIONNELS" : "FOR PROFESSIONALS"}</p>
          <h2>{fr ? "Demander une offre" : "Request a quote"}</h2>
          <p>
            {fr
              ? "Nom, e-mail et activité sont demandés. Les besoins détaillés restent facultatifs. Aucun distributeur n’est affiché publiquement. Aucune commande n’est enregistrée depuis cette page."
              : "Name, email and activity are required. Detailed needs remain optional. No distributor is publicly listed. No order is placed from this page."}
          </p>
        </div>
        <LeadForm
          lang={lang}
          product="Baku Caviar"
          submitLabel={fr ? "DEMANDER UNE OFFRE" : "REQUEST A QUOTE"}
          extraFields={EXTRA_FIELDS}
          requiredFields={["name", "email", "activity"]}
        />
      </section>

      <section className="source-note">
        <p>
          {fr
            ? "Photographies et logo issus de bakucaviar.az, copiés localement. Références béluga, osciètre et sterlet confirmées pour cette sélection. Aucun visuel sterlet spécifique n’est présenté. Formats métalliques indiqués ; disponibilités, tarifs, stocks, délais, températures et DLC non publiés."
            : "Photographs and logo from bakucaviar.az, stored locally. Beluga, osetra and sterlet are the confirmed references for this selection. No specific sterlet visual is shown. Metal formats are listed; availability, prices, stock, lead times, temperatures and shelf life are not published."}
        </p>
      </section>
    </main>
  );
}
