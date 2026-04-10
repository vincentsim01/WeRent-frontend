import type { Metadata } from "next";
import "./globals.css";

import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});


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
    <html lang="en" className={cormorant.variable}>
      <body>{children}</body>
    </html>
  );
}
