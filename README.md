# La Guilde Alpha — Site web

Site officiel de l'association de jeu de rôle **La Guilde Alpha** (Pau, 64).

---

## ✏️ Modifier le contenu du site

> Pas besoin de connaître la programmation. Tous les textes sont dans des fichiers simples.

### Option A — Modifier directement sur GitHub (le plus simple)

1. Aller sur le dépôt GitHub du site
2. Naviguer jusqu'au fichier à modifier (voir la liste ci-dessous)
3. Cliquer sur l'icône **crayon** (✏️) en haut à droite
4. Faire vos modifications
5. Cliquer sur **"Commit changes"** (bouton vert)
6. Le site se met à jour automatiquement en ~2 minutes !

### Option B — Via l'interface d'administration (plus confortable)

Rendez-vous sur `votre-site.com/admin/` pour accéder à une interface graphique permettant d'éditer le contenu sans toucher au code.

---

## 📁 Où sont les fichiers de contenu ?

| Fichier | Page sur le site |
|---------|-----------------|
| `src/about.md` | Page "L'Association" |
| `src/join.md` | Page "Nous Rejoindre" |
| `src/_data/site.json` | Paramètres globaux (Discord, adresse…) |
| `src/games/dnd-5e.md` | Fiche D&D 5e |
| `src/games/appel-de-cthulhu.md` | Fiche L'Appel de Cthulhu |
| `src/games/cyberpunk-red.md` | Fiche Cyberpunk Red |
| `src/games/pathfinder-2e.md` | Fiche Pathfinder 2e |
| `src/games/alien-rpg.md` | Fiche Alien RPG |
| `src/games/vampire-mascarade.md` | Fiche Vampire : La Mascarade |

---

## ➕ Ajouter un nouveau jeu

1. Dupliquer un fichier existant dans `src/games/` (par exemple `src/games/dnd-5e.md`)
2. Le renommer (ex: `src/games/mon-nouveau-jeu.md`)
3. Modifier l'en-tête (entre les `---`) :

```yaml
---
title: Nom du Jeu
genre: Genre du jeu
system: Système de règles
icon: "🎲"
description: Courte description (affichée sur la carte)
---
```

4. Écrire le contenu en dessous (format Markdown)
5. Commiter — le jeu apparaîtra automatiquement sur la page `/games/`

---

## 🔧 Installation locale (pour développeurs)

```bash
# Cloner le dépôt
git clone https://github.com/VOTRE-USERNAME/guilde-alpha.git
cd guilde-alpha

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start
# → Ouvrir http://localhost:8080

# Construire le site (production)
npm run build
# → Résultat dans le dossier _site/
```

---

## 🚀 Déploiement

Le site se déploie **automatiquement** sur [Cloudflare Pages](https://pages.cloudflare.com/) à chaque push sur la branche `main`.

### Configuration Cloudflare Pages

| Paramètre | Valeur |
|-----------|--------|
| Commande de build | `npm run build` |
| Dossier de sortie | `_site` |
| Node.js | 20.x |

### Secrets GitHub requis (pour GitHub Actions)

| Secret | Description |
|--------|-------------|
| `CLOUDFLARE_API_TOKEN` | Token API Cloudflare (permission "Cloudflare Pages : Edit") |
| `CLOUDFLARE_ACCOUNT_ID` | ID de votre compte Cloudflare |

> **Alternative :** Vous pouvez aussi connecter directement le dépôt GitHub depuis le dashboard Cloudflare Pages, sans avoir besoin des secrets GitHub Actions.

---

## 🛠️ Stack technique

- **[Eleventy (11ty)](https://www.11ty.dev/)** — Générateur de site statique
- **[TailwindCSS](https://tailwindcss.com/)** — Framework CSS utilitaire
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** — Moteur de templates
- **[Decap CMS](https://decapcms.org/)** — Interface d'administration
- **[Cloudflare Pages](https://pages.cloudflare.com/)** — Hébergement & déploiement

---

## 📝 Format Markdown

Les fichiers `.md` utilisent le format Markdown pour la mise en forme :

```markdown
## Titre de section

Du texte normal, avec du **texte en gras** et de l'*italique*.

- Point de liste
- Autre point

[Texte d'un lien](https://example.com)
```
