"use client";
import { items } from "@/api/data";
import Benefit from "./Benefit";

const Benefits = () => {
  return (
    <div className="max-w-[1180px] mx-auto px-5 py-32">
      <div className="flex gap-7 max-lg:text-center max-lg:flex-col max-lg:items-center">
        <h2 className="max-w-[560px] leading-[1.2] text-5xl font-bold">
          Here&apos;s how Roooby can benefit your business
        </h2>
        <p className="max-w-[490px] mt-10 -pt-1 text-lg">
          Build more meaningful and lasting relationships — better understand
          their needs, identify new opportunities to help, address any problems
          faster.
        </p>
      </div>
      <div className="mt-[76px] flex flex-wrap justify-center gap-x-2 gap-y-6">
        {items.map((item) => (
          <div key={item.id}>
            <Benefit title={item.title} description={item.description} icon={item.icon} id={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
