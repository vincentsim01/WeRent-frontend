export interface ReviewFull {
  id: string;
  name: string;
  initials: string;
  /** Shown on review card, e.g. "2016" → "Member since 2016" */
  memberSince: string;
  date: string;
  timestamp: string;
  rating: number;
  /** Short headline under stars */
  title?: string;
  text: string;
  fullText?: string;
  avatarBg: string;
  avatarColor: string;
  verified: boolean;
  upvotes: number;
  heightCm: number;
  weightKg: number;
  bustCm: number;
  hipCm: number;
  sizeWorn: string;
  fitFeedback: "small" | "true" | "large";
  hasPhoto: boolean;
  photoColor?: string;
}

/** Percentages for fit distribution bars (sums to 100). */
export function computeFitSummary(reviews: ReviewFull[]) {
  if (reviews.length === 0) {
    return { small: 0, true: 100, large: 0 };
  }
  let small = 0;
  let large = 0;
  let trueCount = 0;
  for (const r of reviews) {
    if (r.fitFeedback === "small") small++;
    else if (r.fitFeedback === "large") large++;
    else trueCount++;
  }
  const n = reviews.length;
  const sp = Math.round((small / n) * 100);
  const lp = Math.round((large / n) * 100);
  const tp = Math.max(0, 100 - sp - lp);
  return { small: sp, true: tp, large: lp };
}
