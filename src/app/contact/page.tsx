import { logos } from "@/api/data";
import ContactForm from "@/components/layout/contact/Contact";
import Main from "@/components/ui/Main";
import Section from "@/components/ui/Section";
import LogoBar from "@/components/ui/LogoBar";

export default function ContactPage() {
  return (
    <Main>
      <ContactForm />
      <Section fullWidth className="bg-white">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="max-w-[1180px]">
            <LogoBar text="Our clients and partners" logos={logos} />
          </div>
        </div>
      </Section>
    </Main>
  );
}
