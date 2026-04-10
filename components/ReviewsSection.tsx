"use client";

import { useState } from "react";
import { Review } from "@/lib/data";
import ReviewCard from "./ReviewCard";
import StarRating from "./StarRating";

interface ReviewsSectionProps {
  reviews: Review[];
  averageRating: number;
  reviewCount: number;
}

export default function ReviewsSection({
  reviews,
  averageRating,
  reviewCount,
}: ReviewsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? reviews : reviews.slice(0, 2);

  return (
    <div className="mt-2">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <p
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: "var(--warm-gray)" }}
        >
          Reviews ({reviewCount})
        </p>
        <div className="flex items-center gap-2">
          <StarRating rating={averageRating} size={13} />
          <span className="text-sm font-mono" style={{ color: "var(--ink)", fontWeight: 500 }}>
            {averageRating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Rating breakdown */}
      <div className="mb-5 p-4 rounded-lg" style={{ background: "#fdfaf6", border: "0.5px solid var(--border)" }}>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <p className="text-4xl font-light" style={{ color: "var(--gold)", fontFamily: "var(--font-cormorant)" }}>
              {averageRating.toFixed(1)}
            </p>
            <StarRating rating={averageRating} size={12} />
            <p className="text-xs font-mono mt-1" style={{ color: "var(--warm-gray)" }}>
              {reviewCount} reviews
            </p>
          </div>
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = reviews.filter((r) => Math.round(r.rating) === star).length;
              const pct = reviewCount > 0 ? (count / reviewCount) * 100 : 0;
              return (
                <div key={star} className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono w-2" style={{ color: "var(--warm-gray)" }}>
                    {star}
                  </span>
                  <div
                    className="flex-1 rounded-full overflow-hidden"
                    style={{ height: 4, background: "var(--border)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${pct}%`, background: "var(--gold)" }}
                    />
                  </div>
                  <span className="text-xs font-mono w-3" style={{ color: "var(--warm-gray)" }}>
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Review cards */}
      <div className="flex flex-col gap-3">
        {displayed.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* View more button */}
      {reviews.length > 2 && (
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex-1 py-3 text-xs font-mono tracking-widest uppercase rounded transition-all duration-200"
            style={{
              border: "0.5px solid var(--border)",
              color: "var(--warm-gray)",
              background: "transparent",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
          <a
            href="/reviews"
            className="flex-1 py-3 text-xs font-mono tracking-widest uppercase rounded text-center transition-all duration-200"
            style={{
              border: "0.5px solid var(--gold)",
              color: "#b8963f",
              background: "rgba(201,168,76,0.05)",
              textDecoration: "none",
            }}
          >
            All {reviewCount} Reviews →
          </a>
        </div>
      )}
    </div>
  );
}
