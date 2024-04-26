import Benefits from "@/components/layout/product/Benefits";
import ProductHome from "@/components/layout/product/ProductHome";
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
    </Main>
  );
}
