import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "n atelier — Black Kaftan with Embellishment",
  description: "Luxury fashion rental — Black Kaftan with Embellishment by n atelier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
