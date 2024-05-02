import { services } from "@/api/data";
import Section from "@/components/ui/Section";
import Service from "./Service";

const Services = () => {
  return (
    <>
      {services.map((item, index) => (
        <Section
          key={index}
          fullWidth
          className={`lg:pt-[8.1rem] max-sm:py-5 -mt-2 max-lg:py-[7.5rem] bg-white ${index === 2 ? 'pt-[8rem] pb-[7.35rem] max-sm:pb-2' : 'pb-[-1.5rem] max-sm:pb-2'}`}
        >
          <div className="max-w-[73.75rem] mx-auto px-5 space-y-[7.5rem] max-lg:space-y-[3.75rem]">
            <Service item={item} />
          </div>
        </Section>
      ))}
    </>
  );
};

export default Services;
