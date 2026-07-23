import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { Footer, Header } from "./components/SiteChrome";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", base).toString();

  return {
    metadataBase: base,
    title: {
      default: "Paul Signac — Light, Divided",
      template: "%s · Paul Signac",
    },
    description:
      "The life, journeys and luminous Neo-Impressionist works of Paul Signac.",
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      type: "website",
      title: "Paul Signac — Light, Divided",
      description:
        "The life, journeys and luminous Neo-Impressionist works of Paul Signac.",
      images: [
        {
          url: socialImage,
          width: 1736,
          height: 905,
          alt: "Paul Signac — Light, Divided, against a luminous Avignon evening.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Paul Signac — Light, Divided",
      description:
        "The life, journeys and luminous Neo-Impressionist works of Paul Signac.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
