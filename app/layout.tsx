import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
export const metadata: Metadata = {
  title: "OROX: The Future of Smart Investing",
  description: "OROX puts your money on autopilot with AI-powered quantitative investing, risk-adjusted strategies, and secure blockchain-backed growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
