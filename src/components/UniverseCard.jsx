import { useState } from "react";

export default function UniverseCard({ universe, lang }) {
  const title = lang === "fr" ? universe.titleFr : universe.titleEn;
  const line = lang === "fr" ? universe.lineFr : universe.lineEn;
  const [hasPhoto, setHasPhoto] = useState(true);
  const [loadedSrc, setLoadedSrc] = useState(universe.image);
  if (universe.image !== loadedSrc) {
    setLoadedSrc(universe.image);
    setHasPhoto(true);
  }

  const content = (
    <>
      {hasPhoto && (
        <img
          src={universe.image}
          alt={universe.imageAlt || ""}
          onError={() => setHasPhoto(false)}
        />
      )}
      <div className="universe-veil" />
      <div className="universe-copy">
        <h3>{title}</h3>
        <p>{line}</p>
        {universe.creditFr && (
          <span className="universe-credit">{lang === "fr" ? universe.creditFr : universe.creditEn}</span>
        )}
      </div>
      {universe.badgeFr && (
        <span className="universe-badge">{lang === "fr" ? universe.badgeFr : universe.badgeEn}</span>
      )}
    </>
  );

  const className = `universe universe--${universe.layout}`;

  return universe.href
    ? <a className={className} href={universe.href}>{content}</a>
    : <article className={className}>{content}</article>;
}
