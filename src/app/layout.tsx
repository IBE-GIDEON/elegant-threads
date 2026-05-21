import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elegance Stitches | Bespoke Tailoring & Alterations",
  description:
    "A premium tailoring studio offering bespoke garments, alterations, bridal wear, and polished finishing with elegant craftsmanship.",
  keywords: [
    "seamstress",
    "tailoring",
    "custom dressmaking",
    "alterations",
    "bridal wear",
    "fashion design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} h-full antialiased`}>
      <body className={`${inter.className} min-h-full overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
