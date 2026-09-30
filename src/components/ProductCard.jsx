import { useState } from "react";

export default function ProductCard({ product, lang }) {
  const title = lang === "fr" ? product.titleFr : product.titleEn;
  const origin = lang === "fr" ? product.originFr : product.originEn;
  const [photoReady, setPhotoReady] = useState(false);
  const showProducer = product.producer && product.producer !== "À compléter";

  const badge = lang === "fr" ? product.badgeFr : product.badgeEn;
  const kicker = origin || product.producer;

  const content = (
    <>
      <div
        className={`product-image${photoReady ? " has-photo" : ""}`}
        data-photo-placeholder={!photoReady ? "true" : undefined}
      >
        {product.image && (
          <img
            src={product.image}
            alt=""
            onLoad={() => setPhotoReady(true)}
            onError={() => setPhotoReady(false)}
          />
        )}
        {!photoReady && (
          <div className="image-fallback" aria-hidden="true">
            <span className="placeholder-wave" />
            {kicker ? <span className="placeholder-kicker">{kicker}</span> : null}
            <span className="placeholder-title">{title}</span>
          </div>
        )}
        {badge && <span className="universe-badge">{badge}</span>}
      </div>
      <div className="product-copy">
        {origin ? <p className="eyebrow">{origin}</p> : <p className="eyebrow">{product.producer}</p>}
        <h3>{title}</h3>
        {showProducer && <p>{product.producer}</p>}
        <span className="text-link">
          {product.href
            ? (lang === "fr" ? "Découvrir →" : "Discover →")
            : (lang === "fr" ? "Bientôt →" : "Coming soon →")}
        </span>
      </div>
    </>
  );

  return product.href
    ? <a className="product-card" href={product.href}>{content}</a>
    : <article className="product-card muted-card">{content}</article>;
}
