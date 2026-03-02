import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rust Nail Contracting | Carrollton & Greater Dallas, TX",
  description:
    "Quality fencing, decks, painting, renovations, and landscaping in Carrollton & Greater Dallas, TX. Free estimates. Licensed & insured.",
  keywords: [
    "contractor",
    "Carrollton TX",
    "Dallas contractor",
    "fencing",
    "decks",
    "painting",
    "renovation",
    "landscaping",
  ],
  openGraph: {
    title: "Rust Nail Contracting | Quality Craftsmanship You Can Trust",
    description:
      "Expert fencing, decks, painting, renovations, and landscaping in Carrollton & Greater Dallas, TX.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
