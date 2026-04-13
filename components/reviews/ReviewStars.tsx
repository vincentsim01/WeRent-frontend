"use client";

import { useId } from "react";

type Variant = "ink" | "gold" | "figma";

const colors: Record<Variant, { fill: string; stroke: string; emptyStroke: string }> = {
  ink: {
    fill: "var(--review-star-ink)",
    stroke: "var(--review-star-ink)",
    emptyStroke: "var(--review-star-ink)",
  },
  gold: {
    fill: "var(--gold)",
    stroke: "var(--gold)",
    emptyStroke: "var(--gold)",
  },
  figma: {
    fill: "var(--werent-figma-green)",
    stroke: "var(--werent-figma-green)",
    emptyStroke: "var(--werent-figma-green)",
  },
};

export default function ReviewStars({
  rating,
  size = 14,
  variant = "ink",
}: {
  rating: number;
  size?: number;
  variant?: Variant;
}) {
  const uid = useId();
  const { fill, stroke, emptyStroke } = colors[variant];

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i + 1 <= Math.floor(rating);
        const half = !filled && i + 1 === Math.ceil(rating) && rating % 1 >= 0.3;
        const gradId = `${uid}-h${i}`;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 14 14" fill="none">
            {half && (
              <defs>
                <linearGradient id={gradId}>
                  <stop offset="50%" stopColor={fill} />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
            )}
            <path
              d="M7 1.5l1.55 3.14 3.46.5-2.5 2.44.59 3.44L7 9.27l-3.1 1.75.59-3.44L2 5.14l3.46-.5z"
              fill={filled ? fill : half ? `url(#${gradId})` : "none"}
              stroke={filled || half ? stroke : emptyStroke}
              strokeWidth={filled || half ? 0 : 1}
            />
          </svg>
        );
      })}
    </div>
  );
}
