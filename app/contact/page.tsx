import type { Metadata } from "next";
import { PageIntro } from "../components/SiteChrome";
import { contactLinks } from "../data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Example enquiry routes for Paul Signac exhibitions, licensing and research.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        index="04"
        eyebrow="Contact the archive"
        title="Ideas travel, too."
        copy="This reusable demonstration page provides clear routes for curatorial, publishing and educational enquiries."
      />

      <section className="contact-list section-shell">
        {contactLinks.map((link, index) => (
          <a href={link.href} key={link.label}>
            <span className="contact-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="contact-copy">
              <strong>{link.label}</strong>
              <span>{link.description}</span>
            </span>
            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </section>

      <section className="contact-disclaimer section-shell">
        <p className="eyebrow">Demonstration template</p>
        <p>
          Paul Signac died in 1935. These example addresses illustrate how a
          living artist, studio or estate could organise enquiries; they do not
          contact a real archive.
        </p>
      </section>

      <section className="contact-art">
        <img
          src="/artworks/avignon-evening.jpg"
          alt="Detail of the cobalt river and coral Papal Palace at Avignon."
          loading="lazy"
        />
        <div className="contact-art-caption">
          <span>Avignon · evening light</span>
          <span>1909</span>
        </div>
      </section>
    </>
  );
}
