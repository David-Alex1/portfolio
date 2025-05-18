import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { poppins } from "./fonts";
import Navbar from "./components/navbar";
import { openSans, montserrat } from "./fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${montserrat.variable} antialiased max-w-[350px] lg:max-w-[800px] px-4 mx-auto md:px-1 bg-black/85`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
