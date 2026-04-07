import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIK Renhold Service | Premium Cleaning in Oslo",
  description: "Top-rated professional cleaning company in Oslo. Transparent pricing, 4.9/5 rating, and 100% satisfaction guarantee. Book your cleaning today.",
  keywords: ["renhold oslo", "vaskehjelp", "flyttevask", "kontorvask", "mik renhold"],
  openGraph: {
    title: "MIK Renhold Service | Premium Cleaning in Oslo",
    description: "Top-rated professional cleaning company in Oslo. Transparent pricing, 4.9/5 rating, and 100% satisfaction guarantee.",
    type: "website",
    locale: "no_NO",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-bg-light text-text-main selection:bg-accent selection:text-primary" suppressHydrationWarning>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
