"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(248,245,240,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "0.5px solid var(--border)" : "0.5px solid transparent",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between px-5"
        style={{ maxWidth: 480, height: 52 }}
      >
        {/* Back */}
        <button
          className="flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase transition-opacity hover:opacity-60"
          style={{ color: "var(--warm-gray)" }}
          onClick={() => history.back()}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>

        {/* Logo */}
        <span
          className="text-sm tracking-[0.18em] uppercase"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, color: "var(--ink)" }}
        >
          <img src='/logo.png' alt='WeRent Logo' style={{ height: 30 }} />
        </span>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Light/Dark Mode Toggle */}
          <button
            className="transition-transform active:scale-90"
            aria-label="Toggle light/dark mode"
          > 
              <svg className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 21h6v-1H9v1zm3-20C8.1 1 5 4.1 5 8c0 2.5 1.2 4.7 3 6.1V17c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-2.9c1.8-1.4 3-3.6 3-6.1 0-3.9-3.1-7-7-7zm2 12.5V16h-4v-2.5C8.9 11.9 8 10.1 8 8c0-2.8 2.2-5 5-5s5 2.2 5 5c0 2.1-.9 3.9-3 5.5z"/>
              </svg>


          </button>
          {/* Wishlist */}
          <button
            onClick={() => setWishlist(!wishlist)}
            className="transition-transform active:scale-90"
            aria-label={wishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 15.5S2 11 2 5.5A3.5 3.5 0 0 1 9 4a3.5 3.5 0 0 1 7 1.5C16 11 9 15.5 9 15.5z"
                fill={wishlist ? "var(--gold)" : "none"}
                stroke={wishlist ? "var(--gold)" : "var(--warm-gray)"}
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Share */}
          <button
            className="transition-opacity hover:opacity-60"
            aria-label="Share product"
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: "Black Kaftan with Embellishment", url: window.location.href });
              }
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="12" cy="3" r="1.8" stroke="var(--warm-gray)" strokeWidth="1.2" />
              <circle cx="12" cy="13" r="1.8" stroke="var(--warm-gray)" strokeWidth="1.2" />
              <circle cx="3" cy="8" r="1.8" stroke="var(--warm-gray)" strokeWidth="1.2" />
              <path d="M10.3 4.1L4.6 7M10.3 11.9L4.6 9" stroke="var(--warm-gray)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
