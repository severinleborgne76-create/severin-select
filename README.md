# Séverin Select — V1

Base fonctionnelle React + Vite prête à ouvrir dans Cursor.

## Démarrage

```bash
npm install
npm run dev
```

Puis ouvrir l'adresse affichée par Vite.

## Pages déjà créées

- `/` : homepage FR/EN
- `/selection/grenoucerie` : fiche Grenoucerie FR/EN
- `/selection/crabe-royal` : fiche Crabe Royal de Norvège FR/EN
- `/selection/oursins-norvege` : fiche Oursins sauvages de Norvège — Ecofang FR/EN

## Logo

Le logo est actuellement construit en HTML/CSS afin de pouvoir travailler rapidement dans Cursor.

Le `S` intègre seulement un petit ardillon de la même couleur, sans anneau.  
Quand le dessin final du logo sera validé, remplacer le composant `Brand.jsx` par un SVG définitif.

## Formulaire

La V1 utilise `mailto:contact@severin-select.com`.

Pour la mise en production, remplacer cette solution par :
- Formspree / Resend / fonction Vercel, ou
- connexion future à ton CRM.

Les distributeurs ne sont jamais affichés publiquement.

## Déploiement conseillé

Vercel :
1. pousser le projet sur GitHub,
2. importer le repo dans Vercel,
3. ajouter `severin-select.com`,
4. faire pointer le DNS OVH vers Vercel,
5. rediriger `severin-select.fr` vers le `.com`.

## Ligne éditoriale

Premium · Authentique · Européen

Phrase centrale :
> Je ne sélectionne pas des catalogues. Je sélectionne des producteurs.

La mention « sélectionné sur place » doit uniquement être utilisée après visite personnelle du site de production.
