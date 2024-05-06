import { feedback } from "@/static-data/data";
import NextLink from "@/components/ui/NextLink";
import Section from "@/components/ui/Section";
import Image from "next/image";

const ClientsFeedback = () => {
  return (
    <Section fullWidth>
      <div className="max-w-[73.75rem] lg:pt-[7.9rem] max-sm:pt-10 pl-0 lg:pb-32 mx-auto px-5">
        <div className="flex justify-between max-lg:gap-6 max-lg:flex-col max-lg:items-center">
          <h2 className="max-w-[580px] text-5xl font-bold leading-[1.2083] tracking-[-0.67px] max-lg:text-[40px] max-lg:text-center">
            We love our Customers and They love us too
          </h2>
          <NextLink href="#">See all</NextLink>
        </div>
      </div>

      <div className="-mt-12 flex justify-center gap-x-[30px] gap-y-[50px] flex-wrap">
        {feedback.map((client) => (
          <div key={client.id} className="max-w-[360px] max-sm:px-5 w-full">
            <div className="flex flex-col w-full h-full  max-w-[360px]">
              <Image
                src={"/quotes.svg"}
                alt="quotes"
                width={44}
                height={44}
                className="mb-8"
              ></Image>
              <div className="bg-placeholder-grey h-[1px]"></div>
              <div className="flex flex-col gap-8 w-full">
                <p className="font-medium text-2xl mt-[22px] mb-[45px] tracking-[-0.33px] leading-[1.4167]">
                  {client.comment}
                </p>
              </div>
            </div>
            <div className="-mt-8 flex items-center gap-5">
              <Image
                className="rounded-full"
                src={client.image}
                alt={client.name}
                width={50}
                height={50}
              />
              <div>
                <p className="font-bold leading-loose">{client.name}</p>
                <p className="text-customGray leading-loose">{client.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ClientsFeedback;
