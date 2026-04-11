"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  visible: boolean;
  onHide: () => void;
}

export default function Toast({ message, visible, onHide }: ToastProps) {
  useEffect(() => {
    if (visible) {
      const t = setTimeout(onHide, 2500);
      return () => clearTimeout(t);
    }
  }, [visible, onHide]);

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500"
      style={{
        bottom: visible ? 90 : 68,
        opacity: visible ? 1 : 0,
        transform: `translateX(-50%) translateY(${visible ? 0 : 8}px)`,
        pointerEvents: visible ? "auto" : "none",
        maxWidth: 340,
        width: "calc(100% - 40px)",
      }}
    >
      <div
        className="flex items-center gap-3 px-5 py-4 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.98)",
          border: "1px solid var(--gold-border)",
          boxShadow: "0 8px 40px rgba(26,22,16,0.15)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-full"
          style={{
            width: 30,
            height: 30,
            background: "linear-gradient(135deg, var(--gold-pale), #f7fdfb)",
            border: "1px solid var(--gold-border)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7l2.5 2.5L11 4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="flex-1">
          <p style={{ fontFamily: "var(--font-montserrat)", fontSize: 12, fontWeight: 500, color: "var(--text-primary)" }}>
            {message}
          </p>
          <p style={{ fontFamily: "var(--font-montserrat)", fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>
            View your cart to complete
          </p>
        </div>

        <button
          onClick={onHide}
          className="transition-colors hover:text-[var(--gold)]"
          style={{ color: "var(--text-light)", flexShrink: 0 }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
