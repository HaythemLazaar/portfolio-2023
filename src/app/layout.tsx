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
  title: `Haythem Lazaar Portfolio`,
  description:
    "Product Engineer. Building products for early-stage teams. Saas, Web apps...",
  openGraph: {
    images: "./opengraphg-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haythem Lazaar Portfolio",
    description:
      "Product Engineer. Building products for early-stage teams. Saas, Web apps...",
    creator: "@HaythemLaz",
    images: [
      {
        url: "./twitter-image.png",
        alt: "Building products for early-stage teams",
      },
    ],
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
