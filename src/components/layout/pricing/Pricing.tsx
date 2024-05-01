import Section from "@/components/ui/Section";

const Pricing = () => {
  return (
    <Section fullWidth>
      <div className="max-w-[1180px] pt-24">
        <div className="flex justify-between max-lg:flex-col">
          <h1 className="max-w-[689px] font-bold text-[64px] tracking-[-0.89px] leading-[1.1563]">
            Choose the right plan <span className="text-placeholder-grey ">for your business</span>
          </h1>
          <p className="max-w-[360px] text-lg pt-5 lg:pt-16 max-lg:pt-16">
            Built with love for growing businesses. Check out the Roooby CRM
            pricing grid below. Switch between plans at any time.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
