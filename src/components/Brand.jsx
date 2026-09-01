import { useContext } from "react";
import { LangContext } from "../i18n/context";

export default function Brand() {
  const { lang } = useContext(LangContext);
  const fr = lang === "fr";

  return (
    <a className="brand" href="/" aria-label="Séverin Select">
      <img
        className="brand-logo"
        src="/images/severin-select-logo.png"
        alt=""
      />
      <span className="brand-signature">
        {fr ? "L’expertise des produits de la mer" : "Seafood expertise"}
      </span>
    </a>
  );
}
