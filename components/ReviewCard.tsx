import { Review } from "@/lib/data";
import StarRating from "./StarRating";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div
      className="p-4 rounded-lg"
      style={{ border: "0.5px solid var(--border)", background: "#fdfaf6" }}
    >
      <div className="flex items-center gap-3 mb-3">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono flex-shrink-0"
          style={{
            background: review.avatarBg,
            color: review.avatarColor,
            fontWeight: 500,
          }}
        >
          {review.initials}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium truncate" style={{ color: "var(--ink)" }}>
              {review.name}
            </p>
            {review.verified && (
              <span
                className="text-xs font-mono px-1.5 py-0.5 rounded"
                style={{
                  background: "rgba(201,168,76,0.12)",
                  color: "var(--gold-dark)",
                  fontSize: 10,
                }}
              >
                verified
              </span>
            )}
          </div>
          <p className="text-xs font-mono mt-0.5" style={{ color: "var(--warm-gray)" }}>
            {review.date}
          </p>
        </div>
      </div>

      <StarRating rating={review.rating} size={14} />

      <p
        className="mt-2 text-sm leading-relaxed"
        style={{ color: "var(--warm-gray)", fontFamily: "var(--font-cormorant)", fontSize: 15 }}
      >
        {review.text}
      </p>
    </div>
  );
}
