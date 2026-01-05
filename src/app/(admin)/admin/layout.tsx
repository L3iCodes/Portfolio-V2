import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import AdminNavbar from "./components/AdminNavbar";
import { redirect } from "next/navigation";

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
  title: "Admin",
  description: "Admin Description",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if(process.env.DEVELOPMENT_STAGE === 'deployed') redirect('/')

  return (
    <div className="overflow-auto flex flex-col gap-5 w-full bg-base-100 relative">
      <AdminNavbar />

      <div className="h-full flex flex-col space-y-10">
        {children}
      </div>
      
    </div>
  );
}
