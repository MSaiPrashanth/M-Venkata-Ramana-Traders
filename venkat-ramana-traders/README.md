# Venkata Ramana Traders — Website

A static, mobile-responsive informational website for Venkata Ramana Traders,
a grocery (kirana) store in Kandi, Sangareddy, Telangana.

This is a **plain HTML/CSS/JS** site — no build tools, no frameworks, no
dependencies to install. It's intentionally kept this way so it loads fast
and is easy for a non-technical shop owner to host and update.

It contains **no e-commerce functionality** (no cart, no checkout, no
accounts, no online payments, no order/delivery tracking) — customers are
directed to call, WhatsApp, or visit the store in person, as required.

## Folder structure

```
venkata-ramana-traders/
├── index.html          Home page (hero, categories, why choose us, offers, about, location, contact)
├── about.html           About Us page
├── categories.html      Full product categories page
├── contact.html          Contact page with map, phone, WhatsApp, store timings
├── css/
│   └── style.css        All site styling (design tokens, layout, components, responsive rules)
├── js/
│   └── main.js           Mobile menu toggle (no other JS on the site)
└── README.md              This file
```

Each page is self-contained HTML with its own `<title>`, meta description,
and (where relevant) local business structured data — so each page can be
indexed and found on its own in search results.

## Running it locally

No installation is required. Pick either option:

**Option A — just open it**
Double-click `index.html` (or right-click → Open with your browser).

**Option B — local server (recommended, avoids any browser file:// quirks)**
From inside the `venkata-ramana-traders` folder, run one of:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```


## Deploying / hosting it live

Because it's a static site, you can host it for free on any of these
(pick one):

1. **Netlify** — Drag and drop the `venkata-ramana-traders` folder onto
   [app.netlify.com/drop](https://app.netlify.com/drop). You get a live
   URL instantly, and can later connect a custom domain (e.g.
   `venkataramanatraders.in`, if purchased).
2. **Vercel** — Create a free account at vercel.com, install the Vercel
   CLI, and run `vercel` from inside the project folder.
3. **GitHub Pages** — Push this folder to a GitHub repository, then enable
   Pages in the repository settings (Settings → Pages → deploy from the
   main branch).
4. **Any standard web hosting (cPanel/shared hosting)** — Upload all files
   via FTP into the `public_html` (or equivalent) folder.

No server-side code, database, or environment variables are needed.

## Editing content later

- **Text content**: edit directly inside the relevant `.html` file — all
  copy is plain text in the markup, there's no CMS.
- **Colors/fonts/spacing**: all defined at the top of `css/style.css`
  under `:root { ... }` as CSS variables, so the whole palette can be
  changed from one place.
- **Phone numbers**: search each HTML file for `9849300345` and
  `9949670461` (they appear in `tel:` links, the WhatsApp link, the
  footer, and the structured data block) and replace as needed.
- **Store timings**: currently shown as "Store timings will be updated"
  on the home and contact pages — replace this text once real hours are
  confirmed.


## Information still needed from the shop owner

To finish the site fully, the following real details are still needed
(placeholders and safe defaults were used in their place, per the brief,
so nothing was invented):

1. **Store opening/closing hours** (currently shown as "Store timings
   will be updated").
2. **Current offers or festival promotions**, if any (currently shows
   "Special offers coming soon").
3. **Confirmation of the two phone numbers** to use — see the note below.
4. **A logo image** (a simple line-drawing "shop" icon is used as a
   placeholder mark in the navbar/footer).
5. **Photos of the store front / interior** (optional) — the current
   design uses illustrated icons instead of photos, but real photos
   would make the site feel even more authentic.
6. **A domain name**, if the owner wants one (e.g.
   `venkataramanatraders.in`) instead of the free URL from the host
   chosen above.

⚠️ **Phone number note:** My notes from an earlier conversation about this
project have the alternate number as **9948653851**, but this request
listed it as **9949670461**. I've used the numbers exactly as given in
this request (**9849300345** and **9949670461**) throughout the site —
please double check the alternate number is correct before publishing.
