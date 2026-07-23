# Paul Signac — Light, Divided

An English, reusable artist-portfolio website built around the colour, atmosphere, and divisionist brushwork of Paul Signac. The first edition presents Signac's life, artistic journey, and selected works through a five-page editorial gallery.

**Live site:** [paul-signac-dusk-gallery.zhlei86.chatgpt.site](https://paul-signac-dusk-gallery.zhlei86.chatgpt.site)

![Paul Signac — Light, Divided social preview](public/og.png)

## What is included

- Five responsive routes: Home, About, Journey, Works, and Contact.
- A central, typed content model for the artist profile, chronology, artwork records, and contact links.
- A keyboard-accessible artwork viewer with filtering, focus management, and Escape-to-close behavior.
- A visual system drawn from *Avignon. Soir (le chateau des Papes)* (1909): river blue, dusk violet, coral architecture, and warm evening light.
- Subtle CSS colour fragments and gradients that evoke Divisionism without compromising reading comfort.
- Reduced-motion support and mobile-friendly navigation.
- Local artwork assets, a custom favicon, and a matching social-sharing card.

## Technology

- React 19 + TypeScript
- Vinext / Vite
- Plain CSS with responsive layouts and accessible interaction patterns
- pnpm

## Run locally

Use Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Create a production build:

```bash
pnpm build
```

Run the production render checks:

```bash
pnpm test
```

## Project structure

```text
app/
  about/             About page
  contact/           Contact page
  journey/           Timeline page
  works/             Artwork gallery page
  components/        Shared site chrome and accessible gallery dialog
  data.ts            Reusable artist, timeline, artwork, and contact data
  globals.css        Visual system and responsive styles
public/
  artworks/          Five curated local artwork images
  og.png             Social-sharing image
tests/
  rendered-html.test.mjs
```

## Reuse this as an artist-site template

The page structure and presentation are separated from the content. To adapt the site for another artist or creator:

1. Replace the records in `app/data.ts`.
2. Replace the images in `public/artworks/` and update their image paths and alt text.
3. Adjust the colour tokens and typography in `app/globals.css`.
4. Update the metadata and social image in `app/layout.tsx` and `public/og.png`.

## Research and image credits

The companion biography and source notes are maintained in the parent project folder as `Paul Signac Biography.md`. The site research draws primarily on museum collection and artist records, including the Musee d'Orsay, The Metropolitan Museum of Art, the National Gallery, MoMA, Kunstmuseum Den Haag, the National Museum of Western Art, and the Toledo Museum of Art. Individual collection links are included with each artwork in `app/data.ts`.

The included artwork files were supplied for this project. Before republishing, redistributing, or replacing them, confirm the applicable artwork, museum-image, and rights-holder permissions.

## License

No open-source license has been added yet. Obtain permission from the project owner before reusing the code or assets.
