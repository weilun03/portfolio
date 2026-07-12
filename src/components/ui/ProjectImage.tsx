"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type ImageLike = string | StaticImageData;

export default function ProjectImage({
  src,
  alt,
  thumbnail,
}: {
  src: ImageLike | ImageLike[];
  alt: string;
  // Shown in the card in place of the screenshot — clicking it still opens
  // the real screenshot(s) below via `src`.
  thumbnail?: ReactNode;
}) {
  const images = Array.isArray(src) ? src : [src];
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const showPrev = () => setIndex((current) => (current - 1 + images.length) % images.length);
  const showNext = () => setIndex((current) => (current + 1) % images.length);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const current = images[index];
  const aspectRatio = typeof current === "object" ? current.width / current.height : 16 / 9;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIndex(0);
          setIsOpen(true);
        }}
        aria-label={`View full image: ${alt}`}
        className="relative mb-4 block aspect-video w-full cursor-zoom-in overflow-hidden rounded-md border border-border bg-background transition-colors hover:border-accent/40"
      >
        {thumbnail ?? (
          <Image
            src={images[0]}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover"
          />
        )}
      </button>

      {isOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-6 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="absolute right-6 top-6 cursor-pointer font-mono text-sm text-muted transition-colors hover:text-foreground"
            >
              Close ✕
            </button>

            {images.length > 1 && (
              <span className="absolute left-6 top-6 font-mono text-sm text-muted">
                {index + 1} / {images.length}
              </span>
            )}

            {images.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous image"
                className="absolute left-6 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                ←
              </button>
            )}

            <div
              className="relative max-h-[85vh] w-full max-w-4xl"
              style={{ aspectRatio }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={current}
                alt={`${alt}${images.length > 1 ? ` (${index + 1} of ${images.length})` : ""}`}
                fill
                sizes="90vw"
                className="rounded-md border border-border object-contain"
              />
            </div>

            {images.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
                className="absolute right-6 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                →
              </button>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
