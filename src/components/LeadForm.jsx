import { useState } from "react";

export default function LeadForm({ lang = "fr", product = "" }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Séverin Select — ${form.get("product")}`);
    const body = encodeURIComponent(
      `Produit: ${form.get("product")}\n` +
      `Nom: ${form.get("name")}\n` +
      `Établissement: ${form.get("business")}\n` +
      `Ville: ${form.get("city")}\n` +
      `Pays: ${form.get("country")}\n` +
      `Téléphone: ${form.get("phone")}\n` +
      `Email: ${form.get("email")}\n\n` +
      `Message:\n${form.get("message")}`
    );
    window.location.href = `mailto:contact@severin-select.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const fr = lang === "fr";

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <input type="hidden" name="product" value={product || (fr ? "Demande générale" : "General inquiry")} />
      <div className="form-grid">
        <label>{fr ? "Nom" : "Name"}<input name="name" required /></label>
        <label>{fr ? "Établissement" : "Business"}<input name="business" required /></label>
        <label>{fr ? "Ville" : "City"}<input name="city" required /></label>
        <label>{fr ? "Pays" : "Country"}<input name="country" required /></label>
        <label>{fr ? "Téléphone" : "Phone"}<input name="phone" /></label>
        <label>E-mail<input type="email" name="email" required /></label>
      </div>
      <label>{fr ? "Message" : "Message"}<textarea name="message" rows="5" /></label>
      <button className="primary-button" type="submit">{fr ? "ENVOYER MA DEMANDE" : "SEND MY REQUEST"}</button>
      {sent && <p className="form-note">{fr ? "Votre logiciel de messagerie va s’ouvrir." : "Your email client will open."}</p>}
    </form>
  );
}
