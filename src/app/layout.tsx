import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import DesktopNavbar from "./components/DesktopNavbar";

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
        className={`${inter.variable} ${bricolage.variable} 
        antialiased h-screen flex gap-10 p-2 sm:p-5 md:p-10 relative`}
      >
        {/* Insert Navbar */}
        <DesktopNavbar/>

        {/* Main Content */}
        <main className={
            `
              w-full p-5 lg:p-10 xl:p-15
              bg-base-200 rounded-md 
              overflow-auto
            `}>
          {children}
        </main>
      </body>
    </html>
  );
}
