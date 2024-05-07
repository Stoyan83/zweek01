import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import { PostProvider } from "./context/PostsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roooby",
  description: "Discover Roooby, your go-to solution for powerful link building to acquire and engage customers. Elevate your business revenue with our enterprise-grade tools and strategies. Learn Next.js with Roooby today!",
  metadataBase: new URL('https://second-project-stoyan.vercel.app/'),
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
        <PostProvider>
        {children}
        </PostProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
