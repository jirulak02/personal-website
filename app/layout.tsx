import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/utils/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export type Children = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`} suppressHydrationWarning>
      <body className="relative flex min-h-screen flex-col">
        <ThemeProvider defaultTheme="system" enableSystem>
          <Header normal />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
