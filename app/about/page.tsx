import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/SiteChrome";
import { artist } from "../data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Paul Signac’s life, beliefs and contribution to Neo-Impressionism.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        index="01"
        eyebrow="About the artist"
        title="A modern life built in colour."
        copy="Self-taught, independent and endlessly curious, Signac joined scientific colour theory to the freedom of the open water."
      />

      <section className="catalogue-layout section-shell">
        <figure className="catalogue-portrait">
          <img
            src="/artworks/felix-feneon.jpg"
            alt="Portrait of Félix Fénéon by Paul Signac, 1890."
          />
          <figcaption>
            Portrait of Félix Fénéon, 1890 · MoMA, New York
          </figcaption>
        </figure>
        <div className="catalogue-copy">
          <p className="dropcap">{artist.biography[0]}</p>
          {artist.biography.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="fact-list" aria-label="Paul Signac facts">
          {artist.facts.map((fact) => (
            <div key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </aside>
      </section>

      <section className="method-section section-shell">
        <div className="method-title">
          <p className="eyebrow">The method</p>
          <h2>Separate the colour. Complete the light.</h2>
        </div>
        <div className="method-grid">
          <article>
            <span className="method-swatch swatch-blue" aria-hidden="true" />
            <h3>Division</h3>
            <p>
              Pure colours are placed side by side rather than mixed on the
              palette, preserving their intensity.
            </p>
          </article>
          <article>
            <span className="method-swatch swatch-coral" aria-hidden="true" />
            <h3>Contrast</h3>
            <p>
              Complementary hues—blue and orange, violet and yellow—activate
              one another across the surface.
            </p>
          </article>
          <article>
            <span className="method-swatch swatch-mauve" aria-hidden="true" />
            <h3>Rhythm</h3>
            <p>
              Dots become dashes and mosaic-like blocks, giving water and sky a
              measured visual tempo.
            </p>
          </article>
        </div>
      </section>

      <section className="chapter-link">
        <span>Next chapter</span>
        <Link href="/journey">
          Follow the journey <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
