import { services } from "@/api/data";
import Section from "@/components/ui/Section";
import Image from "next/image";

const Services = () => {
  return (
    <Section fullWidth className="py-[124px] -mt-2 max-lg:py-[60px] bg-white">
      <div className="max-w-[1180px] mx-auto px-5 space-y-[120px] max-lg:space-y-[60px]">
        {services.map((item) => (
          <div key={item.id} className={`flex justify-between items-center pt-[50px] border-t-[1px] border-placeholder_grey max-lg:flex-col max-lg:gap-10 ${item.id === 2 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="max-w-[485px]">
              <div className="px-2 py-[6px] inline-block text-sm font-bold bg-benefit_yellow tracking-[1.4px] uppercase rounded ">
                {item.tag}
              </div>
              <h3 className="mt-[15px] text-5xl font-bold leading-[1.2] tracking-[-0.67px] max-lg:text-[40px]">
                {item.title}
              </h3>
              <p className="mt-6 text-lg leading-[28px]">
                {item.text.paragraph}
              </p>
              <ul className="mt-5 space-y-4">
                {item.text.bullets.map((bullet) => (
                  <li key={bullet.id} className="flex gap-5">
                    <Image src="/shape.svg" alt="bullet shape" width={18}  height={18} className="mb-4" />
                    <p className="text-lg tracking-[0.2px]">{bullet.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`relative -mt-2 ${item.id === 3 ? 'mb-16' : ''}`}>
              <Image
                src={item.image}
                alt={item.tag}
                width={555}
                height={555}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
