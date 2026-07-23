import type { Metadata } from "next";
import { ArtworkGallery } from "../components/ArtworkGallery";
import { PageIntro } from "../components/SiteChrome";
import { artworks } from "../data";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Selected paintings by Paul Signac, from early Divisionism to mosaic-like port scenes.",
};

export default function WorksPage() {
  return (
    <>
      <PageIntro
        index="03"
        eyebrow="Selected works · 1889—1909"
        title="The eye completes the painting."
        copy="Five works trace the movement from disciplined Divisionist points to broad, mosaic-like strokes of Mediterranean colour."
      />
      <section className="gallery-section section-shell">
        <ArtworkGallery artworks={artworks} />
      </section>
      <section className="gallery-note">
        <p className="eyebrow">A note on looking</p>
        <p>
          Step back and the separated marks dissolve into atmosphere. Move
          closer and the scene returns to colour, touch and rhythm.
        </p>
      </section>
    </>
  );
}
