# neuro-kitchen.github.io

The website for [neuro-kitchen](https://github.com/neuro-kitchen), built with [Astro](https://astro.build)
and deployed to GitHub Pages at **https://neuro-kitchen.github.io**.

## Edit the site

| To change | Edit |
|---|---|
| The tools in "The toolkit" | `src/data/tools.ts` |
| Sponsor, contributing and footer links | `src/data/site.ts` |
| Hero, principles and support text | `src/components/` |
| Colors and fonts | `src/styles/global.css` |

To add a tool, add an entry to `src/data/tools.ts`. Leave out `repo` while it's private and the card shows "Coming soon".

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy

Every push to `main` builds and deploys automatically through `.github/workflows/deploy.yml`.

One-time setup: in the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

## License

[Apache-2.0](LICENSE)
