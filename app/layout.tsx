import { AxiomWebVitals } from "next-axiom";
import { Inter } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SkipToContent from "@/components/layout/SkipToContent";
import ThemeProvider from "@/components/utils/ThemeProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`} suppressHydrationWarning>
      <body className="relative flex min-h-screen flex-col">
        <SkipToContent />
        <ThemeProvider defaultTheme="system" enableSystem>
          <Header normal />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
        <AxiomWebVitals />
      </body>
    </html>
  );
}
