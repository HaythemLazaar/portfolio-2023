import "./globals.css";
import "tailwindcss/tailwind.css";
import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

const lexend = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
});
const unbounded = localFont({
  src: "../../public/Unbounded-Variable.woff2",
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  title: `Haythem Lazaar`,
  description: "Work portfolio",
  openGraph: {
    images: "./opengraphg-image.png",
  },
  twitter: {
    images: ["./twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} font-heading ${lexend.variable} font-par`}
    >
      <body className="bg-background h-auto overflow-x-hidden">
        {children} <Analytics />
        <footer className="p-2">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
