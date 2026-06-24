import type { Metadata } from "next";
import "./globals.css";
import { GameProvider } from "@/context/GameContext";

export const metadata: Metadata = {
  title: "PUP CCIS Comprehensive Exam - Mock Test",
  description:
    "Gamified mock test reviewer for PUP College of Computer and Information Sciences comprehensive exam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-[#33ff00] antialiased">
        <div className="crt-overlay" />
        <div className="crt-vignette" />
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
