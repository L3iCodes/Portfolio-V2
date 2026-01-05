import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

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
  title: "Wilhelm",
  description: "Portfolio Description",
  icons:{
    icon: '/icon.png'
  }
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
          antialiased flex flex-col gap-0 md:flex-row 
          md:gap-5 h-screen lg:gap-10 
          p-2 md:p-5 lg:p-10 relative bg-base-100
          overflow-hidden
          `
        }
      >
          {children}
      </body>
    </html>
  );
}