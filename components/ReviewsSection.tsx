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

export default function ReviewsSection({ reviews, averageRating, reviewCount }: ReviewsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? reviews : reviews.slice(0, 2);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="section-label">Reviews</span>
          <span
            className="px-2.5 py-0.5 rounded-full"
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: 10,
              color: "var(--gold)",
              background: "linear-gradient(135deg, #f7fdfb, var(--gold-pale))",
              border: "1px solid var(--gold-border)",
            }}
          >
            {reviewCount}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <StarRating rating={averageRating} size={14} />
          <span
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--text-primary)",
            }}
          >
            {averageRating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Rating summary */}
      <div className="glass-card rounded-2xl p-5 mb-6 hover-lift">
        <div className="flex items-center gap-6">
          <div className="text-center flex-shrink-0">
            <p
              className="gold-shimmer"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: 56,
                fontWeight: 300,
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              {averageRating.toFixed(1)}
            </p>
            <StarRating rating={averageRating} size={13} />
            <p
              className="mt-2"
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: 9,
                letterSpacing: "0.12em",
                color: "var(--text-muted)",
              }}
            >
              {reviewCount} REVIEWS
            </p>
          </div>
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = reviews.filter((r) => Math.round(r.rating) === star).length;
              const pct = reviewCount > 0 ? (count / reviewCount) * 100 : 0;
              return (
                <div key={star} className="flex items-center gap-3 mb-2">
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: 10,
                      color: "var(--text-muted)",
                      width: 8,
                    }}
                  >
                    {star}
                  </span>
                  <div
                    className="flex-1 rounded-full overflow-hidden"
                    style={{ height: 5, background: "rgba(27,122,90,0.12)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${pct}%`,
                        background: "linear-gradient(90deg, var(--gold), var(--gold-bright))",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: 10,
                      color: "var(--text-muted)",
                      width: 12,
                      textAlign: "right",
                    }}
                  >
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {displayed.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {reviews.length > 2 && (
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-ghost flex-1 py-3 rounded-xl"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
          <a
            href="/reviews"
            className="flex-1 py-3 text-center rounded-xl transition-all duration-300"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "1px solid var(--gold-border)",
              color: "var(--gold)",
              background: "linear-gradient(135deg, #f7fdfb, var(--gold-pale))",
              textDecoration: "none",
              display: "block",
              boxShadow: "0 2px 12px rgba(27,122,90,0.1)",
            }}
          >
            All {reviewCount} Reviews →
          </a>
        </div>
      )}
    </div>
  );
}
