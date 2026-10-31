# SpenceTec demo sites

Nine sample websites with placeholder text and pictures, for client presentations.

| Route | Type | Sample |
|---|---|---|
| `/spa/consultant` | Single page | Personal brand (leadership coach) |
| `/spa/logistics` | Single page | Business (freight company, demo shipment tracker) |
| `/mpa/mp` | Multi-page | Member of Parliament (7 pages) |
| `/mpa/ps` | Multi-page | Principal Secretary (8 pages) |
| `/spa/restaurant` | Single page | Restaurant (menu tabs, booking form) |
| `/spa/estate` | Single page | Real estate (filters, detail pop-up, mortgage calculator) |
| `/mpa/clinic` | Multi-page | Clinic or hospital (7 pages) |
| `/mpa/school` | Multi-page | School (7 pages) |
| `/mpa/ngo` | Multi-page | Foundation or NGO (12 pages: Home, About, Programmes, Impact, Stories with article pages, Get involved, Team, Gallery, Events, FAQ, Contact) |

`/` is a start page linking to all nine. A floating "All demos" button returns to it.

## Run
```
npm install
npm run dev
```

## Deploy (Cloudflare Workers)
```
npm run build
npx wrangler deploy
```

## Editing the sample content
- MP and PS text: `src/data/mp.js`, `src/data/ps.js`
- Foundation text: `src/ngo/data.js` (styles in `src/styles/ngo.css`, scoped under `.ngo`)
- Clinic and school text: `src/data/clinic.js`, `src/data/school.js` (shared layout `src/mini/MiniSite.jsx`, styles `src/styles/mini.css`)
- Single-page text: `src/spa/Consultant.jsx`, `src/spa/Logistics.jsx`, `src/spa/Restaurant.jsx`, `src/spa/RealEstate.jsx`
- Placeholder pictures are drawn in code (`src/shared/Ph.jsx`). Replace any `<Ph />` with an `<img>` to use a real photo.
- Forms are demos: nothing is sent.

Built by SpenceTec and Logistics Limited. All names and figures are fictional.
