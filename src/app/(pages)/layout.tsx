import PageNavbar from "@/components/nav/page-navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Haythem Lazaar`,
  description: "Work portfolio",
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageNavbar />
      <main className="flex min-h-screen flex-col px-10 md:px-20 lg:px-36 bg-background py-4">
        {children}
      </main>
    </>
  );
}
