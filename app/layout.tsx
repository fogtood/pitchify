import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import SessionProviderWrapper from "@/components/sessionProviderWrapper";
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";
import "easymde/dist/easymde.min.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pitchify",
  description: "A Y-Combinator Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        <SessionProviderWrapper>
          <Navbar />
          {children}
          <SanityLive />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
