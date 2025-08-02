import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "GENS ICHIHARA FUTSAL OFFICIAL",
  description: "The official website of GENS ICHIHARA futsal team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${garamond.className} text-white pt-16`}>{children}</body>
    </html>
  );
}
