"use client";

import { useState } from "react";
import type { ReviewFull } from "@/lib/reviews-data";
import AllReviewsCard from "@/components/reviews/AllReviewsCard";
import ReviewStars from "@/components/reviews/ReviewStars";

interface ReviewsSectionProps {
  reviews: ReviewFull[];
  averageRating: number;
  reviewCount: number;
  productName: string;
  brandName: string;
}

/** WeRent Figma — sans-serif, #4F6D4F, summary + cards + Browse All Reviews */
export default function ReviewsSection({
  reviews,
  averageRating,
  reviewCount,
  productName,
  brandName,
}: ReviewsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  /** First screen: one card like the capture; “Browse all” reveals the rest */
  const initialVisible = 1;
  const displayed = showAll ? reviews : reviews.slice(0, initialVisible);
  const hasMore = reviews.length > initialVisible;

  return (
    <section
      id="product-reviews"
      aria-labelledby="pdp-reviews-heading"
      className="rounded-2xl px-4 py-8 sm:px-6 sm:py-10"
      style={{
        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
        background: "var(--werent-figma-page)",
      }}
    >
      <h2
        id="pdp-reviews-heading"
        className="mb-6 text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2rem]"
        style={{ color: "var(--werent-figma-text)" }}
      >
        Reviews
      </h2>

      {/* Rating row — angka + bintang hijau (spt capture) */}
      <div className="mb-3 flex flex-wrap items-center gap-3 sm:gap-4">
        <span
          className="text-[2.75rem] font-semibold leading-none tabular-nums sm:text-[3rem]"
          style={{ color: "var(--werent-figma-text)" }}
        >
          {averageRating.toFixed(1)}
        </span>
        <ReviewStars rating={averageRating} size={20} variant="figma" />
      </div>

      <p className="mb-8 max-w-xl text-[14px] leading-relaxed sm:text-[15px]" style={{ color: "var(--werent-figma-muted)" }}>
        {reviewCount} Reviews for {productName} by {brandName}
      </p>

      <div className="flex flex-col gap-6">
        {displayed.map((review) => (
          <AllReviewsCard key={review.id} review={review} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="rounded-full px-10 py-3.5 text-[13px] font-semibold tracking-wide text-white transition-colors sm:text-sm"
            style={{
              background: "var(--werent-figma-green)",
              boxShadow: "0 2px 12px rgba(79, 109, 79, 0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--werent-figma-green-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--werent-figma-green)";
            }}
          >
            {showAll ? "Show less" : "Browse All Reviews"}
          </button>
        </div>
      )}
    </section>
  );
}
