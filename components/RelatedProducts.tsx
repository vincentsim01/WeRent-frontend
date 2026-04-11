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
    accentColor: "#c8b890",
    bgColor: "#f5f0e4",
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
    accentColor: "#8ca8c0",
    bgColor: "#eef2f8",
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
    accentColor: "#c8a0a8",
    bgColor: "#f5eef0",
  },
];

function ProductThumbnail({ color, accent }: { color: string; accent: string }) {
  return (
    <div
      className="w-full rounded-xl overflow-hidden flex items-center justify-center relative"
      style={{ aspectRatio: "2/3", background: color }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 20%, rgba(255,255,255,0.6) 0%, transparent 60%)`,
        }}
      />
      <svg viewBox="0 0 80 120" width="52" height="80" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="16" rx="10" ry="11" fill={accent} opacity="0.6" />
        <path
          d="M22,28 Q30,24 36,27 L38,100 Q40,103 42,100 L44,27 Q50,24 58,28 L62,76 Q59,106 40,108 Q21,106 18,76 Z"
          fill={accent}
          opacity="0.45"
        />
        <path d="M36,27 Q40,30 44,27 L45,42 Q40,46 35,42 Z" fill={accent} opacity="0.6" />
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
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="section-label">You May Also Like</span>
        <button
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: 9,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--gold)",
            borderBottom: "1px solid var(--gold-border)",
            paddingBottom: 1,
          }}
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {related.map((item) => (
          <div key={item.id} className="relative group cursor-pointer">
            <button
              onClick={() => toggle(item.id)}
              className="absolute top-2.5 right-2.5 z-10 flex items-center justify-center rounded-full transition-all duration-300 active:scale-90"
              style={{
                width: 28,
                height: 28,
                background: "rgba(255,255,255,0.92)",
                border: saved.has(item.id) ? "1px solid var(--gold-border)" : "1px solid var(--border-soft)",
                boxShadow: "var(--shadow-sm)",
              }}
              aria-label="Save to wishlist"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 12S1 8.5 1 4.5A2.5 2.5 0 0 1 7 3a2.5 2.5 0 0 1 6 1.5C13 8.5 7 12 7 12z"
                  fill={saved.has(item.id) ? "var(--gold)" : "none"}
                  stroke={saved.has(item.id) ? "var(--gold)" : "var(--text-muted)"}
                  strokeWidth="1.1"
                />
              </svg>
            </button>

            <div className="overflow-hidden rounded-xl transition-shadow duration-300 group-hover:shadow-[var(--shadow-lg)]">
              <div className="transition-transform duration-500 group-hover:scale-105">
                <ProductThumbnail color={item.bgColor} accent={item.accentColor} />
              </div>
            </div>

            <div className="mt-3">
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "var(--text-primary)",
                  lineHeight: 1.3,
                  marginBottom: 4,
                }}
              >
                {item.name}
              </p>
              <div className="flex items-center gap-1 mb-2">
                <StarRating rating={item.rating} size={10} />
                <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: 9, color: "var(--text-muted)" }}>
                  ({item.reviewCount})
                </span>
              </div>
              <p
                className="gold-shimmer"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {item.currency} {new Intl.NumberFormat("id-ID").format(item.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
