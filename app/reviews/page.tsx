"use client";

import { useState, useMemo } from "react";
import { allReviews, fitSummary, ReviewFull } from "@/lib/reviews-data";

/* ─── Star renderer ─────────────────────────────────────── */
function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i + 1 <= Math.floor(rating);
        const half = !filled && i + 1 === Math.ceil(rating) && rating % 1 >= 0.3;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 14 14" fill="none">
            {half && (
              <defs>
                <linearGradient id={`h${i}`}>
                  <stop offset="50%" stopColor="#C9A84C" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
            )}
            <path
              d="M7 1.5l1.55 3.14 3.46.5-2.5 2.44.59 3.44L7 9.27l-3.1 1.75.59-3.44L2 5.14l3.46-.5z"
              fill={filled ? "#C9A84C" : half ? `url(#h${i})` : "none"}
              stroke="#C9A84C"
              strokeWidth={filled || half ? 0 : 1}
            />
          </svg>
        );
      })}
    </div>
  );
}

/* ─── Photo thumbnail ───────────────────────────────────── */
function PhotoThumb({ color }: { color: string }) {
  return (
    <div
      className="rounded overflow-hidden flex items-center justify-center flex-shrink-0"
      style={{ width: 64, height: 80, background: color }}
    >
      <svg viewBox="0 0 40 60" width="32" height="48">
        <ellipse cx="20" cy="12" rx="7" ry="8" fill="rgba(255,255,255,0.2)" />
        <path d="M8,22 Q13,18 18,20 L19,52 Q20,54 21,52 L22,20 Q27,18 32,22 L34,42 Q32,54 20,55 Q8,54 6,42 Z" fill="rgba(255,255,255,0.15)" />
      </svg>
    </div>
  );
}

/* ─── Single review card ────────────────────────────────── */
function ReviewCard({ review }: { review: ReviewFull }) {
  const [expanded, setExpanded] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(review.upvotes);
  const needsTruncation = !!review.fullText && review.text !== review.fullText;
  const displayText = expanded && review.fullText ? review.fullText : review.text;

  const handleUpvote = () => {
    if (upvoted) {
      setUpvoteCount((c) => c - 1);
    } else {
      setUpvoteCount((c) => c + 1);
    }
    setUpvoted(!upvoted);
  };

  return (
    <article
      className="group"
      style={{
        borderBottom: "0.5px solid var(--border)",
        padding: "24px 0",
      }}
    >
      {/* Top row: avatar + name + upvote */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div
            className="rounded-full flex items-center justify-center text-xs font-mono flex-shrink-0"
            style={{
              width: 40, height: 40,
              background: review.avatarBg,
              color: review.avatarColor,
              fontWeight: 500,
            }}
          >
            {review.initials}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium" style={{ color: "var(--ink)", fontFamily: "var(--font-cormorant)", fontSize: 16 }}>
                {review.name}
              </span>
              {review.verified && (
                <span className="text-xs font-mono px-1.5 py-0.5 rounded"
                  style={{ background: "rgba(201,168,76,0.12)", color: "#9a7830", fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  verified
                </span>
              )}
            </div>
            <Stars rating={review.rating} size={13} />
          </div>
        </div>

        {/* Upvote */}
        <button
          onClick={handleUpvote}
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all duration-200 flex-shrink-0"
          style={{
            border: upvoted ? "0.5px solid #C9A84C" : "0.5px solid var(--border)",
            background: upvoted ? "rgba(201,168,76,0.08)" : "transparent",
            color: upvoted ? "#C9A84C" : "var(--warm-gray)",
          }}
          aria-label="Helpful"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4 13V6.5L7 1.5l.5.5C7.8 3 8 4 7.5 5.5H12a1 1 0 0 1 1 1.1l-1 5a1 1 0 0 1-1 .9H4z"
              fill={upvoted ? "#C9A84C" : "none"}
              stroke={upvoted ? "#C9A84C" : "currentColor"}
              strokeWidth="1.1" strokeLinejoin="round" />
            <path d="M4 6.5H2a1 1 0 0 0-1 1V12a1 1 0 0 0 1 1h2" stroke={upvoted ? "#C9A84C" : "currentColor"} strokeWidth="1.1" />
          </svg>
          <span className="text-xs font-mono">({upvoteCount})</span>
        </button>
      </div>

      {/* Body metrics: height / weight / bust / hip */}
      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
        {[
          { label: "Height", val: `${review.heightCm} cm` },
          { label: "Weight", val: `${review.weightKg} kg` },
          { label: "Bust",   val: `${review.bustCm} cm` },
          { label: "Hip",    val: `${review.hipCm} cm` },
          { label: "Size",   val: review.sizeWorn },
        ].map((m) => (
          <span key={m.label} className="text-xs font-mono" style={{ color: "var(--warm-gray)" }}>
            <span style={{ color: "var(--ink)", fontWeight: 500 }}>{m.val}</span>
            {" "}{m.label}
          </span>
        ))}
      </div>

      {/* Review text */}
      <p className="mb-2 leading-relaxed" style={{ color: "var(--ink)", fontSize: 15, fontFamily: "var(--font-cormorant)", lineHeight: 1.65 }}>
        {displayText}
        {needsTruncation && !expanded && (
          <>
            {"... "}
            <button
              onClick={() => setExpanded(true)}
              className="font-mono text-xs underline underline-offset-2"
              style={{ color: "var(--gold-dark)" }}
            >
              Read more &gt;
            </button>
          </>
        )}
        {expanded && (
          <>
            {" "}
            <button
              onClick={() => setExpanded(false)}
              className="font-mono text-xs underline underline-offset-2"
              style={{ color: "var(--warm-gray)" }}
            >
              Show less
            </button>
          </>
        )}
      </p>

      {/* Photo thumbnail */}
      {review.hasPhoto && review.photoColor && (
        <div className="mb-3">
          <PhotoThumb color={review.photoColor} />
        </div>
      )}

      {/* Timestamp */}
      <p className="text-xs font-mono" style={{ color: "var(--warm-gray)" }}>
        {review.date}
      </p>
    </article>
  );
}

/* ─── Fit scale bar ─────────────────────────────────────── */
function FitScale() {
  const segments = [
    { label: "Small", pct: fitSummary.small, key: "small" },
    { label: "True to Size", pct: fitSummary.true, key: "true" },
    { label: "Large", pct: fitSummary.large, key: "large" },
  ];

  return (
    <div className="mb-6">
      <p className="font-medium mb-3" style={{ fontFamily: "var(--font-cormorant)", fontSize: 17, color: "var(--ink)" }}>
        Fit Scale
      </p>
      <div className="flex gap-3 mb-1.5">
        {segments.map((s) => (
          <div key={s.key} className="flex-1">
            <p className="text-xs font-mono mb-1" style={{ color: "var(--warm-gray)" }}>{s.pct}%</p>
            <div className="rounded-full overflow-hidden" style={{ height: 4, background: "var(--border)" }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: `${s.pct}%`,
                  background: s.key === "true" ? "#C9A84C" : "var(--warm-gray)",
                  opacity: s.key === "true" ? 1 : 0.4,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        {segments.map((s) => (
          <p key={s.key} className="flex-1 text-xs font-mono" style={{ color: "var(--warm-gray)" }}>
            {s.label}
          </p>
        ))}
      </div>
    </div>
  );
}

/* ─── Filter tab button ─────────────────────────────────── */
function FilterTab({
  label, active, onClick,
}: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 text-xs font-mono tracking-widest uppercase rounded transition-all duration-200 whitespace-nowrap"
      style={{
        background: active ? "var(--gold)" : "transparent",
        color: active ? "#fff" : "var(--warm-gray)",
        border: active ? "none" : "0.5px solid var(--border)",
        fontWeight: active ? 500 : 400,
      }}
    >
      {label}
    </button>
  );
}

/* ─── Rating summary sidebar ────────────────────────────── */
function RatingSummary({ avg, total }: { avg: number; total: number }) {
  const breakdown = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: allReviews.filter((r) => Math.round(r.rating) === star).length,
  }));

  return (
    <div className="sticky top-20">
      <div className="mb-4">
        <div className="flex items-baseline gap-3 mb-2">
          <span style={{ fontFamily: "var(--font-cormorant)", fontSize: 52, fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>
            {avg.toFixed(1)}
          </span>
          <div>
            <Stars rating={avg} size={16} />
            <p className="text-xs font-mono mt-1" style={{ color: "var(--warm-gray)" }}>
              {total} reviews
            </p>
          </div>
        </div>

        {breakdown.map(({ star, count }) => {
          const pct = total > 0 ? (count / total) * 100 : 0;
          return (
            <div key={star} className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono w-2" style={{ color: "var(--warm-gray)" }}>{star}</span>
              <div className="flex-1 rounded-full overflow-hidden" style={{ height: 4, background: "var(--border)" }}>
                <div className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, background: "#C9A84C" }} />
              </div>
              <span className="text-xs font-mono w-3" style={{ color: "var(--warm-gray)" }}>{count}</span>
            </div>
          );
        })}
      </div>

      <div style={{ height: "0.5px", background: "var(--border)", margin: "20px 0" }} />
      <FitScale />
    </div>
  );
}

/* ─── Main Reviews Page ─────────────────────────────────── */
export default function ReviewsPage() {
  const [tab, setTab] = useState<"all" | "photos" | "newest" | "highest" | "lowest">("all");
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [fitFilter, setFitFilter] = useState<"all" | "small" | "true" | "large">("all");

  const filtered = useMemo(() => {
    let list = [...allReviews];

    // Tab sorts
    if (tab === "photos") list = list.filter((r) => r.hasPhoto);
    if (tab === "newest") list = list.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
    if (tab === "highest") list = list.sort((a, b) => b.rating - a.rating);
    if (tab === "lowest") list = list.sort((a, b) => a.rating - b.rating);

    // Rating filter
    if (ratingFilter !== null) list = list.filter((r) => Math.round(r.rating) === ratingFilter);

    // Fit filter
    if (fitFilter !== "all") list = list.filter((r) => r.fitFeedback === fitFilter);

    return list;
  }, [tab, ratingFilter, fitFilter]);

  const avg = allReviews.reduce((s, r) => s + r.rating, 0) / allReviews.length;

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--parchment)", fontFamily: "var(--font-cormorant)" }}
    >
      {/* ── Page header ─────────────────────────────── */}
      <div
        className="sticky top-0 z-40"
        style={{
          background: "rgba(248,245,240,0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: "0.5px solid var(--border)",
        }}
      >
        <div className="mx-auto px-5 md:px-8 lg:px-12" style={{ maxWidth: 1200 }}>
          <div className="flex items-center justify-between" style={{ height: 52 }}>
            <div className="flex items-center gap-3">
              <a
                href="/"
                className="flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase transition-opacity hover:opacity-60"
                style={{ color: "var(--warm-gray)" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="hidden sm:inline">Back</span>
              </a>
              <div style={{ width: "0.5px", height: 16, background: "var(--border)" }} />
              <h1
                className="tracking-wide"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: 17, fontWeight: 400, color: "var(--ink)" }}
              >
                Reviews ({allReviews.length})
              </h1>
            </div>
            <p className="text-xs font-mono hidden sm:block" style={{ color: "var(--warm-gray)" }}>
              Black Kaftan with Embellishment
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto px-5 md:px-8 lg:px-12 py-8" style={{ maxWidth: 1200 }}>
        {/*
          Responsive layout:
          - mobile: stacked (summary on top, reviews below)
          - tablet: stacked with wider padding
          - desktop: sidebar (summary left, reviews right)
        */}
        <div className="lg:grid lg:gap-16" style={{ gridTemplateColumns: "280px 1fr" }}>

          {/* ── LEFT: Rating summary (sidebar on lg, top on mobile) ── */}
          <aside className="mb-8 lg:mb-0">
            <RatingSummary avg={avg} total={allReviews.length} />
          </aside>

          {/* ── RIGHT: Filter tabs + review list ─────────────────── */}
          <div>

            {/* Filter tabs */}
            <div className="mb-2">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
                <FilterTab label="All Reviews" active={tab === "all"} onClick={() => setTab("all")} />
                <FilterTab label="Photos / Videos" active={tab === "photos"} onClick={() => setTab("photos")} />
                <FilterTab label="Newest" active={tab === "newest"} onClick={() => setTab("newest")} />
                <FilterTab label="Highest ★" active={tab === "highest"} onClick={() => setTab("highest")} />
                <FilterTab label="Lowest ★" active={tab === "lowest"} onClick={() => setTab("lowest")} />
              </div>
            </div>

            {/* Secondary filters row */}
            <div className="flex flex-wrap items-center gap-2 mb-6 pt-3" style={{ borderTop: "0.5px solid var(--border)" }}>
              <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "var(--warm-gray)" }}>
                Filter:
              </span>

              {/* Rating stars filter */}
              <div className="flex gap-1.5 flex-wrap">
                {[5, 4, 3, 2, 1].map((n) => (
                  <button
                    key={n}
                    onClick={() => setRatingFilter(ratingFilter === n ? null : n)}
                    className="flex items-center gap-1 px-2 py-1 rounded text-xs font-mono transition-all"
                    style={{
                      border: ratingFilter === n ? "0.5px solid var(--gold)" : "0.5px solid var(--border)",
                      background: ratingFilter === n ? "rgba(201,168,76,0.08)" : "transparent",
                      color: ratingFilter === n ? "var(--gold-dark)" : "var(--warm-gray)",
                    }}
                  >
                    {n}★
                  </button>
                ))}
              </div>

              <div style={{ width: "0.5px", height: 16, background: "var(--border)" }} className="hidden sm:block" />

              {/* Fit filter */}
              <div className="flex gap-1.5 flex-wrap">
                {(["all", "small", "true", "large"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFitFilter(f)}
                    className="px-2 py-1 rounded text-xs font-mono capitalize transition-all"
                    style={{
                      border: fitFilter === f ? "0.5px solid var(--gold)" : "0.5px solid var(--border)",
                      background: fitFilter === f ? "rgba(201,168,76,0.08)" : "transparent",
                      color: fitFilter === f ? "var(--gold-dark)" : "var(--warm-gray)",
                    }}
                  >
                    {f === "all" ? "All Fits" : f === "true" ? "True to Size" : f === "small" ? "Runs Small" : "Runs Large"}
                  </button>
                ))}
              </div>

              {/* Active filter clear */}
              {(ratingFilter !== null || fitFilter !== "all") && (
                <button
                  onClick={() => { setRatingFilter(null); setFitFilter("all"); }}
                  className="px-2 py-1 text-xs font-mono rounded transition-all"
                  style={{ border: "0.5px solid #e8a0a0", color: "#a03030", background: "rgba(160,48,48,0.06)" }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results count */}
            <p className="text-xs font-mono mb-2" style={{ color: "var(--warm-gray)" }}>
              {filtered.length} {filtered.length === 1 ? "review" : "reviews"}
              {(ratingFilter !== null || fitFilter !== "all" || tab !== "all") && " matching filters"}
            </p>

            {/* Review list */}
            {filtered.length === 0 ? (
              <div className="py-16 text-center">
                <p style={{ fontFamily: "var(--font-cormorant)", fontSize: 22, color: "var(--warm-gray)" }}>
                  No reviews match your filters
                </p>
                <button
                  onClick={() => { setRatingFilter(null); setFitFilter("all"); setTab("all"); }}
                  className="mt-4 text-xs font-mono underline underline-offset-2"
                  style={{ color: "var(--gold-dark)" }}
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div>
                {filtered.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
