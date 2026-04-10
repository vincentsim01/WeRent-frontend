"use client";

import { useState } from "react";
import StarRating from "./StarRating";

interface RelatedProduct {
  id: string;
  name: string;
  designer: string;
  price: number;
  currency: string;
  days: number;
  rating: number;
  reviewCount: number;
  accentColor: string;
  bgColor: string;
}

const related: RelatedProduct[] = [
  {
    id: "rp1",
    name: "Ivory Pleated Abaya",
    designer: "n atelier",
    price: 250000,
    currency: "Rp",
    days: 4,
    rating: 4.5,
    reviewCount: 12,
    accentColor: "#d4c4a8",
    bgColor: "#2e2c28",
  },
  {
    id: "rp2",
    name: "Midnight Beaded Kaftan",
    designer: "n atelier",
    price: 380000,
    currency: "Rp",
    days: 4,
    rating: 4.8,
    reviewCount: 9,
    accentColor: "#7a8fa8",
    bgColor: "#1a2030",
  },
  {
    id: "rp3",
    name: "Dusty Rose Wrap Gown",
    designer: "n atelier",
    price: 290000,
    currency: "Rp",
    days: 4,
    rating: 4.2,
    reviewCount: 6,
    accentColor: "#c8a4a8",
    bgColor: "#2c2028",
  },
];

function ProductThumbnail({ color, accent }: { color: string; accent: string }) {
  return (
    <div
      className="w-full rounded-lg overflow-hidden flex items-center justify-center"
      style={{ aspectRatio: "2/3", background: color }}
    >
      <svg viewBox="0 0 80 120" width="64" height="96" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="16" rx="10" ry="11" fill={accent} opacity="0.5" />
        <path
          d="M22,28 Q30,24 36,27 L38,100 Q40,103 42,100 L44,27 Q50,24 58,28 L62,76 Q59,106 40,108 Q21,106 18,76 Z"
          fill={accent}
          opacity="0.35"
        />
        <path
          d="M36,27 Q40,30 44,27 L45,42 Q40,46 35,42 Z"
          fill={accent}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

export default function RelatedProducts() {
  const [saved, setSaved] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSaved((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="px-5 pb-4">
      <div className="flex items-center justify-between mb-4">
        <p
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: "var(--warm-gray)" }}
        >
          You May Also Like
        </p>
        <button
          className="text-xs font-mono tracking-widest uppercase underline underline-offset-2"
          style={{ color: "var(--warm-gray)", fontSize: 10 }}
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {related.map((item) => (
          <div key={item.id} className="relative">
            {/* Wishlist button */}
            <button
              onClick={() => toggle(item.id)}
              className="absolute top-2 right-2 z-10 w-6 h-6 flex items-center justify-center rounded-full transition-all"
              style={{ background: "rgba(26,23,20,0.5)" }}
              aria-label="Save to wishlist"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 12S1 8.5 1 4.5A2.5 2.5 0 0 1 7 3a2.5 2.5 0 0 1 6 1.5C13 8.5 7 12 7 12z"
                  fill={saved.has(item.id) ? "var(--gold)" : "none"}
                  stroke={saved.has(item.id) ? "var(--gold)" : "rgba(255,255,255,0.8)"}
                  strokeWidth="1.1"
                />
              </svg>
            </button>

            <ProductThumbnail color={item.bgColor} accent={item.accentColor} />

            <div className="mt-2">
              <p
                className="text-xs leading-tight mb-0.5"
                style={{ color: "var(--ink)", fontFamily: "var(--font-cormorant)", fontSize: 13, lineHeight: 1.3 }}
              >
                {item.name}
              </p>
              <div className="flex items-center gap-1 mb-1">
                <StarRating rating={item.rating} size={10} />
                <span className="text-xs font-mono" style={{ color: "var(--warm-gray)", fontSize: 10 }}>
                  {item.reviewCount}
                </span>
              </div>
              <p className="text-xs font-mono" style={{ color: "var(--gold)", fontSize: 11 }}>
                {item.currency} {new Intl.NumberFormat("id-ID").format(item.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
