import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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

const siteUrl =
  process.env.VERCEL === "1" && process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bisi Obateru — Founder, Builder, AfroBisi",
  description:
    "Rebuilding immigration as rights-based infrastructure — JustiGuide, Sunday Swervice, and the work between law, research, and Afrofusion culture.",
  openGraph: {
    title: "Bisi Obateru — Founder, Builder, AfroBisi",
    description:
      "Rebuilding immigration as rights-based infrastructure — and sound that moves between Lagos and the Bay.",
    type: "website",
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
