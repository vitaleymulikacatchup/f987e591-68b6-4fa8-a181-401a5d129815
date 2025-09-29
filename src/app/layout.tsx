import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse Memecoin — Fun Landing Page for Memers Worldwide",
  description: "MemePulse — the memecoin landing page with clear steps to buy, transparent tokenomics, and a community-first vibe. Quick to understand and easy to join.",
  keywords: ["memecoin", "memecoin landing page", "how to buy memecoin", "tokenomics", "crypto community", "fun crypto site", "crypto landing page", "meme coin", "buy memecoin", "crypto tips"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "MemePulse Memecoin — Fun Landing Page for Memers Worldwide",
    description: "MemePulse — the memecoin landing page with clear steps to buy, transparent tokenomics, and a community-first vibe. Quick to understand and easy to join.",
    type: "website",
    url: "/",
    siteName: "MemePulse",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-desert-landscape-in-16-9--1759141333735-b501f606.jpg", width: 1200, height: 630, alt: "Mascot of MemePulse with vibrant crypto visuals" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse Memecoin — Fun Landing Page for Memers Worldwide",
    description: "MemePulse — the memecoin landing page with clear steps to buy, transparent tokenomics, and a community-first vibe. Quick to understand and easy to join.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-desert-landscape-in-16-9--1759141333735-b501f606.jpg"]
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}