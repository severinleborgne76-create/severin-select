import { useContext, useEffect, useRef, useState } from "react";
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

function Reveal({ children }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`oursins-reveal${on ? " is-on" : ""}`}>
      {children}
    </div>
  );
}

export default function OursinsNorvege() {
  const { lang } = useContext(LangContext);
  const fr = lang === "fr";
  const img = "/images/oursins-ecofang";

  useEffect(() => {
    const prevTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") || "";
    document.title = fr
      ? "Oursins sauvages de Norvège — Ecofang | Séverin Select"
      : "Wild Norwegian Sea Urchins — Ecofang | Séverin Select";
    meta?.setAttribute(
      "content",
      fr
        ? "Oursins sauvages norvégiens Ecofang, récoltés à Tromsø. Oursins gastronomiques pour chefs, importateurs et distributeurs. Séverin Select, sélection haut de gamme."
        : "Wild Norwegian sea urchins from Ecofang, harvested in Tromsø. Gastronomic urchins for chefs, importers and distributors. Séverin Select, a premium seafood selection."
    );
    return () => {
      document.title = prevTitle;
      meta?.setAttribute("content", prevDesc);
    };
  }, [fr]);

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
          <p className="eyebrow">ECOFANG · TROMSØ · NORWAY</p>
          <h1>{fr ? "L’or des fjords arctiques" : "The gold of the Arctic fjords"}</h1>
          <p>
            {fr
              ? "Oursins sauvages de Norvège — Quand la gastronomie rencontre la préservation de l’océan."
              : "Wild sea urchins from Norway — When gastronomy meets ocean stewardship."}
          </p>
          <span className="selection-chip">{fr ? "SÉLECTION SÉVERIN" : "SÉVERIN SELECTION"}</span>
        </div>
      </section>

      <Reveal>
        <section className="jadran-chapter">
          <div className="split">
            <div>
              <p className="eyebrow">{fr ? "L’OR DES FJORDS ARCTIQUES" : "THE GOLD OF THE ARCTIC FJORDS"}</p>
              <h2>
                {fr
                  ? "Un trésor gastronomique, au-delà du cercle polaire."
                  : "A gastronomic treasure, beyond the Arctic Circle."}
              </h2>
            </div>
            <div className="prose">
              <p>
                {fr
                  ? "Au-delà du cercle polaire, dans les eaux froides des fjords du nord de la Norvège, la mer recèle un trésor gastronomique encore méconnu."
                  : "Beyond the Arctic Circle, in the cold waters of Norway’s northern fjords, the sea holds a gastronomic treasure still little known."}
              </p>
              <p>
                {fr
                  ? "Les oursins sauvages abritent un corail délicat, recherché par les chefs pour son caractère marin et sa singularité."
                  : "Wild sea urchins harbour a delicate coral, sought by chefs for its marine character and singularity."}
              </p>
              <p>
                {fr
                  ? "Une matière première rare dans l’univers de la haute gastronomie, née d’un environnement naturel exceptionnel."
                  : "A rare raw material in haute gastronomy, born of an exceptional natural environment."}
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Photo
        className="jadran-wide oursins-coral"
        src={`${img}/01-open.jpg?v=2`}
        alt={fr
          ? "Gros plan d’un oursin ouvert, corail gastronomique orange"
          : "Close-up of an opened sea urchin, orange gastronomic coral"}
        caption={fr ? "Le corail" : "The coral"}
      />

      <Reveal>
        <section className="jadran-chapter">
          <div className="split">
            <div>
              <p className="eyebrow">{fr ? "UNE HISTOIRE SINGULIÈRE" : "A SINGULAR STORY"}</p>
              <h2>
                {fr
                  ? "À Tromsø, une récolte pensée autrement."
                  : "In Tromsø, a different way of harvesting."}
              </h2>
            </div>
            <div className="prose">
              <p>
                {fr
                  ? "À Tromsø, dans le nord de la Norvège, Ecofang développe une approche innovante de la récolte des oursins sauvages."
                  : "In Tromsø, in northern Norway, Ecofang is developing an innovative approach to harvesting wild sea urchins."}
              </p>
              <p>
                {fr
                  ? "L’entreprise valorise une ressource marine locale tout en s’inscrivant dans une démarche de meilleure gestion des écosystèmes côtiers."
                  : "The company values a local marine resource while taking part in a more careful management of coastal ecosystems."}
              </p>
              <p>
                {fr
                  ? "Son ambition : transformer un défi environnemental en opportunité gastronomique."
                  : "Its ambition: to turn an environmental challenge into a gastronomic opportunity."}
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Photo
        className="jadran-wide"
        src={`${img}/07-whole.jpg?v=2`}
        alt={fr
          ? "Oursins sauvages entiers, récoltés en Norvège"
          : "Whole wild sea urchins, harvested in Norway"}
        caption={fr ? "Oursins entiers" : "Whole sea urchins"}
      />

      <Reveal>
        <section className="dark-section">
          <div className="split">
            <div>
              <p className="eyebrow">{fr ? "GASTRONOMIE ET ÉCOLOGIE" : "GASTRONOMY AND ECOLOGY"}</p>
              <h2>
                {fr
                  ? "Quand la gastronomie rencontre l’écologie."
                  : "When gastronomy meets ecology."}
              </h2>
            </div>
            <div className="prose">
              <p>
                {fr
                  ? "Dans certaines zones du littoral norvégien, la prolifération des oursins exerce une forte pression sur les forêts sous-marines de laminaires."
                  : "In some areas of the Norwegian coast, the proliferation of sea urchins puts strong pressure on underwater kelp forests."}
              </p>
              <p>
                {fr
                  ? "Ces végétations marines constituent des habitats essentiels pour de nombreuses espèces."
                  : "These marine plants are essential habitats for many species."}
              </p>
              <p>
                {fr
                  ? "En développant la récolte et la valorisation de ces oursins, Ecofang participe à une démarche visant à réduire cette pression et à favoriser un meilleur équilibre des écosystèmes."
                  : "By developing the harvest and use of these urchins, Ecofang takes part in an approach aimed at reducing that pressure and favouring a better balance of ecosystems."}
              </p>
            </div>
          </div>
        </section>
      </Reveal>

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

      <Reveal>
        <section className="jadran-chapter">
          <div className="split">
            <div>
              <p className="eyebrow">{fr ? "DE LA MER À L’ASSIETTE" : "FROM SEA TO PLATE"}</p>
              <h2>
                {fr
                  ? "L’excellence de la mer à l’assiette."
                  : "The excellence of the sea, on the plate."}
              </h2>
            </div>
            <div className="prose">
              <p>
                {fr
                  ? "Récoltés dans leur environnement naturel et soigneusement sélectionnés, les oursins norvégiens offrent aux professionnels de la gastronomie un produit singulier."
                  : "Harvested in their natural environment and carefully selected, Norwegian sea urchins offer gastronomy professionals a singular product."}
              </p>
              <p>
                {fr
                  ? "Leur corail, également appelé uni, constitue une matière première appréciée dans les cuisines gastronomiques et japonaises."
                  : "Their coral, also called uni, is a raw material valued in gastronomic and Japanese kitchens."}
              </p>
              <p>
                {fr
                  ? "Séverin Select accompagne les professionnels français dans la découverte et l’approvisionnement de ces produits d’exception."
                  : "Séverin Select accompanies French professionals in discovering and sourcing these exceptional products."}
              </p>
            </div>
          </div>
        </section>
      </Reveal>

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
          className="oursins-coral"
          src={`${img}/01-open.jpg?v=2`}
          alt={fr
            ? "Détail du corail d’un oursin sauvage de Norvège"
            : "Coral detail of a wild Norwegian sea urchin"}
          caption={fr ? "Le détail" : "The detail"}
        />
      </div>

      <Photo
        className="jadran-wide"
        src={`${img}/05-whole.jpg?v=2`}
        alt={fr
          ? "Oursin sauvage entier tenu dans la main"
          : "Whole wild sea urchin held in the hand"}
        caption={fr ? "Oursin entier" : "Whole sea urchin"}
      />

      <Reveal>
        <section className="jadran-chapter">
          <div className="section-heading left">
            <p className="eyebrow">{fr ? "UNE SÉLECTION SÉVERIN SELECT" : "A SÉVERIN SELECT SELECTION"}</p>
            <h2>
              {fr
                ? "Une autre expression des eaux norvégiennes."
                : "Another expression of Norwegian waters."}
            </h2>
            <p>
              {fr
                ? "Séverin Select sélectionne des producteurs pour leur savoir-faire, l’identité de leurs produits et leur capacité à répondre aux attentes des professionnels. Avec Ecofang, nous souhaitons faire découvrir aux chefs et aux distributeurs français une autre expression de la richesse des eaux norvégiennes."
                : "Séverin Select selects producers for their craft, the identity of their products and their ability to meet professional expectations. With Ecofang, we want to introduce French chefs and distributors to another expression of the richness of Norwegian waters."}
            </p>
            <a className="primary-button oursins-cta" href="#contact">
              {fr ? "DÉCOUVRIR LES DISPONIBILITÉS" : "DISCOVER AVAILABILITY"}
            </a>
          </div>
        </section>
      </Reveal>

      <section className="section contact-section" id="contact">
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
