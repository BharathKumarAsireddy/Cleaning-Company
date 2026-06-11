import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Precision Cleaning Services | Residential & Commercial Cleaning",
    template: "%s | Precision Cleaning Services",
  },
  description:
    "Precision Cleaning Services delivers professional residential, commercial, and deep cleaning with eco-friendly products, vetted teams, and a 100% satisfaction guarantee.",
  keywords: [
    "cleaning company",
    "residential cleaning",
    "commercial cleaning",
    "deep cleaning",
    "house cleaning services",
    "office cleaning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-700">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
