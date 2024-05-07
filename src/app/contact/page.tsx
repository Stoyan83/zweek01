import { logos } from "@/static-data/data";
import Contact from "@/components/layout/contact/Contact";
import Main from "@/components/ui/Main";
import LogoSection from "@/components/ui/LogoSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roooby Contact",
  description: "Get in touch with Roooby to explore partnership opportunities, resolve queries, or seek assistance. Our dedicated team is here to support your business needs and ensure smooth communication.",
};

export default function ContactPage() {
  return (
    <Main>
      <Contact />
      <LogoSection text="Our clients and partners" logos={logos} />
    </Main>
  );
}
