import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BürokratieBot - Skip Munich Bureaucracy Queue Forever",
  description: "Get KVR appointments in minutes, not months. Smart notification system alerts you instantly when Munich appointment slots open. Join 5,000+ expats who never wait in line.",
  keywords: "Munich, KVR, appointments, bureaucracy, expats, Anmeldung, visa, Germany, automation",
  authors: [{ name: "BürokratieBot Team" }],
  openGraph: {
    title: "BürokratieBot - Skip Munich Bureaucracy Queue Forever",
    description: "Get KVR appointments in minutes, not months. Smart automation for Munich expats.",
    url: "https://bureaucratiebot.com",
    siteName: "BürokratieBot",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BürokratieBot - Munich Bureaucracy Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BürokratieBot - Skip Munich Bureaucracy Queue Forever",
    description: "Get KVR appointments in minutes, not months. Smart automation for Munich expats.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "google-site-verification-placeholder",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
