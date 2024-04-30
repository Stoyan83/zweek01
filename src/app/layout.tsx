import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import AdvertiseFooter from "@/components/ui/AdvertiseFooter";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roooby",
  description: "Learning Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        {children}
        <footer>
          <AdvertiseFooter />
          <Footer />
        </footer>
      </body>
    </html>
  );
}
