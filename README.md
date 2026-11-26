# Dristy Eye Hospital – Website

React + Vite + Tailwind site for Dristy Eye Hospital, Chouparan (a unit of Afroj Charitable Trust).

## Run locally

```bash
npm install
cp .env.example .env   # then fill in the Contentful values
npm run dev
```

- **Blog** content comes from Contentful and needs `VITE_space` and `VITE_AccessToken` in `.env`
  (same values as in the hosting provider's environment variables). Without them the Blog page shows
  "Blogs could not be loaded right now." – the rest of the site works normally.
- **Doctor photos** live in `public/doctors/` (640×800 JPG, one shared light-blue background, same head size
  and position for every doctor). The original photos and transparent cut-outs are kept in
  `src/assets/doctors/original/` so a new background can be applied later. When adding a doctor, add the
  entry to both `src/doctorData.json` and `src/doctorData.hi.json` with `"image": "/doctors/<name>.jpg"`.
- **Gallery photos** are still hosted on `i.ibb.co`. Some office/corporate networks block that host, so the
  gallery may not load there; moving those images into `public/` removes the dependency.
- If `npm install` fails with a 403 from a mirror, use the public registry:
  `npm install --registry=https://registry.npmjs.org/`

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – production build to `dist/`
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint
