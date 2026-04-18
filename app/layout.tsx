import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import ModeReveal from "@/components/ModeReveal";
import EasterEggListener from "@/components/EasterEggListener";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Aryan Swami-Persaud — Data Science & AI",
  description:
    "Data Science & AI student. Founder of Leafshift. Building AgriAI and DROS — a resilient, bio-inspired decision system.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {children}
        <ModeReveal />
        <EasterEggListener />
      </body>
    </html>
  );
}
