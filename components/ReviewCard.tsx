import { Review } from "@/lib/data";
import StarRating from "./StarRating";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="glass-card rounded-xl p-5 hover-lift">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-full"
            style={{
              width: 40,
              height: 40,
              background: review.avatarBg,
              border: "1.5px solid rgba(27,122,90,0.2)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: 12,
                fontWeight: 600,
                color: review.avatarColor,
              }}
            >
              {review.initials}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--text-primary)",
                }}
              >
                {review.name}
              </p>
              {review.verified && (
                <span
                  className="flex items-center gap-1 px-2 py-0.5 rounded-sm"
                  style={{
                    background: "var(--gold)",
                  }}
                >
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="4.5" fill="white" />
                    <path d="M3 5l1.2 1.2L7 3.5" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: 8,
                      fontWeight: 700,
                      color: "white",
                      letterSpacing: "0.08em",
                    }}
                  >
                    VERIFIED
                  </span>
                </span>
              )}
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: 10,
                color: "var(--text-light)",
                marginTop: 2,
              }}
            >
              {review.date}
            </p>
          </div>
        </div>
        <StarRating rating={review.rating} size={13} />
      </div>

      <div
        style={{
          height: "1px",
          background: "var(--border-soft)",
          marginBottom: 14,
        }}
      />

      <p
        className="leading-relaxed"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: 17,
          fontStyle: "italic",
          color: "var(--text-secondary)",
          lineHeight: 1.75,
        }}
      >
        "{review.text}"
      </p>
    </div>
  );
}
