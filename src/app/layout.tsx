import "./globals.css";
import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import localFont from "next/font/local";

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
      <body>{children}</body>
    </html>
  );
}
