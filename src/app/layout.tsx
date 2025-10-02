import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import FooterNew from "@/components/FooterNew/FooterNew";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Pioneer Automation Agency - AI Voice Agents & CRM Solutions",
  description:
    "Transform your business with 100+ automation experts. Specializing in Voice AI agents, CRM integrations, social media automation, and custom solutions. 150+ businesses automated successfully.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <head>
        {/* Prevent Google Translate popup */}
        <meta name="google" content="notranslate" />

        {/* SUSE Mono font import */}
        <link
          href="https://fonts.googleapis.com/css2?family=SUSE+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />

        <style>{`
          h1 {
            font-family: 'SUSE Mono', monospace;
            color: black; /* visible in light mode */
          }
          // body {
          //   font-family: 'SUSE Mono', monospace;
          // }
        `}</style>
      </head>
      <body className="antialiased bg-white">
        <Header />
        <PageTransition>{children}</PageTransition>
        <FooterNew />
      </body>
    </html>
  );
}
