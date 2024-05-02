import Section from "@/components/ui/Section";
import MapAddress from "./MapAddress";
import ContactForm from "./ContactForm";


const Contact = () => {
  return (
    <Section fullWidth>
      <div className="max-w-[1180px] max-sm:pt-5 lg:mb-28 lg:pt-[4.7rem]">
        <div className="flex flex-col justify-start lg:flex-row lg:justify-between">
          <div>
            <h1 className="lg:max-w-[555px] max-sm:px-5 max-sm:text-[40px] text-[64px] tracking-[-0.89px] leading-[1.16] font-bold">
              Get in touch with our lovely team
            </h1>
            <div className="mt-[3.92rem] max-sm:px-5">
              <MapAddress />
            </div>
          </div>
          <div className="lg:pt-48 max-sm:px-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
