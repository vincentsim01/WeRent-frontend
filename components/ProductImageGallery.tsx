"use client";

import { useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      {/* Thumbnail column — desktop left, bottom on mobile */}
      <div className="order-2 lg:order-1 flex lg:flex-col gap-2 px-4 lg:px-0 lg:pl-0 overflow-x-auto lg:overflow-visible">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300"
            style={{
              width: 64,
              height: 80,
              border: i === active
                ? "2px solid var(--gold)"
                : "1.5px solid var(--border-soft)",
              opacity: i === active ? 1 : 0.55,
              transform: i === active ? "scale(1.04)" : "scale(1)",
              boxShadow: i === active ? "0 4px 16px rgba(27,122,90,0.2)" : "none",
            }}
          >
            <img src={src} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div
        className="order-1 lg:order-2 relative flex-1 rounded-2xl overflow-hidden"
        style={{
          background: "var(--ivory)",
          aspectRatio: "4/5",
          minHeight: 380,
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(255,255,255,0.5) 0%, transparent 70%)",
          }}
        />

        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${productName} — image ${i + 1}`}
            className="absolute inset-0 w-full h-full object-contain transition-all duration-700"
            style={{
              opacity: i === active ? 1 : 0,
              transform: i === active ? "scale(1)" : "scale(1.03)",
            }}
          />
        ))}

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActive((active - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
              style={{
                width: 38,
                height: 38,
                background: "rgba(255,255,255,0.9)",
                border: "1px solid var(--border-soft)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M8 2L3 6l5 4" stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => setActive((active + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
              style={{
                width: 38,
                height: 38,
                background: "rgba(255,255,255,0.9)",
                border: "1px solid var(--border-soft)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4 2l5 4-5 4" stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}

        {/* Counter badge */}
        <div
          className="absolute bottom-3 right-3 z-20 px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(8px)",
            border: "1px solid var(--border-soft)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: 10,
              color: "var(--text-secondary)",
            }}
          >
            {active + 1} / {images.length}
          </span>
        </div>

        {/* Dot nav */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-400"
              style={{
                width: i === active ? 20 : 6,
                height: 6,
                background: i === active ? "var(--gold)" : "rgba(26,22,16,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
