"use client";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
}

export default function StarRating({ rating, max = 5, size = 16 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => {
        const val = i + 1;
        const filled = val <= Math.floor(rating);
        const half = !filled && val === Math.ceil(rating) && rating % 1 >= 0.3;

        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {half && (
              <defs>
                <linearGradient id={`half-${i}`}>
                  <stop offset="50%" stopColor="var(--gold)" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
            )}
            <path
              d="M8 1.5l1.8 3.65 4.03.585-2.915 2.84.688 4.01L8 10.365l-3.603 1.895.688-4.01L2.17 5.735l4.03-.585z"
              fill={
                filled
                  ? "var(--gold)"
                  : half
                  ? `url(#half-${i})`
                  : "none"
              }
              stroke="var(--gold)"
              strokeWidth={filled || half ? 0 : 1.2}
            />
          </svg>
        );
      })}
    </div>
  );
}
