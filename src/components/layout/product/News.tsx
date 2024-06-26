import { news } from "@/static-data/data";
import Link from "next/link";
import Image from "next/image";
import NextLink from "@/components/ui/NextLink";
import Section from "@/components/ui/Section";

const News = () => {
  return (
    <Section fullWidth className="bg-white">
      <div className="lg:pt-44 max-sm:py-5 lg:pb-28 max-w-[73.75rem] mx-auto px-5">
        <div className="flex justify-between max-lg:flex-col max-lg:items-center max-lg:gap-6">
          <h2 className="text-[4rem] font-bold tracking-[-0.89px] leading-snug max-lg:text-[2.5rem] max-lg:text-center">
            What&apos;s new at Roooby?
          </h2>
          <NextLink href="/blog">See all</NextLink>
        </div>
        <div className="mt-[4.25rem] flex gap-y-12 gap-x-7 max-lg:mt-[3.12rem] max-lg:flex-col max-lg:items-center">
          {news.map((item) => (
            <div key={item.id} className="max-w-[555px]">
              <div className="text-sm font-bold uppercase tracking-[1.4px] text-placeholder-grey">
                {item.tag}
              </div>
              <div className="mt-[14px] h-[1px] bg-placeholder-grey"></div>
              <Link href="/blog">
                <div className="mt-[22px] hover:contrast-75">
                  <Image
                    width={555}
                    height={370}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full"
                  />
                </div>
              </Link>
              <h3 className="text-[2rem] font-bold leading-snug tracking-[-0.44px] mt-[24px]">
                {item.title}
              </h3>
              <p className="mt-[1.19rem]">
                <span className="text-base font-medium">{item.date}, </span>
                <span className="text-lg font-medium text-placeholder-grey">
                  by {item.publisher}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default News;
