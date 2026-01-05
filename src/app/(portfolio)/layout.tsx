import "../globals.css";

import SideNavbar from "@/src/components/SideNavbar";
import MobileNavbar from "@/src/components/MobileNavbar";

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
