"use client";

import { useState } from "react";

interface SizeSelectorProps {
  sizes: string[];
  defaultSize: string;
}

export default function SizeSelector({ sizes, defaultSize }: SizeSelectorProps) {
  const [selected, setSelected] = useState(defaultSize);

  return (
    <div
      className="flex items-center justify-between py-3"
      style={{ borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)" }}
    >
      <div className="flex items-center gap-2">
        <span
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: "var(--warm-gray)" }}
        >
          Size
        </span>
        <div className="flex gap-1.5 ml-2">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSelected(s)}
              className="w-8 h-8 text-xs font-mono rounded transition-all duration-200"
              style={{
                border: s === selected ? "1px solid var(--gold)" : "0.5px solid var(--border)",
                background: s === selected ? "rgba(201,168,76,0.08)" : "transparent",
                color: s === selected ? "var(--gold)" : "var(--warm-gray)",
                fontWeight: s === selected ? 500 : 400,
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <button
        className="text-xs font-mono tracking-widest uppercase underline underline-offset-2"
        style={{ color: "var(--warm-gray)", fontSize: 10 }}
      >
        Size Guide
      </button>
    </div>
  );
}
