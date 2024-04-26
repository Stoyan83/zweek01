import { services } from "@/api/data";
import Section from "@/components/ui/Section";
import Service from "./Service";

const Services = () => {
  return (
    <Section fullWidth className="pb-[13rem] pt-[8.15rem] -mt-2 max-lg:py-[7.5rem] bg-white">
    <div className="max-w-[73.75rem] mx-auto px-5 space-y-[7.5rem] max-lg:space-y-[3.75rem]">
      {services.map((item) => <Service key={item.id} item={item} />)}
    </div>
  </Section>
  );
};

export default Services;
