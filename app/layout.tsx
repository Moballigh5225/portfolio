import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moballighul Islam — Web Front-End Developer",
  description: "Portfolio of Moballighul Islam — Web Front-End Developer with 4+ years experience in React, Next.js, and scalable UI systems.",
  keywords: ["React Developer", "Frontend Developer", "Next.js", "UI Developer", "New Delhi"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
