import { SizeEntry } from "@/lib/data";

interface SizeGuideTableProps {
  sizes: SizeEntry[];
  selectedSize: string;
}

export default function SizeGuideTable({ sizes, selectedSize }: SizeGuideTableProps) {
  return (
    <div
      className="mt-5 rounded-xl overflow-hidden"
      style={{
        border: "1px solid var(--border-soft)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div
        className="grid grid-cols-3 px-5 py-3"
        style={{
          background: "var(--ivory)",
          borderBottom: "1px solid var(--border-soft)",
        }}
      >
        {["Size", "Bust", "Length"].map((h) => (
          <span key={h} className="section-label text-center">{h}</span>
        ))}
      </div>

      {sizes.map((s, i) => {
        const isSelected = s.size === selectedSize;
        return (
          <div
            key={s.size}
            className="grid grid-cols-3 px-5 py-3.5 transition-colors duration-200"
            style={{
              background: isSelected ? "linear-gradient(90deg, #f7fdfb, var(--gold-pale), #f7fdfb)" : "var(--white)",
              borderBottom: i < sizes.length - 1 ? "1px solid var(--border-soft)" : "none",
            }}
          >
            <span
              className="text-center"
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: 12,
                fontWeight: isSelected ? 600 : 400,
                color: isSelected ? "var(--gold)" : "var(--text-secondary)",
              }}
            >
              {s.size}
            </span>
            <span
              className="text-center"
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: 12,
                color: isSelected ? "var(--text-primary)" : "var(--text-muted)",
              }}
            >
              {s.bust}
            </span>
            <span
              className="text-center"
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: 12,
                color: isSelected ? "var(--text-primary)" : "var(--text-muted)",
              }}
            >
              {s.length}
            </span>
          </div>
        );
      })}
    </div>
  );
}
