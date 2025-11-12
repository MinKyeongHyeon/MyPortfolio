import type { Metadata } from "next";
import { Inter, Noto_Sans_KR, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-korean",
});

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "MinKyeonghyeon Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${notoSansKR.variable} ${IBMPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
