import { useState } from "react";

export default function UniverseCard({ universe, lang }) {
  const title = lang === "fr" ? universe.titleFr : universe.titleEn;
  const line = lang === "fr" ? universe.lineFr : universe.lineEn;
  const [hasPhoto, setHasPhoto] = useState(true);

  const content = (
    <>
      {hasPhoto && (
        <img
          src={universe.image}
          alt=""
          onError={() => setHasPhoto(false)}
        />
      )}
      <div className="universe-veil" />
      <div className="universe-copy">
        <h3>{title}</h3>
        <p>{line}</p>
      </div>
    </>
  );

  const className = `universe universe--${universe.layout}`;

  return universe.href
    ? <a className={className} href={universe.href}>{content}</a>
    : <article className={className}>{content}</article>;
}
