"use client";

import Link from "next/link";
import { artist, navigation } from "../data";
import { useLanguage } from "./LanguageContext";

const navKeys = ["home", "about", "journey", "works", "contact"] as const;

export function Header() {
  const { t, toggle } = useLanguage();
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label={t("homeLabel")}>
        <span className="wordmark-dot" aria-hidden="true" />
        <span>{artist.name}</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item, index) => <Link key={item.href} href={item.href}>{t(navKeys[index])}</Link>)}
        <button className="language-toggle" type="button" onClick={toggle} aria-label={t("languageLabel")}>{t("language")}</button>
      </nav>
      <details className="mobile-nav">
        <summary aria-label={t("openNavigation")}>{t("menu")}</summary>
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => <Link key={item.href} href={item.href}>{t(navKeys[index])}</Link>)}
          <button className="language-toggle" type="button" onClick={toggle} aria-label={t("languageLabel")}>{t("language")}</button>
        </nav>
      </details>
    </header>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return <footer className="site-footer"><div><p className="eyebrow">Paul Signac · 1863—1935</p><p className="footer-title">{t("footerTitle")}</p></div><div className="footer-links" aria-label="Footer navigation">{navigation.slice(1).map((item, index) => <Link key={item.href} href={item.href}>{t(navKeys[index + 1])}</Link>)}</div><p className="footer-note">{t("footerNote")}</p></footer>;
}

export function PageIntro({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: string; copy: string }) {
  return <section className="page-intro"><div className="page-number" aria-hidden="true">{index}</div><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-lede">{copy}</p></div></section>;
}
