# 🔑 Guide de transfert — Site SARL RAVOLET

Ce document liste **toutes les étapes** pour que le patron soit propriétaire à 100% de son site web, sans dépendance à ton compte personnel.

---

## 📋 Checklist globale

- [ ] 1. Transférer le dépôt GitHub
- [ ] 2. Transférer le projet Supabase
- [ ] 3. Créer le compte Resend du patron
- [ ] 4. Modifier l'adresse email dans le code
- [ ] 5. Acheter le nom de domaine
- [ ] 6. Déployer sur Vercel
- [ ] 7. Configurer le DNS (nom de domaine → Vercel)
- [ ] 8. Créer la table `avis_clients` dans Supabase
- [ ] 9. Compléter les mentions légales
- [ ] 10. Configurer Resend avec le domaine personnalisé (optionnel)

---

## 1️⃣ Transférer le dépôt GitHub

Le code source du site est sur GitHub. Le patron doit en être propriétaire.

### Ce que le patron doit faire :
1. Créer un compte GitHub sur [github.com](https://github.com) (gratuit)
   - Email : `sarl.ravolet@gmail.com`
2. Te communiquer son **nom d'utilisateur GitHub**

### Ce que toi tu dois faire :
1. Aller dans **Settings** du dépôt → **General** → tout en bas : **Transfer repository**
2. Entrer le nom d'utilisateur GitHub du patron
3. Confirmer le transfert

> ✅ **Résultat** : Le patron est propriétaire du code. Tu peux rester collaborateur si besoin.

---

## 2️⃣ Transférer le projet Supabase

La base de données (messages de contact, avis clients) est sur Supabase.

### Ce que le patron doit faire :
1. Créer un compte Supabase sur [supabase.com](https://supabase.com) avec `sarl.ravolet@gmail.com`

### Ce que toi tu dois faire :
1. Aller dans le projet Supabase → **Settings** → **General**
2. Dans **Organization members** → **Invite member**
3. Inviter `sarl.ravolet@gmail.com` avec le rôle **Owner**
4. Une fois que le patron accepte l'invitation, tu peux te retirer du projet

> **Mot de passe actuel BDD** : `S@rl_R@volet2025`

---

## 3️⃣ Créer le compte Resend (emails)

Resend est le service qui envoie un email au patron quand un client remplit le formulaire de contact.

### Ce que le patron doit faire :
1. Aller sur [resend.com](https://resend.com)
2. Créer un compte avec `sarl.ravolet@gmail.com`
3. Aller dans **API Keys** → **Create API Key**
4. Copier la clé (commence par `re_...`)
5. Te la communiquer pour la mettre dans Vercel (étape 6)

> ⚠️ **Important** : Ta clé actuelle (`re_awYfyHn3_...`) est liée à ton compte personnel. Il faut en créer une sur le compte du patron.

---

## 4️⃣ Modifier l'adresse email dans le code

Actuellement, les notifications sont envoyées à `damien.lorigeon@gmail.com` (pour les tests).

### Fichier à modifier :

**`app/api/contact/route.ts`** — Ligne 60 :
```diff
- to: "damien.lorigeon@gmail.com",
+ to: "sarl.ravolet@gmail.com",
```

> Fais ce changement, commit et push sur GitHub. Vercel redéploiera automatiquement.

---

## 5️⃣ Acheter le nom de domaine

### Recommandations de registrar :
| Registrar | Prix/an (~) | Avantage |
|---|---|---|
| **OVH** (ovhcloud.com) | ~10€ | Français, simple |
| **Infomaniak** | ~12€ | Suisse, écologique |
| **Gandi** | ~15€ | Français, pro |

### Noms de domaine suggérés :
- `sarl-ravolet.fr` (recommandé)
- `ravolet.fr`
- `ravolet-climatisation.fr`

### Ce que le patron doit faire :
1. Aller sur [ovhcloud.com](https://www.ovhcloud.com/fr/domains/)
2. Rechercher le nom de domaine souhaité
3. L'acheter (paiement par CB, ~10€/an)
4. Conserver les accès de connexion OVH

---

## 6️⃣ Déployer sur Vercel

Vercel est la plateforme d'hébergement du site (gratuit).

### Ce que le patron doit faire :
1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer sur **Sign Up** → **Continue with GitHub** (utiliser le compte GitHub créé à l'étape 1)

### Ce que toi tu dois faire :
1. Dans le Dashboard Vercel → **Add New Project**
2. Sélectionner le dépôt `sarl-ravolet-website`
3. **Configurer les variables d'environnement** avant de déployer :

| Variable | Valeur |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://yzpzelpcfyvzqndanosm.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | La clé publique Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | La clé secrète Supabase |
| `RESEND_API_KEY` | La nouvelle clé du compte Resend du patron |

4. Cliquer sur **Deploy**
5. Le site sera accessible à `https://sarl-ravolet-website.vercel.app`

---

## 7️⃣ Configurer le DNS (domaine → Vercel)

Pour que `sarl-ravolet.fr` pointe vers le site hébergé sur Vercel.

### Dans Vercel :
1. Dashboard → Projet → **Settings** → **Domains**
2. Ajouter `sarl-ravolet.fr` et `www.sarl-ravolet.fr`
3. Vercel affichera les enregistrements DNS à configurer

### Dans OVH (ou autre registrar) :
1. Aller dans la **Zone DNS** du domaine
2. Ajouter les enregistrements indiqués par Vercel :
   - **Type A** : `76.76.21.21` (pour `sarl-ravolet.fr`)
   - **Type CNAME** : `cname.vercel-dns.com` (pour `www.sarl-ravolet.fr`)
3. Attendre la propagation DNS (jusqu'à 24h, souvent 15 minutes)

> ✅ **Résultat** : Le site est accessible à `https://sarl-ravolet.fr` avec HTTPS automatique (certificat SSL géré par Vercel).

---

## 8️⃣ Créer la table `avis_clients` dans Supabase

Cette table n'a pas encore été créée. Sans elle, le système d'avis ne fonctionne pas.

### Ce que toi tu dois faire :
1. Aller dans Supabase → **SQL Editor** → **New Query**
2. Coller et exécuter :

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

> Pour publier un avis client : aller dans **Table Editor** → `avis_clients` → passer `publie` de `FALSE` à `TRUE`.

---

## 9️⃣ Compléter les mentions légales

Le patron doit te fournir ces informations pour que tu les ajoutes dans `app/mentions-legales/page.tsx` :

- [ ] **Numéro RCS** (disponible sur le Kbis)
- [ ] **Numéro de TVA intracommunautaire** (demander au comptable)
- [ ] **Adresse du siège social** (adresse physique de l'entreprise)

---

## 🔟 Configurer Resend avec le domaine (optionnel)

Actuellement, les emails sont envoyés depuis `onboarding@resend.dev`. Pour envoyer depuis `contact@sarl-ravolet.fr` :

1. Dans Resend → **Domains** → **Add Domain**
2. Entrer `sarl-ravolet.fr`
3. Resend donne des enregistrements DNS à ajouter dans OVH (SPF, DKIM, DMARC)
4. Une fois vérifié, modifier la ligne dans `app/api/contact/route.ts` :

```diff
- from: "SARL RAVOLET <onboarding@resend.dev>",
+ from: "SARL RAVOLET <contact@sarl-ravolet.fr>",
```

---

## 🔒 Rappels de sécurité

> [!CAUTION]
> - Ne **jamais** commiter le fichier `.env.local` dans Git
> - Les clés API doivent rester **secrètes** (Supabase service role + Resend)
> - Changer le mot de passe de la base de données si nécessaire
> - Le patron doit avoir son **propre** compte sur chaque service (GitHub, Supabase, Resend, Vercel, OVH)

---

## 📞 Support

Une fois le transfert terminé, le patron peut gérer son site en autonomie :
- **Ajouter/modifier du contenu** : Modifier les fichiers `.tsx` et push sur GitHub → Vercel redéploie automatiquement
- **Voir les messages** : Supabase → Table Editor → `messages_contact`
- **Gérer les avis** : Supabase → Table Editor → `avis_clients` → cocher `publie`
- **Ajouter des photos** : Ajouter des images dans `public/realisations/` et mettre à jour `app/realisations/page.tsx`
