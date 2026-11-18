# SpenceTec demo sites

Fifteen sample websites with placeholder text and pictures, for client presentations.

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
| `/spa/creator` | Single page | Creator portfolio (feed, follower counts, social links in footer) |
| `/mpa/photographer` | Multi-page | Photographer portfolio (gallery, social links in footer) |
| `/mpa/developer` | Multi-page | Developer portfolio (projects, skills, social links in footer) |
| `/spa/dj` | Single page | DJ (animated equalizer, mix player, gigs, packages, booking form) |
| `/mpa/events` | Multi-page | Events company (6 pages) |
| `/mpa/resort` | Multi-page | Resort (rooms and rates, dining, experiences, gallery, booking) |
| `/mpa/ngo` | Multi-page | Foundation or NGO (12 pages: Home, About, Programmes, Impact, Stories with article pages, Get involved, Team, Gallery, Events, FAQ, Contact) |

`/` is a start page linking to all twelve. A floating "All demos" button returns to it.

## Sharing one demo on its own
Every demo has its own address, so any of them can be sent separately, for example `/spa/dj`, `/mpa/events` or `/mpa/resort`.
Add `?solo` to the address (or press "Copy share link" on the start page) and the "All demos" button is hidden for that visitor, so they cannot reach the other demos. The setting lasts for the browser tab. Open `/?all` to switch it off again.

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
- Portfolio text: `src/data/portfolio.js`; creator page `src/spa/Creator.jsx`
- Events and resort text: `src/data/events.js`, `src/data/resort.js` (shared layout `src/mini/MiniSite.jsx`); DJ page `src/spa/Dj.jsx`
- Single-page text: `src/spa/Consultant.jsx`, `src/spa/Logistics.jsx`, `src/spa/Restaurant.jsx`, `src/spa/RealEstate.jsx`
- Placeholder pictures are drawn in code (`src/shared/Ph.jsx`). Replace any `<Ph />` with an `<img>` to use a real photo.
- Forms are demos: nothing is sent.

Built by SpenceTec and Logistics Limited. All names and figures are fictional.
