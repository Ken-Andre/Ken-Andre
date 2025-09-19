import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "André Kenmogne - Data Scientist",
  description: "Portfolio de André Kenmogne, Data Scientist & Développeur Full-Stack.",
};

import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="!scroll-smooth">
      <body className={`${inter.className} bg-background text-text`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
