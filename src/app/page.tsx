import ProductHome from "@/components/layout/ProductHome";
import Main from "@/components/ui/Main";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <Main>
      <Section>
        <ProductHome />
      </Section>
      <Section className="bg-primary">
        <h1>Roooby</h1>
      </Section>
    </Main>
  );
}
