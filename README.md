# Tamiron Afrika Adventures — Website

A multi-page static website for *Tamiron Afrika Adventures*, a Nairobi-based luxury travel company specializing in private travel experiences. The website showcases curated itineraries, iconic destinations, personalized adventures, and unforgettable experiences across diverse landscapes, wildlife destinations, and cultural attractions worldwide.

---

## Project Structure

```
tamiron-afrika/
├── index.html              # Homepage — hero, stats strip, quick-links grid
│
├── pages/
│   ├── about.html          # About the company + values section
│   ├── destinations.html   # 4-park card grid + detailed per-park strips
│   ├── safaris.html        # Full 8-day tabbed itinerary + accommodation summary
│   ├── Extras.html         # From honeymoons to visa assistance.
│   ├── book.html           # Contact form + WhatsApp button + address
│   ├── _nav.html           # Nav partial (reference snippet — not a live include)
│   └── _footer.html        # Footer partial (reference snippet — not a live include)
│
├── css/
│   └── style.css           # Shared styles (tokens, reset, nav, footer, components)
│
└── js/
    └── main.js             # Shared scripts (cursor, nav scroll, reveal, tabs, form)
```

---

## Pages

| File | Route | Description |
|---|---|---|
| `index.html` | `/` | Hero with Ken Burns effect, stats strip, navigation grid |
| `pages/about.html` | `/pages/about.html` | Company story, features, three-pillar values |
| `pages/destinations.html` | `/pages/destinations.html` | All four parks with card grid and detailed content strips |
| `pages/safaris.html` | `/pages/safaris.html` | Day-by-day tabbed itinerary, accommodation summary table |
| `pages/Extras.html` | `/pages/Extras.html` | From honeymoons to visa assistance — we handle every detail so all you carry is wonder. |
| `pages/book.html` | `/pages/book.html` | Enquiry form, contact details, WhatsApp CTA |

---

## Tech Stack

- **Pure HTML5, CSS3, and vanilla JavaScript** — no frameworks, no build tools, no dependencies
- **Google Fonts** — Cormorant Garamond (serif headings) + Josefin Sans (body/UI)
- **Images** — sourced from Unsplash and AWF (loaded via `<img>` tags with `loading="lazy"`)

---

## Key Features

- **Custom cursor** — gold dot with lagging ring, scales on hover over interactive elements
- **Ken Burns hero** — subtle zoom-out on page load via CSS transition
- **Scroll reveal** — `IntersectionObserver` fades elements up as they enter the viewport, with staggered delays on cards
- **Sticky nav** — transparent on load, blurs and darkens on scroll past 60px
- **Mobile nav overlay** — full-screen menu triggered by hamburger icon
- **Itinerary tabs** — sidebar day buttons swap content panels; no page reload
- **Responsive** — three breakpoints: 1050px, 768px, 480px

---

## Design Tokens

All colours are defined as CSS custom properties in `style.css`:

```css
--sand:     #D4B896   /* warm beige — body accents */
--earth:    #8B5E3C   /* mid brown — hover states */
--dusk:     #2C1A0E   /* dark brown — alternate section bg */
--night:    #0F0A05   /* near black — primary background */
--fog:      #F5EEE6   /* off-white — body text */
--moss:     #4A5C3A   /* muted green — inclusion checkmarks */
--flame:    #D4622A   /* burnt orange — primary CTA buttons */
--ivory:    #FAF6F0   /* bright white — headings */
--gold:     #BF9B4D   /* warm gold — labels, accents, borders */
```

---

## How to Run

No build step required. Open `index.html` directly in a browser:

```
# Option 1 — open the file directly
open index.html

# Option 2 — serve locally (avoids any file:// quirks)
npx serve .
# or
python3 -m http.server 8080
```

> **Important:** keep `index.html` and the `pages/` folder in the same directory. All inter-page links are relative (e.g. `pages/about.html` from the root, `about.html` between siblings in `pages/`).

---

## Self-Contained Pages

Each page in `pages/` has the shared CSS (`style.css`) and JavaScript (`main.js`) **inlined directly** into the file. This means every page works when opened standalone — no server required, no broken styles if files are moved individually.

The `css/` and `js/` source files are kept for reference and future maintenance. If you move to a proper web server, you can restore the external links: 

```html
<!-- In <head> — replace the  first <style> block with: -->
<link rel="stylesheet" href="../css/style.css">

<!-- Before </body> — replace the last <script> block with: -->
<script src="../js/main.js"></script>
```

---


## Contact

**Tamiron Afrika Adventures**  
P.O. Box 00100, Nairobi, Kenya  
📧 tamironafrika@gmail.com  
📞 +254 727 356 953 / +254 707 329 653