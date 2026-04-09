
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIK RENHOLD SERVICE | Profesjonelt Renhold i Oslo",
  description: "Topprangert renholdsfirma i Oslo (4.9/5). Vi tilbyr husvask, flyttevask, kontorvask og spesialrenhold med 100% fornøydgaranti. Sjekk pris og bestill i dag.",
  keywords: ["renhold oslo", "flyttevask", "husvask", "vaskehjelp", "kontorvask", "mik renhold service"],
  openGraph: {
    title: "MIK RENHOLD SERVICE | Profesjonelt Renhold i Oslo",
    description: "Topprangert renholdsfirma i Oslo (4.9/5). Vi tilbyr husvask, flyttevask og kontorvask med 100% fornøydgaranti.",
    type: "website",
    locale: "nb_NO",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-text-main bg-bg-light antialiased selection:bg-accent selection:text-primary">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
