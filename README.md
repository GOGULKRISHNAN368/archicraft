# Archicraft React

React/Vite conversion of the Archicraft site. The existing exported assets and page content are reused through a single React entry with client-side routes for the English and Italian experiences.

## Run locally

```powershell
npm install
npm run dev
```

Open the URL printed by Vite, usually `http://127.0.0.1:5173/`.

## Build for production

```powershell
npm run build
npm run preview
```

The build copies the exported image assets into `dist/` and serves all site routes from the React entry point.
