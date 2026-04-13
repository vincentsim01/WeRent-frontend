import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});


export const metadata: Metadata = {
  title: "WeRent — Black Kaftan with Embellishment",
  description: "Luxury fashion rental — Black Kaftan with Embellishment by n atelier",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
