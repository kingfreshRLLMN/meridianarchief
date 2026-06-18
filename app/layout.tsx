import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ArchiveBootScreen from "@/components/archive-boot-screen";
import Navbar from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meridianarchief.vercel.app"),
  applicationName: "Meridian Archief",
  title: {
    default: "Meridian Archief",
    template: "%s | Meridian Archief",
  },
  description:
    "Het publieke stadsarchief van Meridian met inwonersdossiers, ondernemingsregisters en openbare informatie.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "/",
    siteName: "Meridian Archief",
    title: "Meridian Archief",
    description:
      "Bekijk openbare inwonersdossiers en ondernemingsregisters uit de stad Meridian.",
    images: [
      {
        url: "/meridian-social-preview.png",
        width: 1200,
        height: 630,
        alt: "Meridian Archief - publiek stadsarchief",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridian Archief",
    description:
      "Bekijk openbare inwonersdossiers en ondernemingsregisters uit de stad Meridian.",
    images: ["/meridian-social-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#020617] text-[#f8fafc]">
        <ArchiveBootScreen>
          <Navbar />
          {children}
        </ArchiveBootScreen>
      </body>
    </html>
  );
}
