import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/luxora/lenis-provider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LUXORA | Dental Care Reimagined",
  description:
    "A premium oral-care ritual designed to brighten your smile, support enamel strength, and protect your confidence every day. Whiten. Strengthen. Protect.",
  keywords: [
    "Luxora",
    "dental strips",
    "whitening strips",
    "oral care",
    "premium dental care",
    "enamel safe",
    "dental kit",
  ],
  openGraph: {
    title: "LUXORA | Dental Care Reimagined",
    description:
      "Widen. Strengthen. Protect. Premium oral-care designed for daily confidence.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8FBFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable} h-full`}
    >
      <body className="min-h-full overflow-x-hidden bg-luxora-white text-luxora-navy">
        <LenisProvider>
          <main id="main-content" className="relative">
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
