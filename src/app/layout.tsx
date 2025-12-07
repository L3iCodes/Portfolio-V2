import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import DesktopNavbar from "../components/SideNavbar";
import MobileNavbar from "../components/MobileNavbar";
import SideNavbar from "../components/SideNavbar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="dark" lang="en">
      <body
        className={
          `${inter.variable} ${bricolage.variable} 
          antialiased h-screen flex flex-col gap-0 md:flex-row 
          md:gap-5 lg:gap-10 
          p-2 md:p-5 lg:p-10 relative
          `
        }
      >
        {/* Navbar */}
        <SideNavbar/>
        <MobileNavbar />

        {/* Main Content */}
        <main 
          className={
            `
            w-full bg-base-200 rounded-md 
            p-5 md:p-10 xl:p-15
            overflow-auto relative
            `
          }>
          
          {children}
        </main>
      </body>
    </html>
  );
}
