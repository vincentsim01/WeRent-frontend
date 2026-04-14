import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Raleway } from 'next/font/google'

import { Cormorant } from "next/font/google";

// const cormorant = Cormorant({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600"],
//   variable: "--font-cormorant",
// });

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
  variable: "--font-raleway", 
})


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
    <html lang="en" className={raleway.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
