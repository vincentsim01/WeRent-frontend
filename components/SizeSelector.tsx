"use client";

import { useState } from "react";

interface SizeSelectorProps {
  sizes: string[];
  defaultSize: string;
}

export default function SizeSelector({ sizes, defaultSize }: SizeSelectorProps) {
  const [selected, setSelected] = useState(defaultSize);

  return (
    <div className="py-5">
      <div className="flex items-center justify-between mb-4">
        <span className="section-label">Select Size</span>
        <button
          className="transition-all duration-200 hover:text-[var(--gold)]"
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: 9,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            borderBottom: "1px solid var(--border-strong)",
            paddingBottom: 1,
          }}
        >
          Size Guide
        </button>
      </div>
      <div className="flex gap-2 flex-wrap">
        {sizes.map((s) => (
          <button
            key={s}
            onClick={() => setSelected(s)}
            className="relative flex items-center justify-center rounded-lg transition-all duration-300 active:scale-95"
            style={{
              width: 46,
              height: 46,
              fontFamily: "var(--font-montserrat)",
              fontSize: 12,
              fontWeight: s === selected ? 600 : 400,
              border: s === selected ? "1.5px solid var(--gold)" : "1px solid var(--border-strong)",
              background: s === selected
                ? "linear-gradient(135deg, var(--gold-pale), #f7fdfb)"
                : "var(--white)",
              color: s === selected ? "var(--gold)" : "var(--text-secondary)",
              boxShadow: s === selected ? "0 4px 16px rgba(27,122,90,0.18)" : "var(--shadow-sm)",
            }}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
