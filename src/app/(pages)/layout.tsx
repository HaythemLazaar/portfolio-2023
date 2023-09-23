import PageNavbar from "@/components/nav/page-navbar";
import "../globals.css";
import type { Metadata } from "next";

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
    <html lang="en">
      <body className="bg-background">
        <PageNavbar />
        <main className="flex min-h-screen flex-col px-36 bg-background py-4">
          {children}
        </main>
      </body>
    </html>
  );
}
