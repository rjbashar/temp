import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Programming Tutorials",
  description: "Interactive programming tutorials for university-level computer science and engineering courses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 scroll-pt-24`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
