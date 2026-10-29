import { useState } from "react";

export default function LeadForm({
  lang = "fr",
  product = "",
  submitLabel,
  extraFields = [],
  requiredFields
}) {
  const [sent, setSent] = useState(false);
  const required = new Set(requiredFields || ["name", "business", "city", "country", "email"]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const extras = extraFields
      .map(field => {
        const value = String(form.get(field.name) || "").trim();
        return value ? `${field.labelFr}: ${value}` : null;
      })
      .filter(Boolean)
      .join("\n");
    const subject = encodeURIComponent(`Séverin Select — ${form.get("product")}`);
    const body = encodeURIComponent(
      `Produit: ${form.get("product")}\n` +
      `Nom: ${form.get("name")}\n` +
      `Établissement: ${form.get("business")}\n` +
      `Ville: ${form.get("city")}\n` +
      `Pays: ${form.get("country")}\n` +
      `Téléphone: ${form.get("phone")}\n` +
      `Email: ${form.get("email")}\n` +
      (extras ? `${extras}\n` : "") +
      `\nMessage:\n${form.get("message")}`
    );
    window.location.href = `mailto:contact@severin-select.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const fr = lang === "fr";

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <input type="hidden" name="product" value={product || (fr ? "Demande générale" : "General inquiry")} />
      <div className="form-grid">
        <label>{fr ? "Nom" : "Name"}<input name="name" autoComplete="name" required={required.has("name")} /></label>
        <label>{fr ? "Établissement" : "Business"}<input name="business" autoComplete="organization" required={required.has("business")} /></label>
        <label>{fr ? "Ville" : "City"}<input name="city" autoComplete="address-level2" required={required.has("city")} /></label>
        <label>{fr ? "Pays" : "Country"}<input name="country" autoComplete="country-name" required={required.has("country")} /></label>
        <label>{fr ? "Téléphone" : "Phone"}<input name="phone" type="tel" autoComplete="tel" required={required.has("phone")} /></label>
        <label>E-mail<input type="email" name="email" autoComplete="email" required={required.has("email")} /></label>
        {extraFields.map(field => (
          <label key={field.name}>
            {fr ? field.labelFr : field.labelEn}
            {field.type === "select" ? (
              <select name={field.name} required={field.required || required.has(field.name)}>
                {field.options.map(option => (
                  <option key={option.value || "empty"} value={option.value}>
                    {fr ? option.labelFr : option.labelEn}
                  </option>
                ))}
              </select>
            ) : (
              <input name={field.name} required={field.required || required.has(field.name)} />
            )}
          </label>
        ))}
      </div>
      <label>{fr ? "Message" : "Message"}<textarea name="message" rows="5" /></label>
      <button className="primary-button" type="submit">
        {submitLabel || (fr ? "ENVOYER MA DEMANDE" : "SEND MY REQUEST")}
      </button>
      {sent && <p className="form-note">{fr ? "Votre logiciel de messagerie va s’ouvrir." : "Your email client will open."}</p>}
    </form>
  );
}
