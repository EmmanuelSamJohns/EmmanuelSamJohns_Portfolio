# Emmanuel Sam Johns — Portfolio

Personal portfolio site for Emmanuel Sam Johns, an aspiring environmental consultant. Built on
[Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) (Next.js + [Once UI](https://once-ui.com)).

Original design mockup and iteration history live in [`design/`](design/DESIGN_HANDOFF.md) — that
folder documents the Claude Design handoff this build was implemented from.

## Getting started

**1. Install dependencies**
```
npm install
```

**2. Run dev server**
```
npm run dev
```

**3. Edit content**
```
src/resources/content.tsx
```

**4. Edit site config (theme, colors, routes)**
```
src/resources/once-ui.config.ts
```

**5. Add / edit project case studies**
```
Add a new .mdx file to src/app/work/projects
```

Fonts (Newsreader, Source Sans 3, Geist Mono) are self-hosted under `src/fonts/` via
`next/font/local` so the build doesn't depend on reaching Google Fonts at build time.

## Pages

- `/` — hero, selected projects, contact
- `/about` — full experience, education, and skills (resume-style)
- `/work` — all project case studies
- Blog and gallery routes are disabled (`src/resources/once-ui.config.ts` → `routes`)

## Deployment (GitHub Pages)

The site is a static export (`output: "export"` in `next.config.mjs`) with no server-side
features, so it deploys as plain static files.

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages automatically on every push
to `main`. One-time setup after pushing this repo to GitHub:

1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab) — the site will be live at
   `https://<username>.github.io/<repo-name>/` a minute or two later.

If the repo is named `<username>.github.io` (a user/org page), the site is served at the domain
root instead of a `/repo-name/` subpath — `next.config.mjs` detects this automatically from
`GITHUB_REPOSITORY` and adjusts `basePath` accordingly, no manual config needed. A custom domain
(via a `CNAME` file / repo Pages settings) also serves from the root; set
`NEXT_PUBLIC_BASE_PATH=""` as a repo variable in that case to force an empty `basePath`.

To preview the static export locally:
```
npm run build
npm run preview
```

## License

This project is built on the Magic Portfolio template, distributed under CC BY-NC 4.0
(attribution required, non-commercial use only). See `LICENSE`.
