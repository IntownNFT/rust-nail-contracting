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
  title: "Rusty Nail Contracting | Fencing, Decks & Renovations in Carrollton & Dallas, TX",
  description:
    "Rusty Nail Contracting serves Carrollton & Greater Dallas, TX with expert fencing, decks, painting, interior & exterior renovations, and landscaping. Licensed & insured. Call (469) 346-5900 for a free estimate.",
  keywords: [
    "contractor Carrollton TX",
    "fence contractor Dallas",
    "deck builder Carrollton",
    "painting contractor Dallas TX",
    "interior renovation Carrollton",
    "exterior renovation Dallas",
    "landscaping Carrollton TX",
    "home remodeling Dallas",
    "general contractor Carrollton Texas",
    "fence installation Dallas TX",
    "Rusty Nail Contracting",
  ],
  authors: [{ name: "Rusty Nail Contracting" }],
  creator: "Rusty Nail Contracting",
  openGraph: {
    title: "Rusty Nail Contracting | Quality Craftsmanship in Carrollton & Dallas, TX",
    description:
      "Expert fencing, decks, painting, renovations & landscaping in Carrollton & Greater Dallas. Licensed & insured. Free estimates. Call (469) 346-5900.",
    type: "website",
    locale: "en_US",
    siteName: "Rusty Nail Contracting",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rusty Nail Contracting | Carrollton & Dallas, TX Contractor",
    description:
      "Fencing, decks, painting, renovations & landscaping. Free estimates. (469) 346-5900.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Carrollton",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Rusty Nail Contracting",
  image: "/logo.png",
  telephone: "+1-469-346-5900",
  email: "rustynailcontractors@gmail.com",
  url: "/",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Carrollton",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Carrollton", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Dallas", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Plano", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Frisco", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Lewisville", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Addison", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Farmers Branch", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "The Colony", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  description:
    "Rusty Nail Contracting provides expert fencing, decks, painting, interior and exterior renovations, and landscaping to homeowners in Carrollton and Greater Dallas, TX.",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "5",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Rico Bodacious" },
      reviewBody:
        "Professional, consistent, knowledgable and always gives a fair price. Rusty has many years of experience and thinks outside the box.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Kelsey Mills" },
      reviewBody:
        "Rusty replaced our fence. It looks great! You can tell he takes pride in his work.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Jorge Bazan" },
      reviewBody: "Awesome contractor. Great communication!",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Contracting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fencing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Decks" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Renovation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscaping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Renovation and Repair" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
