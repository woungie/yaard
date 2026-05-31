# CLAUDE.md — YAARD Caribbean PFP Generator

## What is YAARD

A Caribbean-themed AI profile picture generator. Users pick an aesthetic style, upload a photo, and receive AI-generated style tips via the Anthropic API. Photos are never stored — they are destroyed after download.

---

## Design System

### Colors
```css
--gold:  #F5C842
--rust:  #D4522A
--green: #1A5C3A
--cream: #FDF6E3
--deep:  #0D0D0D
```

### Fonts
- **Headings:** Syne (Google Fonts)
- **Body:** DM Sans (Google Fonts)

---

## The 8 Aesthetic Styles

Defined in the `STYLES` array in `index.html`.

| ID | Name |
|----|------|
| `melanin-glow` | Melanin Glow |
| `golden-hour` | Golden Hour |
| `y2k-vibes` | Y2K Vibes |
| `vamp-romantic` | Vamp Romantic |
| `poetcore` | Poetcore |
| `cool-blue` | Cool Blue |
| `dancehall-street` | Dancehall Street |
| `soft-glow` | Soft Glow |

Each style object has these fields:

```js
{
  id:      String,   // kebab-case unique identifier
  name:    String,   // display name
  vibe:    String,   // short tagline shown in the UI
  grad:    String,   // CSS gradient for the style card
  filters: String,   // CSS filter string applied to the photo canvas
  kw:      String[], // keywords used for UI labels / tags
  prompt:  String,   // text sent to Claude describing the style for tips
}
```

---

## How to Add a New Aesthetic

1. **`index.html`** — add a new object to the `STYLES` array following the schema above.
2. **`netlify/functions/claude-proxy.js`** — add the style's `name` string to the `ALLOWED_PROMPTS` array so the proxy will accept requests for it.

That's all — no other files need changing.

---

## Key Technical Details

| Thing | Detail |
|-------|--------|
| Age gate | Uses `sessionStorage` key `yaard_age`; set to `"true"` on confirm |
| Photo destruction | `destroyPhoto()` is called after download — photo data is wiped from memory and never persisted |
| API proxy | `/.netlify/functions/claude-proxy` — the Anthropic API key lives here, never in the browser |
| Deployment | Push to GitHub → Netlify auto-deploys (~30 seconds) |

---

## Deployment Workflow

```
Edit file → git add . && git commit -m "message" && git push → Netlify auto-deploys
```

Netlify environment variable required: `ANTHROPIC_API_KEY` (set in Netlify site config, not in code).

---

## Backlog

- [ ] Google AdSense integration
- [ ] Google Analytics tracking
- [ ] Custom domain: `yaard.co`
- [ ] 9th aesthetic style
- [ ] Share on Pinterest button
- [ ] Matching PFP feature (generate coordinated PFPs for couples / friend groups)
