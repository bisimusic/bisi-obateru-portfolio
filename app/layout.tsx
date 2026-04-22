import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import {
  articleSeoKeywords,
  getSiteUrl,
  siteDescription,
  siteKeywords,
  siteTitle,
} from "@/lib/site";
import "./globals.css";
import "./portfolio.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s · Bisi Obateru",
  },
  description: siteDescription,
  applicationName: "Bisi Obateru · Bisi Music",
  authors: [{ name: "Bisi Obateru", url: siteUrl }],
  creator: "Bisi Obateru",
  publisher: "Bisi Obateru",
  category: "business",
  keywords: [...siteKeywords, ...articleSeoKeywords],
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "https://immigrationnavigator.substack.com/feed",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Bisi Obateru · Bisi Music",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/bisi-headshot.png",
        alt: "Bisi Obateru — Bisi Music, JustiGuide, Sunday Swervice / Soundch3k",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/bisi-headshot.png"],
  },
  /* Tab icon: app/favicon.ico (Bisi mark, real PNG in .ico; Next optimizes the first <link rel="icon">) */
  icons: {
    apple: { url: "/apple-icon.png", type: "image/png", sizes: "1024x1024" },
  },
};

const modeInitScript = `(function(){try{var m=localStorage.getItem('bisi-mode');document.documentElement.dataset.mode=m||'founder';}catch(e){document.documentElement.dataset.mode='founder';}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-mode="founder"
      className={`${fraunces.variable} ${jetbrains.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <Script id="bisi-mode-init" strategy="beforeInteractive">
          {modeInitScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
