"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  visible: boolean;
  onHide: () => void;
}

export default function Toast({ message, visible, onHide }: ToastProps) {
  useEffect(() => {
    if (visible) {
      const t = setTimeout(onHide, 2200);
      return () => clearTimeout(t);
    }
  }, [visible, onHide]);

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
      style={{
        bottom: visible ? 96 : 72,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        maxWidth: 300,
        width: "calc(100% - 40px)",
      }}
    >
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-lg"
        style={{
          background: "var(--ink)",
          color: "#f8f5f0",
          boxShadow: "0 4px 24px rgba(26,23,20,0.18)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
          <circle cx="8" cy="8" r="7" stroke="var(--gold)" strokeWidth="1.2" />
          <path d="M5 8l2 2 4-4" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="text-xs font-mono tracking-wide" style={{ color: "#f8f5f0" }}>
          {message}
        </p>
      </div>
    </div>
  );
}
