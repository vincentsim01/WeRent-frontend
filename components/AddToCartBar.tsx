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
    setTimeout(() => setAdded(false), 2500);
  };

  const hideToast = useCallback(() => setToastVisible(false), []);
  const formatted = new Intl.NumberFormat("id-ID").format(price);

  return (
    <>
      <Toast message={`${productName ?? "Item"} added to cart`} visible={toastVisible} onHide={hideToast} />

      <div
        className="fixed bottom-0 left-0 right-0 z-50"
        style={{
          background: "rgba(242,250,246,0.97)",
          backdropFilter: "blur(20px) saturate(1.8)",
          WebkitBackdropFilter: "blur(20px) saturate(1.8)",
          borderTop: "1px solid rgba(27,122,90,0.2)",
          boxShadow: "0 -4px 40px rgba(26,22,16,0.1)",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between gap-4 px-6 lg:px-8"
          style={{ maxWidth: 1200, height: 72 }}
        >
          {/* Price */}
          <div className="flex items-center gap-6">
            {/* Gold accent line left */}
            <div
              style={{
                width: 3,
                height: 36,
                background: "linear-gradient(180deg, var(--gold-bright), var(--gold))",
                borderRadius: 2,
              }}
            />
            <div>
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: 3,
                }}
              >
                Rental Fee
              </p>
              <div className="flex items-baseline gap-2">
                <p
                  className="gold-shimmer"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: 26,
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {currency} {formatted}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: 10,
                    color: "var(--text-muted)",
                  }}
                >
                  / {days} days
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleAdd}
            disabled={added}
            className="btn-primary rounded-xl transition-all duration-400"
            style={{
              minWidth: 160,
              height: 48,
              background: added
                ? "linear-gradient(135deg, var(--gold-pale), #f7fdfb)"
                : "linear-gradient(135deg, var(--gold), var(--gold-bright))",
              color: added ? "var(--gold)" : "white",
              border: added ? "1px solid var(--gold-border)" : "none",
              boxShadow: added
                ? "none"
                : "0 6px 24px rgba(27,122,90,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
              animation: added ? "none" : "shimmer 4s linear infinite",
              backgroundSize: "200% 200%",
            }}
          >
            {added ? (
              <span className="flex items-center justify-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6.5" stroke="var(--gold)" strokeWidth="1" />
                  <path d="M4 7l2 2 4-4" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                Reserved!
              </span>
            ) : (
              "Reserve Now"
            )}
          </button>
        </div>
      </div>
    </>
  );
}
