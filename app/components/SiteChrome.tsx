import Link from "next/link";
import { artist, navigation } from "../data";

export function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Paul Signac home">
        <span className="wordmark-dot" aria-hidden="true" />
        <span>{artist.name}</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <details className="mobile-nav">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">Paul Signac · 1863—1935</p>
        <p className="footer-title">Light, divided.</p>
      </div>
      <div className="footer-links" aria-label="Footer navigation">
        {navigation.slice(1).map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <p className="footer-note">
        An independent educational portrait built from museum research and
        supplied public-domain artwork files.
      </p>
    </footer>
  );
}

export function PageIntro({
  index,
  eyebrow,
  title,
  copy,
}: {
  index: string;
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="page-intro">
      <div className="page-number" aria-hidden="true">
        {index}
      </div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-lede">{copy}</p>
      </div>
    </section>
  );
}
