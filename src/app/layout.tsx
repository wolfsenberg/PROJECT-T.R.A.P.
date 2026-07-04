import type { Metadata } from "next";
import "./globals.css";
import { GameProvider } from "@/context/GameContext";

export const metadata: Metadata = {
  title: "Mock Reviewer",
  description: "Mock Reviewer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
