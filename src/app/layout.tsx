import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew/FooterNew";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pioneer Automation Agency - AI Voice Agents & CRM Solutions",
  description: "Transform your business with 100+ automation experts. Specializing in Voice AI agents, CRM integrations, social media automation, and custom solutions. 150+ businesses automated successfully.",
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
            color: black; /* visible in light mode */
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <FooterNew />
      </body>
    </html>
  );
}
