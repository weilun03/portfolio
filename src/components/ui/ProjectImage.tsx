"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { StaticImageData } from "next/image";

export default function ProjectImage({
  src,
  alt,
}: {
  src: string | StaticImageData;
  alt: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const aspectRatio = typeof src === "object" ? src.width / src.height : 16 / 9;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`View full image: ${alt}`}
        className="relative mb-4 block aspect-video w-full cursor-zoom-in overflow-hidden rounded-md border border-border bg-background transition-colors hover:border-accent/40"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
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
              className="absolute right-6 top-6 font-mono text-sm text-muted transition-colors hover:text-foreground"
            >
              Close ✕
            </button>
            <div
              className="relative max-h-[85vh] w-full max-w-4xl"
              style={{ aspectRatio }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="90vw"
                className="rounded-md border border-border object-contain"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
