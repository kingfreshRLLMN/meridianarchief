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
  title: "Meridian Archief",
  description:
    "Publiek stadsarchief met lore, inwoners, bedrijven en gebeurtenissen uit Meridian.",
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
