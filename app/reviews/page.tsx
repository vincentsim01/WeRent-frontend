"use client";

import { useEffect } from "react";

/** Reviews UI lives on `/` — keep `/reviews` for bookmarks; jump to the section. */
export default function ReviewsPage() {
  useEffect(() => {
    window.location.replace("/#product-reviews");
  }, []);

  return (
    <p className="p-8 text-center text-sm font-mono" style={{ color: "var(--warm-gray)" }}>
      Redirecting…
    </p>
  );
}
