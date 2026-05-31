# YAARD — Caribbean PFP Generator
### Deployment Guide for Netlify

---

## What's in this package

```
yaard/
├── index.html                        ← Homepage + age gate + full PFP generator
├── about.html                        ← About page
├── privacy.html                      ← Privacy policy
├── netlify.toml                      ← Netlify config (functions folder + security headers)
├── netlify/
│   └── functions/
│       └── claude-proxy.js           ← Secure API proxy (keeps your key server-side)
└── README.md                         ← This file
```

---

## Step 1 — Get an Anthropic API key

1. Go to **console.anthropic.com** and sign up / log in
2. Navigate to **API Keys** → click **Create Key**
3. Copy the key — it starts with `sk-ant-...`
4. Keep it safe — you'll paste it into Netlify in Step 3

---

## Step 2 — Deploy to Netlify

1. Go to **netlify.com** and create a free account
2. From your dashboard click **"Add new site"**
3. Choose **"Deploy manually"**
4. **Drag and drop the entire `yaard` folder** onto the upload zone
5. Netlify will assign a URL like `https://random-name-123.netlify.app`

> ⚠️ Drag the **folder**, not the zip file. Netlify needs to see the folder structure including `netlify/functions/`.

---

## Step 3 — Add your API key (critical)

This is what keeps your API key secret — it lives on Netlify's servers, never in your HTML.

1. In Netlify, go to your site → **Site configuration**
2. Click **Environment variables** in the left sidebar
3. Click **Add a variable**
4. Set:
   - **Key:** `ANTHROPIC_API_KEY`
   - **Value:** `sk-ant-...` (your key from Step 1)
5. Click **Save**
6. Go to **Deploys** → click **Trigger deploy** → **Deploy site**

Your site will redeploy with the key active. The style tips feature will now work.

---

## Step 4 — Connect a custom domain (optional)

1. Register a domain at **namecheap.com** (~$12/year for a .co or .com)
2. In Netlify → **Domain management** → **Add a domain**
3. Enter your domain (e.g. `yaard.co`)
4. Follow the DNS instructions (update your nameservers at Namecheap)
5. Netlify provisions a free SSL certificate automatically

---

## Step 5 — Set up Google AdSense

1. Go to **adsense.google.com** and apply with your live site URL
2. Google will review your site (typically 1–2 weeks)
3. Once approved, add your AdSense code snippet just before `</head>` in `index.html`, `about.html`, and `privacy.html`
4. Place ad units in `index.html`:
   - One banner **above** the style picker (`<!-- AD SLOT: above styles -->`)
   - One banner **below** the result area (`<!-- AD SLOT: below tips -->`)
5. Redeploy by dragging the updated folder to Netlify

---

## How the API proxy works

```
Browser                    Netlify Function             Anthropic
   │                            │                           │
   │  POST /.netlify/functions/ │                           │
   │  claude-proxy              │                           │
   │  { prompt, style }  ──────►│                           │
   │                            │  POST api.anthropic.com   │
   │                            │  Authorization: sk-ant-...│
   │                            │  ─────────────────────────►
   │                            │                           │
   │                            │◄─────────────────────────
   │◄──────────────────         │  { text: "..." }          │
   │  { text: "..." }           │                           │
```

Your API key (`ANTHROPIC_API_KEY`) only ever exists on Netlify's servers.
It is never sent to the browser, never in your HTML, never visible to users.

---

## Making edits

To update any page:
1. Edit the HTML file locally (use VS Code — free at code.visualstudio.com)
2. Save the file
3. Go to Netlify → **Deploys** → **Deploy manually** → drag the folder again

For ongoing updates, connect a GitHub repo to Netlify for automatic deploys on every save.

---

## Things to personalise before launch

| Location | What to update |
|----------|---------------|
| `index.html` footer | Replace `hello@yaard.co` with your real email |
| `about.html` | Update the founding story if needed |
| `privacy.html` | Replace `yaard.co` with your real domain, update contact email |
| All pages | Add your Google AdSense code once approved |
| All pages | Add Google Analytics tracking ID if desired |

---

## Support

Built with Claude by Anthropic · Hosted on Netlify · Fonts by Google Fonts
