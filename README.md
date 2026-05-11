# 🏠 SARL RAVOLET — Site Web Vitrine

Site web professionnel de la **SARL RAVOLET**, spécialisée en climatisation, plomberie et électricité à Moulins (03) et ses alentours (50 km).

---

## 📋 Informations de l'entreprise

| Champ | Valeur |
|---|---|
| **Raison sociale** | SARL RAVOLET |
| **Activité** | Climatisation / Plomberie / Électricité |
| **SIRET** | 989 647 920 00010 |
| **Téléphone** | 04 70 43 77 80 |
| **Email professionnel** | sarl.ravolet@gmail.com |
| **Zone d'intervention** | Moulins (03) — Rayon de 50 km |

---

## 🛠️ Stack Technique

### Langages & Frameworks

| Technologie | Version | Rôle |
|---|---|---|
| **TypeScript** | 5.x | Langage principal |
| **React** | 19.2 | Bibliothèque UI |
| **Next.js** | 16.2.2 | Framework web (App Router) |
| **Tailwind CSS** | 4.x | Framework CSS (design & styles) |

### Bibliothèques

| Dépendance | Rôle |
|---|---|
| `@supabase/supabase-js` | Client base de données Supabase |
| `lucide-react` | Icônes SVG |
| `leaflet` + `react-leaflet` | Carte interactive (zone d'intervention) |
| `resend` | Envoi d'emails de notification |

### Services externes

| Service | Rôle | Plan |
|---|---|---|
| **Supabase** (Frankfurt, EU) | Base de données PostgreSQL (messages, avis) | Gratuit |
| **Resend** | Envoi d'emails de notification | Gratuit (100 emails/jour) |
| **Vercel** | Hébergement du site | Gratuit (Hobby) |
| **GitHub** | Hébergement du code source | Gratuit |
| **OpenStreetMap** | Fond de carte (page À propos) | Gratuit, sans clé API |

---

## 📁 Structure du projet

```
app/
├── page.tsx                       # Page d'accueil
├── layout.tsx                     # Layout global (header + footer)
├── a-propos/page.tsx              # Page À propos + carte interactive
├── services/page.tsx              # Page Services (Clim, Plomberie, Élec)
├── realisations/page.tsx          # Galerie photos par catégorie
├── contact/page.tsx               # Formulaire de contact
├── mentions-legales/page.tsx      # Mentions légales
├── politique-de-confidentialite/  # Politique RGPD
├── api/
│   ├── contact/route.ts           # API: enregistrement message + email
│   └── avis/route.ts              # API: GET avis publiés / POST nouvel avis
components/
├── Header.tsx                     # Barre de navigation
├── Footer.tsx                     # Pied de page
├── AvisClients.tsx                # Système d'avis (affichage + formulaire)
├── ImageCarousel.tsx              # Carrousel d'images (page Réalisations)
├── MapZone.tsx                    # Carte Leaflet (zone d'intervention)
├── MapWrapper.tsx                 # Wrapper client pour la carte
├── ScrollReveal.tsx               # Animations au scroll
└── CookieBanner.tsx               # Bannière RGPD cookies
lib/
└── supabase.ts                    # Client Supabase
public/
├── logo.png                       # Logo de l'entreprise
└── realisations/                  # Photos de chantiers (Clim, Plomberie, Élec)
```

---

## 🔐 Variables d'environnement

Fichier `.env.local` (⚠️ **ne jamais commiter** — il est dans `.gitignore`) :

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://yzpzelpcfyvzqndanosm.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<clé publique Supabase>
SUPABASE_SERVICE_ROLE_KEY=<clé secrète Supabase>

# Resend (Email)
RESEND_API_KEY=<clé API Resend>
```

> Ces mêmes variables devront être configurées dans le Dashboard Vercel lors du déploiement.

---

## 🗄️ Base de données (Supabase)

### Tables

**`messages_contact`** — Messages envoyés via le formulaire de contact
```sql
CREATE TABLE messages_contact (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  sujet TEXT NOT NULL,
  message TEXT NOT NULL,
  rgpd_consent BOOLEAN NOT NULL DEFAULT false,
  consent_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

**`avis_clients`** — Avis laissés par les clients (modération manuelle)
```sql
CREATE TABLE avis_clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  note INTEGER NOT NULL CHECK (note >= 1 AND note <= 5),
  commentaire TEXT NOT NULL,
  publie BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);
```

> Pour publier un avis : dans Supabase → Table Editor → `avis_clients` → passer `publie` à `TRUE`.

---

## 🚀 Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Vérifier le build de production
npm run build
```

---

## 📧 Adresse email utilisée dans le code

| Fichier | Utilisation | Email actuel |
|---|---|---|
| `app/api/contact/route.ts` (ligne 60) | Destinataire des notifications | `sarl.ravolet@gmail.com` |

---

## ✅ Conformité RGPD

- ✅ Bannière de consentement cookies
- ✅ Case de consentement obligatoire sur les formulaires
- ✅ Horodatage du consentement (`consent_date`)
- ✅ Politique de confidentialité complète
- ✅ Mentions légales
- ✅ Base de données hébergée en Europe (Supabase Frankfurt)

---

## 📝 TODO — Informations légales à compléter

Les champs suivants sont marqués `TODO` dans `app/mentions-legales/page.tsx` :

- [ ] **Numéro RCS** (Registre du Commerce)
- [ ] **Numéro de TVA intracommunautaire**
- [ ] **Adresse du siège social**
