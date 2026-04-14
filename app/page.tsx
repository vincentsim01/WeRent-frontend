"use client";

import { useState } from "react";
import { product } from "@/lib/data";
import ProductImageGallery from "@/components/ProductImageGallery";
import StarRating from "@/components/StarRating";
import SizeSelector from "@/components/SizeSelector";
import SizeGuideTable from "@/components/SizeGuideTable";
import ReviewsSection from "@/components/ReviewsSection";
import AddToCartBar from "@/components/AddToCartBar";
import RentalInfoBanner from "@/components/RentalInfoBanner";
import RelatedProducts from "@/components/RelatedProducts";

export default function ProductPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    "New",
    "Signatures",
    "Tops",
    "Dresses",
    "Bottoms",
    "Curated For You",
    "Get Inspired",
  ];

  return (
    <main
      className="min-h-screen"
      style={{
        background: "var(--parchment)",
        fontFamily: "var(--font-cormorant)",
      }}
    >
      {/* Header */}
      <header className="wr-header sticky top-0 z-40">
        <div className="wr-header-inner mx-auto px-4 sm:px-5">
          <div className="wr-header-top h-12 sm:h-14 flex items-center justify-between">
            <button
              className="wr-icon-btn w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-60 sm:hidden"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navbar-list"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <>
                    <path
                      d="M4.2 4.2L13.8 13.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13.8 4.2L4.2 13.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </>
                ) : (
                  <>
                    <path
                      d="M3 5.5H15"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 9H15"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 12.5H15"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </>
                )}
              </svg>
            </button>

            <button
              className="wr-icon-btn w-9 h-9 items-center justify-center transition-opacity hover:opacity-60 hidden sm:flex"
              aria-label="Search"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="4.8"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <path
                  d="M11.6 11.6L15.2 15.2"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="wr-brand-wrap flex items-center justify-center px-3">
              <img
                src="/logoremove.png"
                alt="WeRent"
                className="wr-brand-logo w-auto object-contain"
              />
            </div>

            <div className="wr-header-actions flex items-center gap-2 sm:gap-3">
              <button
                className="wr-icon-btn w-9 h-9 items-center justify-center transition-opacity hover:opacity-60 hidden sm:flex"
                aria-label="Cart"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.3 3.5H4L5.3 9.8h6.1l1.2-4.7H4.8"
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="6.2" cy="12.5" r="0.9" fill="currentColor" />
                  <circle cx="11" cy="12.5" r="0.9" fill="currentColor" />
                </svg>
              </button>
              <button
                className="wr-icon-btn w-9 h-9 items-center justify-center transition-opacity hover:opacity-60 hidden sm:flex"
                aria-label="Wishlist"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 13.7S2.5 10.2 2.5 5.8A2.8 2.8 0 0 1 8 4.4a2.8 2.8 0 0 1 5.5 1.4C13.5 10.2 8 13.7 8 13.7z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button className="wr-signin-btn h-7 px-3 rounded-full text-[10px] sm:text-[11px] tracking-[0.16em] uppercase transition-colors">
                Sign In
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <nav id="mobile-navbar-list" className="wr-mobile-nav sm:hidden">
              <ul className="wr-mobile-nav-list">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      className="wr-mobile-nav-item"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <nav className="wr-nav h-10 hidden sm:block">
            <ul className="wr-nav-list h-full flex items-center justify-center gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
              {navItems.map((item) => (
                <li key={item}>
                  <button className="wr-nav-item text-[10px] sm:text-[11px] tracking-[0.14em] uppercase transition-opacity hover:opacity-60">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div className="mx-auto pb-32 w-[90%] md:w-[90%]">
        {/* Image Gallery */}
        <div className="animate-fade-in" style={{ marginTop: 16 }}>
          <ProductImageGallery
            images={product.images}
            productName={product.name}
          />
        </div>

        {/* Content */}
        <div className="px-5 pt-5">
          {/* Title + Rating */}
          <div className="animate-fade-up">
            <h1
              className="font-light leading-snug mb-3"
              style={{
                color: "var(--ink)",
                fontSize: 26,
                letterSpacing: "-0.01em",
              }}
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={product.averageRating} size={16} />
              <span
                className="text-sm font-mono"
                style={{ color: "var(--ink)", fontWeight: 500 }}
              >
                {product.averageRating.toFixed(1)}
              </span>
              <span
                className="text-xs font-mono tracking-widest uppercase"
                style={{ color: "var(--warm-gray)" }}
              >
                {product.reviewCount} reviews
              </span>
            </div>
          </div>

          {/* Size Selector */}
          <div className="animate-fade-up delay-100">
            <SizeSelector
              sizes={product.sizes.map((s) => s.size)}
              defaultSize={product.selectedSize}
            />
          </div>

          <div
            style={{
              height: "0.5px",
              background: "var(--border)",
              margin: "20px 0",
            }}
          />

          {/* Designer */}
          <div className="animate-fade-up delay-200">
            <div className="flex items-center justify-between mb-3">
              <p
                className="text-xs font-mono tracking-widest uppercase"
                style={{ color: "var(--warm-gray)" }}
              >
                Designer
              </p>
              <button
                className="text-xs font-mono tracking-widest uppercase underline underline-offset-2"
                style={{ color: "var(--warm-gray)", fontSize: 10 }}
              >
                View the Collection
              </button>
            </div>
            <div
              className="flex items-center justify-between p-4 rounded-lg"
              style={{
                border: "0.5px solid var(--border)",
                background: "#fdfaf6",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: 24,
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "var(--ink)",
                  }}
                >
                  {product.designer}
                </span>
                <p
                  className="text-xs font-mono mt-1 tracking-widest uppercase"
                  style={{ color: "var(--warm-gray)" }}
                >
                  Est. Jakarta 2019
                </p>
              </div>
              <div
                className="w-14 h-14 rounded-full overflow-hidden flex items-end justify-center"
                style={{ background: "#2a2620" }}
              >
                <svg
                  viewBox="0 0 56 56"
                  width="56"
                  height="56"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="56" height="56" fill="#2a2620" />
                  <ellipse cx="28" cy="20" rx="10" ry="11" fill="#4a4440" />
                  <path d="M8,58 Q10,38 28,35 Q46,38 48,58 Z" fill="#4a4440" />
                </svg>
              </div>
            </div>
          </div>

          <div
            style={{
              height: "0.5px",
              background: "var(--border)",
              margin: "20px 0",
            }}
          />

          {/* Product Details */}
          <div className="animate-fade-up delay-300">
            <p
              className="text-xs font-mono tracking-widest uppercase mb-4"
              style={{ color: "var(--warm-gray)" }}
            >
              Product Detail
            </p>
            <div>
              {[
                { label: "Fabric", value: product.fabric },
                { label: "Fit", value: product.fit },
                { label: "Care", value: "Dry Clean Only" },
                { label: "Origin", value: "Jakarta, Indonesia" },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center py-3"
                  style={{
                    borderBottom:
                      i < arr.length - 1 ? "0.5px solid var(--border)" : "none",
                  }}
                >
                  <span
                    className="text-xs font-mono tracking-widest uppercase"
                    style={{ color: "var(--warm-gray)" }}
                  >
                    {row.label}
                  </span>
                  <span
                    className="text-sm font-mono tracking-wide uppercase"
                    style={{ color: "var(--ink)" }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <SizeGuideTable
              sizes={product.sizes}
              selectedSize={product.selectedSize}
            />
          </div>

          <div
            style={{
              height: "0.5px",
              background: "var(--border)",
              margin: "24px 0",
            }}
          />

          {/* Reviews */}
          <div className="animate-fade-up delay-400">
            <ReviewsSection
              reviews={product.reviews}
              averageRating={product.averageRating}
              reviewCount={product.reviewCount}
            />
          </div>

          <div
            style={{
              height: "0.5px",
              background: "var(--border)",
              margin: "28px 0 24px",
            }}
          />
        </div>

        {/* Rental Info */}
        <div className="animate-fade-up delay-500">
          <RentalInfoBanner />
        </div>

        {/* Related Products */}
        <div className="animate-fade-up delay-500">
          <RelatedProducts />
        </div>
      </div>

      {/* Sticky Cart Bar */}
      <AddToCartBar
        price={product.rentPrice}
        currency={product.currency}
        days={product.rentDays}
        productName={product.name}
      />
    </main>
  );
}
