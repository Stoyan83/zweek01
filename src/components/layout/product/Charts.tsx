import { charts } from "@/api-data/data";
import Section from "@/components/ui/Section";
import Image from "next/image";

const Charts = () => {
  return (
    <Section fullWidth className="bg-white">
      <div className="max-w-[73.75rem] lg:pt-[8.8rem] max-sm:pt-5 lg:pb-32 mx-auto px-5">
        <div className="flex flex-col gap-5">
          <div className="pb-8">
            <h2 className="text-5xl font-bold leading-tight tracking-[-0.67px] max-lg:text-[40px] max-lg:text-center">
              Real-life results and revenue
            </h2>
            <p className="mt-3 text-lg max-lg:text-center">
              See how companies like yours have smashed their sales success
              goals
            </p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col md:gap-10">
            {charts.map((item) => (
              <div
                key={item.id}
                className="flex flex-col border-t lg:flex-row border-placeholder-grey pt-16 pb-8"
              >
                <div className={`lg:w-1/3`}>
                  <p className="text-7xl font-bold tracking-[-1px]  max-lg:text-[50px]">
                    {item.percent}
                  </p>
                  <p className="text-xl font-bold">{item.title}</p>
                </div>
                <div className="flex flex-col gap-8 lg:ml-4 w-full lg:w-2/3">
                  <p className="h-full text-xl tracking-[-0.44px] leading-[2.5] font-medium lg:text-3xl">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-5">
                    <Image
                      className="rounded-full"
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                    <div>
                      <p className="font-bold leading-loose">{item.name}</p>
                      <p className="text-customGray leading-loose">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Charts;
