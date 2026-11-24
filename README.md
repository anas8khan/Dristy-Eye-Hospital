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
- **Doctor and gallery photos** are hosted on `i.ibb.co`. Some office/corporate networks block that host;
  in that case doctor cards show initials instead of photos. Moving these images into `public/` removes
  the dependency.
- If `npm install` fails with a 403 from a mirror, use the public registry:
  `npm install --registry=https://registry.npmjs.org/`

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – production build to `dist/`
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint
