import type { Metadata } from "next";
import Link from "next/link";
import { artist, artworks, timeline } from "./data";

export const metadata: Metadata = {
  title: "Paul Signac — Light, Divided",
  description:
    "Enter the luminous world of Paul Signac: painter, sailor and theorist of Neo-Impressionism.",
};

export default function Home() {
  const featured = artworks.filter((artwork) => artwork.featured).slice(0, 3);

  return (
    <>
      <section className="hero">
        <img
          className="hero-image"
          src="/artworks/avignon-evening.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className="hero-wash" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Paris · Saint-Tropez · 1863—1935</p>
          <h1>
            Paul
            <br />
            <em>Signac</em>
          </h1>
          <p className="hero-statement">{artist.statement}</p>
        </div>
        <div className="hero-caption">
          <span>Avignon. Soir</span>
          <span>1909</span>
        </div>
        <a className="hero-scroll" href="#introduction">
          Discover <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="home-intro section-shell" id="introduction">
        <div className="section-index">01</div>
        <div className="intro-title">
          <p className="eyebrow">Painter · Sailor · Theorist</p>
          <h2>An architecture of colour.</h2>
        </div>
        <div className="intro-copy">
          <p>{artist.shortBio}</p>
          <Link className="text-link" href="/about">
            Read his story →
          </Link>
        </div>
      </section>

      <section className="home-journey section-shell">
        <div className="section-index light">02</div>
        <div className="journey-heading">
          <p className="eyebrow">A life along the water</p>
          <h2>From the Seine to the Mediterranean.</h2>
          <Link className="text-link light-link" href="/journey">
            Explore the full journey →
          </Link>
        </div>
        <div className="journey-preview">
          {timeline.slice(0, 4).map((entry) => (
            <article key={entry.year}>
              <span>{entry.year}</span>
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="featured section-shell">
        <div className="section-index">03</div>
        <div className="featured-heading">
          <div>
            <p className="eyebrow">Selected works</p>
            <h2>Light assembled, touch by touch.</h2>
          </div>
          <Link className="text-link" href="/works">
            View all works →
          </Link>
        </div>
        <div className="featured-grid">
          {featured.map((artwork, index) => (
            <Link
              className={`featured-card featured-card-${index + 1}`}
              href="/works"
              key={artwork.id}
            >
              <span className="featured-image">
                <img src={artwork.image} alt={artwork.alt} loading="lazy" />
              </span>
              <span className="featured-meta">
                <span>{artwork.year}</span>
                <strong>{artwork.title}</strong>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-contact">
        <div className="contact-orbit" aria-hidden="true" />
        <p className="eyebrow">Exhibitions · Licensing · Research</p>
        <h2>Continue the conversation.</h2>
        <p>
          A reusable enquiry space for curators, publishers and creative
          collaborators.
        </p>
        <Link className="button-link" href="/contact">
          Contact the archive <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
