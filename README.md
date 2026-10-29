# SpenceTec demo sites

Four sample websites with placeholder text and pictures, for client presentations.

| Route | Type | Sample |
|---|---|---|
| `/spa/consultant` | Single page | Personal brand (leadership coach) |
| `/spa/logistics` | Single page | Business (freight company, demo shipment tracker) |
| `/mpa/mp` | Multi-page | Member of Parliament (7 pages) |
| `/mpa/ps` | Multi-page | Principal Secretary (8 pages) |

`/` is a start page linking to all four. A floating "All demos" button returns to it.

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
- Single-page text: `src/spa/Consultant.jsx`, `src/spa/Logistics.jsx`
- Placeholder pictures are drawn in code (`src/shared/Ph.jsx`). Replace any `<Ph />` with an `<img>` to use a real photo.
- Forms are demos: nothing is sent.

Built by SpenceTec and Logistics Limited. All names and figures are fictional.
