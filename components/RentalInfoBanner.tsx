const items = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.1" />
        <path d="M2 7h14" stroke="currentColor" strokeWidth="1.1" />
        <path d="M6 1v4M12 1v4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M6 11h2M10 11h2M6 13.5h2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
    label: "4-Day Rental",
    sub: "Pick up & return",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L11.06 6.16L15.73 6.85L12.36 10.1L13.13 14.77L9 12.6L4.87 14.77L5.64 10.1L2.27 6.85L6.94 6.16L9 2Z"
          stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      </svg>
    ),
    label: "Dry Cleaned",
    sub: "Ready to wear",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.1" />
        <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Quality Check",
    sub: "Every rental",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2l1.8 3.6 4 .58-2.9 2.82.68 3.98L9 11.35l-3.58 1.88.68-3.98L3.2 6.18l4-.58L9 2z"
          stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
        <path d="M3 15h12" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
    label: "Free Delivery",
    sub: "Orders over 500k",
  },
];

export default function RentalInfoBanner() {
  return (
    <div
      className="mx-5 rounded-lg mb-6"
      style={{ background: "#fdfaf6", border: "0.5px solid var(--border)" }}
    >
      <div className="grid grid-cols-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center py-4 px-1"
            style={{
              borderRight: i < items.length - 1 ? "0.5px solid var(--border)" : "none",
            }}
          >
            <span style={{ color: "var(--gold)" }}>{item.icon}</span>
            <p
              className="mt-1.5 font-mono leading-tight"
              style={{ color: "var(--ink)", fontSize: 10, fontWeight: 500 }}
            >
              {item.label}
            </p>
            <p
              className="font-mono leading-tight mt-0.5"
              style={{ color: "var(--warm-gray)", fontSize: 9 }}
            >
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
