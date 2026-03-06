import type { Metadata } from "next";
import "./globals.css";
import { montserrat, openSans, playfair } from "./fonts";

export const metadata: Metadata = {
  title: "David Alex | Robotics Portfolio",
  description:
    "Portfolio of David Alex, a recent Robotics Engineering graduate focused on automation, simulation, and intelligent robotic systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${montserrat.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
