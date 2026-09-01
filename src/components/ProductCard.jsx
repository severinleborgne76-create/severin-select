import { useState } from "react";

export default function ProductCard({ product, lang }) {
  const title = lang === "fr" ? product.titleFr : product.titleEn;
  const origin = lang === "fr" ? product.originFr : product.originEn;
  const [photoReady, setPhotoReady] = useState(false);
  const showProducer = product.producer && product.producer !== "À compléter";

  const content = (
    <>
      <div className={`product-image${photoReady ? " has-photo" : ""}`}>
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
            <span className="placeholder-kicker">{origin}</span>
            <span className="placeholder-title">{title}</span>
          </div>
        )}
      </div>
      <div className="product-copy">
        <p className="eyebrow">{origin}</p>
        <h3>{title}</h3>
        {showProducer && <p>{product.producer}</p>}
        <span className="text-link">
          {product.status === "active"
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
