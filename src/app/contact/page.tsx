"use client";
import { logos } from "@/static-data/data";
import Contact from "@/components/layout/contact/Contact";
import Main from "@/components/ui/Main";
import LogoSection from "@/components/ui/LogoSection";

export default function ContactPage() {
  return (
    <Main>
      <Contact />
      <LogoSection text="Our clients and partners" logos={logos} />
    </Main>
  );
}
