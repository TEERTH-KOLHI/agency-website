import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "stealmyagen",
  description: "agency project",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      {/* Dutch as default */}
      <head>
        {/* Prevent Google Translate popup */}
        <meta name="google" content="notranslate" />
        {/* Iceberg font import */}
        <link
          href="https://fonts.googleapis.com/css2?family=Iceberg&display=swap"
          rel="stylesheet"
        />
        <style>{`
          h1 {
            font-family: 'Iceberg', sans-serif;
            color: white; /* visible in dark mode */
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
