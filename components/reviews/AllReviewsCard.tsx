"use client";

import { useState } from "react";
import type { ReviewFull } from "@/lib/reviews-data";
import ReviewStars from "./ReviewStars";

function PhotoThumb({ color }: { color: string }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-2xl"
      style={{
        width: 88,
        height: 110,
        background: color,
        boxShadow: "0 2px 8px rgba(51, 51, 51, 0.08)",
      }}
    >
      <svg viewBox="0 0 40 60" width="38" height="56" aria-hidden>
        <ellipse cx="20" cy="12" rx="7" ry="8" fill="rgba(255,255,255,0.2)" />
        <path
          d="M8,22 Q13,18 18,20 L19,52 Q20,54 21,52 L22,20 Q27,18 32,22 L34,42 Q32,54 20,55 Q8,54 6,42 Z"
          fill="rgba(255,255,255,0.15)"
        />
      </svg>
    </div>
  );
}

export default function AllReviewsCard({ review }: { review: ReviewFull }) {
  const [expanded, setExpanded] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(review.upvotes);
  const needsTruncation = !!review.fullText && review.text !== review.fullText;
  const displayText = expanded && review.fullText ? review.fullText : review.text;

  const handleUpvote = () => {
    setUpvoteCount((c) => (upvoted ? c - 1 : c + 1));
    setUpvoted(!upvoted);
  };

  return (
    <article
      className="rounded-2xl p-5 sm:p-6"
      style={{
        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
        background: "var(--werent-figma-surface)",
        border: "1px solid rgba(204, 204, 204, 0.5)",
        boxShadow: "0 2px 16px rgba(51, 51, 51, 0.06)",
      }}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p
            className="text-[17px] font-semibold leading-tight sm:text-lg"
            style={{ color: "var(--werent-figma-text)" }}
          >
            {review.name}
          </p>
          <p className="mt-1 text-[13px] leading-snug" style={{ color: "var(--werent-figma-muted)" }}>
            Member since {review.memberSince}
          </p>
        </div>
        <button
          type="button"
          onClick={handleUpvote}
          className="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-[12px] font-medium transition-colors"
          style={{
            border: upvoted ? "1px solid var(--werent-figma-green)" : "1px solid var(--werent-figma-line)",
            background: upvoted ? "rgba(79, 109, 79, 0.08)" : "transparent",
            color: upvoted ? "var(--werent-figma-green)" : "var(--werent-figma-muted)",
          }}
          aria-pressed={upvoted}
          aria-label="Mark review as helpful"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M4 13V6.5L7 1.5l.5.5C7.8 3 8 4 7.5 5.5H12a1 1 0 0 1 1 1.1l-1 5a1 1 0 0 1-1 .9H4z"
              fill={upvoted ? "var(--werent-figma-green)" : "none"}
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
            <path
              d="M4 6.5H2a1 1 0 0 0-1 1V12a1 1 0 0 0 1 1h2"
              stroke="currentColor"
              strokeWidth="1.1"
            />
          </svg>
          <span>
            Helpful ({upvoteCount})
          </span>
        </button>
      </div>

      <div className="mb-5" style={{ height: 1, background: "var(--werent-figma-line)" }} />

      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:gap-10">
        <div className="min-w-0 flex-1">
          <div className="mb-3">
            <ReviewStars rating={review.rating} size={16} variant="figma" />
          </div>
          <p className="mb-2 text-[13px]" style={{ color: "var(--werent-figma-muted)" }}>
            Size : {review.sizeWorn}
          </p>
          {review.title && (
            <p
              className="mb-2 text-[17px] font-semibold leading-snug sm:text-lg"
              style={{ color: "var(--werent-figma-text)" }}
            >
              {review.title}
            </p>
          )}
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: "var(--werent-figma-text)", fontWeight: 400 }}
          >
            {displayText}
            {needsTruncation && !expanded && (
              <>
                {"... "}
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="text-[13px] font-medium underline underline-offset-2"
                  style={{ color: "var(--werent-figma-green)" }}
                >
                  Read more
                </button>
              </>
            )}
            {expanded && needsTruncation && (
              <>
                {" "}
                <button
                  type="button"
                  onClick={() => setExpanded(false)}
                  className="text-[13px] font-medium underline underline-offset-2"
                  style={{ color: "var(--werent-figma-muted)" }}
                >
                  Show less
                </button>
              </>
            )}
          </p>
        </div>

        {review.hasPhoto && review.photoColor && (
          <div className="flex justify-start sm:justify-end sm:pt-0.5">
            <PhotoThumb color={review.photoColor} />
          </div>
        )}
      </div>
    </article>
  );
}
