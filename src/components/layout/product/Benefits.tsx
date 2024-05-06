"use client";
import { items } from "@/static-data/data";
import Benefit from "./Benefit";
import Section from "@/components/ui/Section";

const Benefits = () => {
  return (
    <Section fullWidth className="bg-primary text-white -mt-24">
      <div className="max-w-[73.75rem] mx-auto max-sm:py-12 px-5 py-32">
        <div className="flex gap-7 max-lg:text-center max-lg:flex-col max-lg:items-center">
          <h2 className="max-w-[35rem] leading-[1.2] text-5xl font-bold">
            Here&apos;s how Roooby can benefit your business
          </h2>
          <p className="mt-10 max-w-[35rem] -pt-1 text-lg">
            Build more meaningful and lasting relationships — better understand
            their needs, identify new opportunities to help, address any
            problems faster.
          </p>
        </div>
        <div className="mt-[4.75rem] flex flex-wrap justify-center gap-x-2 gap-y-6">
          {items.map((item) => (
            <div key={item.id}>
              <Benefit
                title={item.title}
                description={item.description}
                icon={item.icon}
                id={item.id}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
