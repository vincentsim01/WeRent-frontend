import { SizeEntry } from "@/lib/data";

interface SizeGuideTableProps {
  sizes: SizeEntry[];
  selectedSize: string;
}

export default function SizeGuideTable({ sizes, selectedSize }: SizeGuideTableProps) {
  return (
    <div className="mt-3">
      <p
        className="text-xs font-mono tracking-widest uppercase mb-3"
        style={{ color: "var(--warm-gray)" }}
      >
        Size Guide
      </p>
      <table className="w-full" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {["Size", "Bust", "Length"].map((h) => (
              <th
                key={h}
                className="text-left pb-2 text-xs font-mono tracking-widest uppercase"
                style={{
                  color: "var(--warm-gray)",
                  borderBottom: "0.5px solid var(--border)",
                  paddingRight: "12px",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sizes.map((row) => {
            const isActive = row.size === selectedSize;
            return (
              <tr
                key={row.size}
                style={{
                  borderBottom: "0.5px solid var(--border)",
                  background: isActive ? "rgba(201,168,76,0.06)" : "transparent",
                }}
              >
                <td
                  className="py-2.5 text-sm font-mono"
                  style={{
                    color: isActive ? "var(--gold)" : "var(--ink)",
                    fontWeight: isActive ? 500 : 400,
                    paddingRight: "12px",
                  }}
                >
                  {row.size}
                </td>
                <td
                  className="py-2.5 text-sm"
                  style={{
                    color: isActive ? "var(--ink)" : "var(--warm-gray)",
                    fontWeight: isActive ? 500 : 400,
                    paddingRight: "12px",
                  }}
                >
                  {row.bust}
                </td>
                <td
                  className="py-2.5 text-sm"
                  style={{
                    color: isActive ? "var(--ink)" : "var(--warm-gray)",
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  {row.length}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
