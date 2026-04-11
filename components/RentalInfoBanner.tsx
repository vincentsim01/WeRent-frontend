const items = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3.5" width="16" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M2 8h16" stroke="currentColor" strokeWidth="1.2" />
        <path d="M7 1.5v4M13 1.5v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    label: "4-Day Rental",
    sub: "Pick up & return",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.47 7.27L18.28 8.08L14.14 12.08L15.18 17.86L10 15.27L4.82 17.86L5.86 12.08L1.72 8.08L7.53 7.27L10 2Z"
          stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
    label: "Dry Cleaned",
    sub: "Ready to wear",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6.5 10l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Quality Check",
    sub: "Every rental",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10l3.5-7h7l3.5 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M3 10h14" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    label: "Free Delivery",
    sub: "Orders 500k+",
  },
];

export default function RentalInfoBanner() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-5">
        <div style={{ height: 1, flex: 1, background: "var(--linen)" }} />
        <span className="section-label" style={{ color: "var(--gold)" }}>Our Promise</span>
        <div style={{ height: 1, flex: 1, background: "var(--linen)" }} />
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f7fdfb, var(--ivory))",
          border: "1px solid var(--gold-border)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center py-6 px-3 group cursor-default transition-all duration-300 hover:bg-[var(--gold-subtle)]"
            style={{
              borderRight: i % 2 === 0 ? "1px solid var(--linen)" : "none",
              borderBottom: i < 2 ? "1px solid var(--linen)" : "none",
            }}
          >
            <div
              className="flex items-center justify-center rounded-full mb-3 transition-all duration-300 group-hover:scale-110"
              style={{
                width: 44,
                height: 44,
                background: "linear-gradient(135deg, var(--gold-pale), #f7fdfb)",
                border: "1px solid var(--gold-border)",
                color: "var(--gold)",
              }}
            >
              {item.icon}
            </div>
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: 10,
                fontWeight: 600,
                color: "var(--text-primary)",
                letterSpacing: "0.05em",
                marginBottom: 4,
              }}
            >
              {item.label}
            </p>
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: 9,
                color: "var(--text-muted)",
              }}
            >
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
