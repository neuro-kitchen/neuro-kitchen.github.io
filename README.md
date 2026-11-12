# neuro-kitchen.github.io

The website for [neuro-kitchen](https://github.com/neuro-kitchen), built with [Astro](https://astro.build)
and deployed to GitHub Pages at **https://neuro-kitchen.github.io**.

## Edit the site

| To change | Edit |
|---|---|
| The tools in "The toolkit" (description, highlights, install command) | `src/data/tools.ts` |
| "One frame, many tools" (what the apps share, released or in progress) | `src/components/Platform.astro` |
| Sponsor, contributing and footer links | `src/data/site.ts` |
| Hero, principles and support text | `src/components/` |
| Colors and fonts | `src/styles/global.css` |

To add a tool, add an entry to `src/data/tools.ts`. Leave out `repo` while it's private and the card shows "Coming soon". Every tool with a `repo` also has its releases on the Changelog page.

When a feature in "One frame, many tools" ships, change its `status` to `Released`.

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
