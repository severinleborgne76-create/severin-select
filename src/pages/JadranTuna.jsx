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

export default function JadranTuna() {
  const { lang } = useContext(LangContext);
  const fr = lang === "fr";
  const img = "/images/jadran";

  return (
    <main className="jadran-page">
      <section className="jadran-hero">
        <div className="jadran-hero-media">
          <img
            src={`${img}/svjeze-tune-1.jpg`}
            alt={fr ? "Thons rouges vivants dans l’Adriatique" : "Live bluefin tuna in the Adriatic"}
          />
        </div>
        <div className="jadran-hero-overlay" />
        <div className="jadran-hero-copy">
          <p className="eyebrow">JADRAN TUNA · CROATIA</p>
          <h1>{fr ? "Thon rouge de l’Adriatique" : "Adriatic Bluefin Tuna"}</h1>
          <p>{fr ? "Biograd na Moru · Adriatique centrale" : "Biograd na Moru · Central Adriatic"}</p>
          <span className="selection-chip">{fr ? "SÉLECTION SÉVERIN" : "SÉVERIN SELECTION"}</span>
        </div>
      </section>

      <section className="jadran-chapter">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "L’ADRIATIQUE" : "THE ADRIATIC"}</p>
            <h2>Jabuka</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Jadran Tuna décrit la zone de Jabuka, en Adriatique centrale, comme un environnement d’eaux particulièrement claires, de forts courants et de salinité élevée. Les thons capturés sont ensuite transférés vivants vers la ferme de Gira."
                : "Jadran Tuna describes the Jabuka area in the Central Adriatic as an environment of exceptionally clear water, strong currents and high salinity. Captured tuna are then transferred alive to the Gira farm."}
            </p>
          </div>
        </div>
      </section>

      <Photo
        className="jadran-full"
        src={`${img}/jabuka.jpg`}
        alt={fr ? "L’îlot de Jabuka, Adriatique centrale" : "Jabuka islet, Central Adriatic"}
        caption={fr ? "Jabuka · Adriatique centrale" : "Jabuka · Central Adriatic"}
      />

      <section className="jadran-chapter jadran-chapter--tight">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "FERME EN MER" : "SEA FARM"}</p>
            <h2>Gira</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "La ferme se trouve à 7 milles nautiques du centre logistique. Jadran Tuna indique une capacité d’élevage de 1 760 tonnes, et un enregistrement ICCAT sous le numéro ATEU1HRV00008."
                : "The farm lies 7 nautical miles from the logistics centre. Jadran Tuna states a farming capacity of 1,760 tonnes, registered with ICCAT under No. ATEU1HRV00008."}
            </p>
          </div>
        </div>
      </section>

      <div className="jadran-pair">
        <Photo
          src={`${img}/uzgajaliste-gira.jpg`}
          alt={fr ? "Cages de la ferme aquacole de Gira" : "Cages at the Gira tuna farm"}
          caption={fr ? "Ferme de Gira" : "Gira farm"}
        />
        <Photo
          src={`${img}/slider-dji_0010.jpg`}
          alt={fr ? "Cages en mer et bateaux sur la ferme" : "Sea cages and boats at the farm"}
          caption={fr ? "Cages en mer" : "Sea cages"}
        />
      </div>

      <section className="jadran-chapter">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LE PRODUCTEUR" : "THE PRODUCER"}</p>
            <h2>Jadran Tuna</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Fondée en 1997 et basée à Biograd na Moru, Jadran Tuna appartient à des familles de pêcheurs liées à l’histoire de la pêche croate. L’entreprise maîtrise la pêche, les opérations maritimes, l’élevage et la logistique du thon rouge."
                : "Founded in 1997 and based in Biograd na Moru, Jadran Tuna is owned by fishing families rooted in Croatian fishing history. The company manages fishing, marine operations, farming and bluefin tuna logistics."}
            </p>
            <div className="fact-grid">
              <div><strong>1997</strong><span>{fr ? "Création" : "Founded"}</span></div>
              <div><strong>1 760 t</strong><span>{fr ? "Capacité d’élevage" : "Farming capacity"}</span></div>
              <div><strong>7 NM</strong><span>{fr ? "Ferme depuis le centre logistique" : "Farm from logistics centre"}</span></div>
              <div><strong>−60 °C</strong><span>Super-frozen</span></div>
            </div>
          </div>
        </div>
      </section>

      <Photo
        className="jadran-wide"
        src={`${img}/sjediste.jpg`}
        alt={fr ? "Centre logistique de Jadran Tuna à Biograd na Moru" : "Jadran Tuna logistics centre in Biograd na Moru"}
        caption={fr ? "Centre logistique · Biograd na Moru" : "Logistics centre · Biograd na Moru"}
      />

      <div className="jadran-pair">
        <Photo
          src={`${img}/flota-kornat-carica.jpg`}
          alt={fr ? "Navires Kornat et Carica de la flotte Jadran Tuna" : "Kornat and Carica vessels of the Jadran Tuna fleet"}
          caption={fr ? "Kornat · Carica" : "Kornat · Carica"}
        />
        <Photo
          src={`${img}/slider-slide_1.jpg`}
          alt={fr ? "Navire de pêche en opération en Adriatique" : "Fishing vessel operating in the Adriatic"}
          caption={fr ? "Opérations en mer" : "At sea"}
        />
      </div>

      <section className="dark-section">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LE SAVOIR-FAIRE" : "THE CRAFT"}</p>
            <h2>{fr ? "Pêche, transfert, préparation." : "Fishing, transfer, preparation."}</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Jadran Tuna décrit une chaîne maîtrisée : pêche dans la zone de Jabuka, transfert des thons vivants par remorqueurs dans des cages jusqu’à la ferme de Gira — à environ 80 milles nautiques — puis préparation au centre logistique de Biograd na Moru. Les poissons capturés pèsent généralement entre 8 et 20 kg."
                : "Jadran Tuna describes a controlled chain: fishing in the Jabuka area, live transfer by tug boats in towing cages to the Gira farm — some 80 nautical miles away — then preparation at the Biograd na Moru logistics centre. Caught fish generally weigh between 8 and 20 kg."}
            </p>
          </div>
        </div>
      </section>

      <div className="jadran-essay">
        <Photo
          className="jadran-essay-lead"
          src={`${img}/slider-12--autor-jaakov-dindic.jpg`}
          alt={fr ? "Alimentation des cages en mer" : "Feeding the sea cages"}
          caption={fr ? "Alimentation des cages" : "Cage feeding"}
        />
        <Photo
          src={`${img}/slider-img_8756.jpg`}
          alt={fr ? "Réparation d’un filet" : "Mending a fishing net"}
          caption={fr ? "Le geste" : "The gesture"}
        />
        <Photo
          src={`${img}/flota-flota-tacoma.jpg`}
          alt={fr ? "Le navire Tacoma de la flotte Jadran Tuna" : "The Tacoma vessel of the Jadran Tuna fleet"}
          caption="Tacoma"
        />
      </div>

      <div className="jadran-pair">
        <Photo
          src={`${img}/svjeze-ribarenje-4.jpg`}
          alt={fr ? "Thons rouges à bord, après capture" : "Bluefin tuna on deck after harvest"}
          caption={fr ? "À bord" : "On deck"}
        />
        <Photo
          src={`${img}/svjeze-prerada-1.jpg`}
          alt={fr ? "Préparation du thon rouge au centre logistique" : "Bluefin tuna preparation at the logistics centre"}
          caption={fr ? "Préparation" : "Preparation"}
        />
      </div>

      <section className="jadran-chapter">
        <div className="split">
          <div>
            <p className="eyebrow">{fr ? "LE PRODUIT" : "THE PRODUCT"}</p>
            <h2>Akami · Chutoro · Otoro</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "La gamme met en valeur les différentes parties du thon rouge, de l’Akami plus maigre et intensément rouge au Chutoro intermédiaire et à l’Otoro, plus riche et persillé."
                : "The range highlights different bluefin cuts, from leaner deep-red Akami to intermediate Chutoro and richer, marbled Otoro."}
            </p>
            <p>
              {fr
                ? "Jadran Tuna indique une alimentation contrôlée à base de petits poissons pélagiques locaux pendant 18 à 30 mois, ainsi qu’un suivi du milieu marin."
                : "Jadran Tuna states that its tuna receive controlled feeding with local small pelagic fish for 18 to 30 months, together with monitoring of the marine environment."}
            </p>
          </div>
        </div>
      </section>

      <Photo
        className="jadran-wide"
        src={`${img}/svjeze-tunjevina-3.jpg`}
        alt={fr ? "Longe de thon rouge : Akami, Chutoro et Otoro" : "Bluefin loin showing Akami, Chutoro and Otoro"}
        caption={fr ? "Une même longe, trois textures" : "One loin, three textures"}
      />

      <div className="jadran-cuts">
        <Photo
          src={`${img}/svjeze-novo-1--akami.jpg`}
          alt="Akami"
          caption="Akami"
        />
        <Photo
          src={`${img}/svjeze-novo-2--chu-toro.jpg`}
          alt="Chutoro"
          caption="Chutoro"
        />
        <Photo
          src={`${img}/svjeze-novo-3--o-toro.jpg`}
          alt="Otoro"
          caption="Otoro"
        />
      </div>

      <Photo
        className="jadran-wide jadran-wide--dark"
        src={`${img}/svjeze-novo-6--nigiri.jpg`}
        alt={fr ? "Nigiri d’Akami, Chutoro et Otoro" : "Akami, Chutoro and Otoro nigiri"}
        caption={fr ? "Akami · Chutoro · Otoro" : "Akami · Chutoro · Otoro"}
      />

      <section className="section accent-panel">
        <div className="split">
          <div>
            <p className="eyebrow">SUPER-FROZEN</p>
            <h2>−60 °C</h2>
          </div>
          <div className="prose">
            <p>
              {fr
                ? "Pour ses références super-frozen, Jadran Tuna utilise une surgélation à −60 °C. L’objectif est de limiter l’évolution du produit et de préserver au mieux sa texture, sa couleur et ses qualités sensorielles jusqu’à la décongélation."
                : "For its super-frozen range, Jadran Tuna uses −60 °C freezing technology, designed to limit product ageing and preserve texture, colour and sensory quality through to defrosting."}
            </p>
          </div>
        </div>
      </section>

      <div className="jadran-pair">
        <Photo
          src={`${img}/smrznuto-3.jpg`}
          alt={fr ? "Longes de thon rouge super-frozen à −60 °C" : "Super-frozen bluefin loins at −60 °C"}
          caption={fr ? "Longes super-frozen" : "Super-frozen loins"}
        />
        <Photo
          src={`${img}/smrznuto-1.jpg`}
          alt={fr ? "Blocs de thon rouge super-frozen à −60 °C" : "Super-frozen bluefin blocks at −60 °C"}
          caption={fr ? "Blocs super-frozen · −60 °C" : "Super-frozen blocks · −60 °C"}
        />
      </div>

      <section className="jadran-chapter">
        <div className="section-heading left">
          <p className="eyebrow">{fr ? "POURQUOI SÉVERIN SELECT ?" : "WHY SÉVERIN SELECT?"}</p>
          <h2>{fr ? "Une identité maritime forte et une maîtrise complète du produit." : "A strong maritime identity and end-to-end product expertise."}</h2>
          <p>
            {fr
              ? "Sélection Séverin. Jadran Tuna rassemble une identité maritime — familles de pêcheurs, flotte, ferme en mer et logistique — et une maîtrise du thon rouge, de l’Adriatique jusqu’au super-frozen à −60 °C."
              : "Séverin Selection. Jadran Tuna brings together a maritime identity — fishing families, fleet, sea farm and logistics — and end-to-end command of bluefin tuna, from the Adriatic to super-frozen at −60 °C."}
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
        <LeadForm lang={lang} product={fr ? "Thon rouge de l’Adriatique — Jadran Tuna" : "Adriatic Bluefin Tuna — Jadran Tuna"} />
      </section>

      <section className="source-note">
        <p>
          {fr
            ? "Maquette de travail. Photographies issues du site officiel de Jadran Tuna (jadran-tuna.hr), utilisées provisoirement pour construire la page. Une autorisation d’utilisation sera demandée avant publication définitive."
            : "Working mock-up. Photographs from Jadran Tuna’s official website (jadran-tuna.hr), used provisionally to build the page. Usage rights will be requested before final publication."}
        </p>
      </section>
    </main>
  );
}
