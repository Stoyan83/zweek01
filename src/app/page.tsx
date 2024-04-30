import Applications from "@/components/layout/product/Applications";
import Benefits from "@/components/layout/product/Benefits";
import Charts from "@/components/layout/product/Charts";
import ClientsFeedback from "@/components/layout/product/ClientsFeedback";
import News from "@/components/layout/product/News";
import ProductHome from "@/components/layout/product/ProductHome";
import Services from "@/components/layout/product/Services";
import Main from "@/components/ui/Main";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <Main>
      <Section>
        <ProductHome />
      </Section>
      <Section fullWidth className="bg-primary text-white -mt-24">
        <Benefits />
      </Section>
      <Services />
      <Section>
        <Applications/>
      </Section>
      <Section fullWidth className="bg-white">
        <News/>
      </Section>
      <Section fullWidth className="bg-white">
        <Charts/>
      </Section>
      <Section fullWidth>
        <ClientsFeedback/>
      </Section>
    </Main>
  );
}
