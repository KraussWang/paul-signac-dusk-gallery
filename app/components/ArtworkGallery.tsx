"use client";

import { useEffect, useRef, useState } from "react";
import type { Artwork } from "../data";

const filters = [
  "All works",
  "Divisionist origins",
  "Mediterranean light",
  "Mosaic ports",
] as const;

export function ArtworkGallery({ artworks }: { artworks: Artwork[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All works");
  const [selected, setSelected] = useState<Artwork | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const visible =
    filter === "All works"
      ? artworks
      : artworks.filter((artwork) => artwork.phase === filter);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected) {
      if (!dialog.open) {
        dialog.showModal();
        closeRef.current?.focus();
      }
      const closeOnEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          event.preventDefault();
          setSelected(null);
        }
      };
      document.addEventListener("keydown", closeOnEscape);
      return () => document.removeEventListener("keydown", closeOnEscape);
    }
    if (dialog.open) {
      dialog.close();
      triggerRef.current?.focus();
    }
  }, [selected]);

  function openArtwork(artwork: Artwork, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setSelected(artwork);
  }

  return (
    <>
      <div className="filter-bar" aria-label="Filter artworks">
        {filters.map((item) => (
          <button
            className={filter === item ? "active" : ""}
            key={item}
            onClick={() => setFilter(item)}
            type="button"
            aria-pressed={filter === item}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="works-grid">
        {visible.map((artwork, index) => (
          <article className="artwork-card" key={artwork.id}>
            <button
              className="artwork-open"
              type="button"
              onClick={(event) => openArtwork(artwork, event.currentTarget)}
              aria-label={`View details for ${artwork.title}`}
            >
              <span className="artwork-image-wrap">
                <img
                  src={artwork.image}
                  alt={artwork.alt}
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </span>
              <span className="artwork-meta">
                <span>
                  <span className="artwork-year">{artwork.year}</span>
                  <strong>{artwork.title}</strong>
                </span>
                <span className="open-mark" aria-hidden="true">
                  ↗
                </span>
              </span>
            </button>
          </article>
        ))}
      </div>

      <dialog
        className="artwork-dialog"
        ref={dialogRef}
        onCancel={(event) => {
          event.preventDefault();
          setSelected(null);
        }}
        onClose={() => {
          if (selected) setSelected(null);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}
      >
        {selected && (
          <div className="dialog-panel">
            <button
              className="dialog-close"
              ref={closeRef}
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close artwork details"
            >
              Close ×
            </button>
            <div className="dialog-image">
              <img src={selected.image} alt={selected.alt} />
            </div>
            <div className="dialog-copy">
              <p className="eyebrow">
                {selected.year} · {selected.phase}
              </p>
              <h2>{selected.title}</h2>
              <p className="french-title">{selected.frenchTitle}</p>
              <p>{selected.description}</p>
              <dl>
                <div>
                  <dt>Medium</dt>
                  <dd>{selected.medium}</dd>
                </div>
                <div>
                  <dt>Dimensions</dt>
                  <dd>{selected.dimensions}</dd>
                </div>
                <div>
                  <dt>Collection</dt>
                  <dd>{selected.collection}</dd>
                </div>
              </dl>
              <a
                className="text-link"
                href={selected.source}
                target="_blank"
                rel="noreferrer"
              >
                Museum record ↗
              </a>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
