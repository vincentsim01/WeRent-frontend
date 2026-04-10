"use client";

import { useState, useCallback } from "react";
import Toast from "./Toast";

interface AddToCartBarProps {
  price: number;
  currency: string;
  days: number;
  productName?: string;
}

export default function AddToCartBar({ price, currency, days, productName }: AddToCartBarProps) {
  const [added, setAdded] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setToastVisible(true);
    setTimeout(() => setAdded(false), 2200);
  };

  const hideToast = useCallback(() => setToastVisible(false), []);

  const formatted = new Intl.NumberFormat("id-ID").format(price);

  return (
    <>
      <Toast
        message={`${productName ?? "Item"} added to cart`}
        visible={toastVisible}
        onHide={hideToast}
      />
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full"
        style={{
          maxWidth: 480,
          background: "rgba(248,245,240,0.97)",
          backdropFilter: "blur(8px)",
          borderTop: "0.5px solid var(--border)",
          zIndex: 50,
          padding: "14px 20px",
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: "var(--warm-gray)" }}
            >
              Rent Fee
            </p>
            <p
              className="font-medium mt-0.5"
              style={{ color: "var(--ink)", fontFamily: "var(--font-cormorant)", fontSize: 18 }}
            >
              {currency} {formatted}
              <span style={{ color: "var(--warm-gray)", fontSize: 14, fontWeight: 400 }}>
                &nbsp;/ {days} Day
              </span>
            </p>
          </div>

          <button
            onClick={handleAdd}
            disabled={added}
            className="px-10 py-3 font-mono tracking-widest uppercase transition-all duration-300 rounded"
            style={{
              background: added ? "#3a3630" : "var(--gold)",
              color: "#fff",
              letterSpacing: "0.1em",
              fontSize: 12,
              minWidth: 130,
              opacity: added ? 0.9 : 1,
            }}
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
}
