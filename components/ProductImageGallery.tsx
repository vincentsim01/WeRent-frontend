"use client";

import { useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="relative w-full bg-[#1a1714]" style={{ aspectRatio: "3/3" }}>
      {/* Placeholder dress illustration */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 240 380"
          width="220"
          height="340"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={`Product image of ${productName}`}
        >
          {/* Head */}
          <ellipse cx="120" cy="48" rx="28" ry="32" fill="#3a3630" />
          {/* Body */}
          <path
            d="M68,88 Q88,78 104,84 L110,300 Q120,308 130,300 L136,84 Q152,78 172,88 L185,220 Q178,320 120,325 Q62,320 55,220 Z"
            fill="#2a2620"
          />
          {/* Neckline embellishment */}
          <path
            d="M104,84 Q120,94 136,84 L138,100 Q120,112 102,100 Z"
            fill="#1e1c18"
          />
          {/* Gold embellishment dots */}
          {[
            [115, 92], [120, 88], [125, 92],
            [112, 98], [120, 96], [128, 98],
            [108, 104], [116, 102], [124, 102], [132, 104],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="1.5" fill="#C9A84C" opacity="0.9" />
          ))}
          {/* Side seam detail */}
          <line x1="120" y1="84" x2="120" y2="325" stroke="#333" strokeWidth="1" opacity="0.4" />
          {/* Sleeves */}
          <path d="M68,88 L56,152 Q60,158 68,154 L74,104" fill="#252018" />
          <path d="M172,88 L184,152 Q180,158 172,154 L166,104" fill="#252018" />
          {/* Hem embellishment line */}
          <path
            d="M66,290 Q120,300 174,290"
            stroke="#C9A84C"
            strokeWidth="0.8"
            fill="none"
            opacity="0.6"
          />
          {/* Heels */}
          <path d="M100,318 Q112,325 114,330 L107,332 Q104,332 100,326 Z" fill="#1a1714" />
          <path d="M140,318 Q128,325 126,330 L133,332 Q136,332 140,326 Z" fill="#1a1714" />
          {/* Heel stiletto */}
          <line x1="113" y1="330" x2="113" y2="342" stroke="#1a1714" strokeWidth="2" />
          <line x1="127" y1="330" x2="127" y2="342" stroke="#1a1714" strokeWidth="2" />
        </svg>
      </div>

      {/* Source caption */}
      <div className="absolute bottom-10 right-3 text-xs text-white/50 italic font-mono" style={{ fontSize: 11 }}>
        source: Amina Moroccan Abaya
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
