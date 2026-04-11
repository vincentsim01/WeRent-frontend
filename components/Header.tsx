"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(242,250,246,0.95)" : "rgba(242,250,246,0.75)",
        backdropFilter: "blur(20px) saturate(1.8)",
        WebkitBackdropFilter: "blur(20px) saturate(1.8)",
        borderBottom: scrolled
          ? "1px solid rgba(27,122,90,0.18)"
          : "1px solid rgba(26,22,16,0.06)",
        boxShadow: scrolled ? "0 2px 40px rgba(26,22,16,0.08)" : "none",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between px-6 lg:px-8"
        style={{ maxWidth: 1200, height: 64 }}
      >
        {/* Back */}
        <button
          className="flex items-center gap-2 group transition-all duration-200"
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
          onClick={() => history.back()}
        >
          <span
            className="flex items-center justify-center rounded-full transition-all duration-300 group-hover:border-[var(--gold-border)] group-hover:bg-[var(--gold-subtle)]"
            style={{
              width: 30,
              height: 30,
              border: "1px solid var(--border-strong)",
            }}
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M8 2L3 6l5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="hidden sm:inline group-hover:text-[var(--gold)] transition-colors">Back</span>
        </button>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            src="/logo.png"
            alt="WeRent Logo"
            style={{ height: 32, objectFit: "contain" }}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setWishlist(!wishlist)}
            className="flex items-center justify-center rounded-full transition-all duration-300 active:scale-90"
            style={{
              width: 36,
              height: 36,
              border: wishlist ? "1px solid var(--gold-border)" : "1px solid var(--border-strong)",
              background: wishlist ? "var(--gold-subtle)" : "transparent",
            }}
            aria-label={wishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 15.5S2 11 2 5.5A3.5 3.5 0 0 1 9 4a3.5 3.5 0 0 1 7 1.5C16 11 9 15.5 9 15.5z"
                fill={wishlist ? "var(--gold)" : "none"}
                stroke={wishlist ? "var(--gold)" : "var(--text-muted)"}
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className="flex items-center justify-center rounded-full transition-all duration-300 hover:border-[var(--gold-border)] hover:bg-[var(--gold-subtle)]"
            style={{
              width: 36,
              height: 36,
              border: "1px solid var(--border-strong)",
            }}
            aria-label="Share product"
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: "WeRent", url: window.location.href });
              }
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="12" cy="3" r="1.8" stroke="var(--text-muted)" strokeWidth="1.2" />
              <circle cx="12" cy="13" r="1.8" stroke="var(--text-muted)" strokeWidth="1.2" />
              <circle cx="3" cy="8" r="1.8" stroke="var(--text-muted)" strokeWidth="1.2" />
              <path d="M10.3 4.1L4.6 7M10.3 11.9L4.6 9" stroke="var(--text-muted)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Cart icon (desktop) */}
          <button
            className="hidden sm:flex items-center gap-2 rounded-full px-4 btn-primary"
            style={{ height: 36, fontSize: 10 }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M2 2h1.5l1 6h7l1-5H5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="7" cy="13" r="1.2" fill="currentColor" />
              <circle cx="11.5" cy="13" r="1.2" fill="currentColor" />
            </svg>
            My Cart
          </button>
        </div>
      </div>
    </header>
  );
}
