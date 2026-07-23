import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/SiteChrome";
import { timeline } from "../data";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "A chronological journey through Paul Signac’s life and travels.",
};

export default function JourneyPage() {
  return (
    <>
      <PageIntro
        index="02"
        eyebrow="Journey · 1863—1935"
        title="A compass set toward light."
        copy="Signac’s story moves through friendships, independent exhibitions and a lifelong passage between the river and the sea."
      />

      <section className="timeline section-shell" aria-label="Life timeline">
        {timeline.map((entry, index) => (
          <article className="timeline-entry" key={`${entry.year}-${entry.title}`}>
            <div className="timeline-year">{entry.year}</div>
            <div className="timeline-marker" aria-hidden="true">
              <span />
            </div>
            <div className="timeline-copy">
              <p className="eyebrow">
                {entry.place} · Chapter {String(index + 1).padStart(2, "0")}
              </p>
              <h2>{entry.title}</h2>
              <p>{entry.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="journey-quote">
        <img
          src="/artworks/port-saint-tropez.jpg"
          alt="The luminous harbour and sails of Saint-Tropez."
          loading="lazy"
        />
        <blockquote>
          “The golden age has not passed;
          <br />
          it is still to come.”
          <cite>— subtitle to In the Time of Harmony</cite>
        </blockquote>
      </section>

      <section className="chapter-link">
        <span>Next chapter</span>
        <Link href="/works">
          Enter the gallery <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
