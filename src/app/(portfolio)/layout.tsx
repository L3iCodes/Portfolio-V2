import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "../globals.css";

import SideNavbar from "@/src/components/SideNavbar";
import MobileNavbar from "@/src/components/MobileNavbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter", 
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio Description",
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        {/* Navbar */}
        <SideNavbar/>
        <MobileNavbar />

        {/* Main Content */}
        <main className={`w-full bg-base-200 rounded-md overflow-auto relative`}>
          {children}
        </main>
      </>
  );
}
