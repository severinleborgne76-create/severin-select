import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import Brand from "./Brand";
import { LangContext } from "../i18n/context";

export default function Header() {
  const { lang, setLang } = useContext(LangContext);
  const [open, setOpen] = useState(false);

  const nav = lang === "fr"
    ? [["LA SÉLECTION", "/#selection"], ["LES PRODUCTEURS", "/#producers"], ["MA DÉMARCHE", "/#approach"], ["SÉVERIN", "/#severin"], ["CONTACT", "/#contact"]]
    : [["THE SELECTION", "/#selection"], ["PRODUCERS", "/#producers"], ["OUR APPROACH", "/#approach"], ["SÉVERIN", "/#severin"], ["CONTACT", "/#contact"]];

  return (
    <header className="site-header">
      <Brand />
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "main-nav open" : "main-nav"}>
        {nav.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <span className="lang-switch">
          <button className={lang === "fr" ? "active" : ""} onClick={() => setLang("fr")}>FR</button>
          <span>|</span>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
        </span>
      </nav>
    </header>
  );
}
