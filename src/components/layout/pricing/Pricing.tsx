import { prices } from "@/api/data";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import CheckIcon from "@/components/ui/icons/CheckIcon";

const Pricing = () => {
  return (
    <Section fullWidth>
      <div className="max-w-[1180px] pt-24">
        <div className="flex justify-between max-lg:flex-col">
          <h1 className="max-w-[689px] font-bold text-[64px] tracking-[-0.89px] leading-[1.1563]">
            Choose the right plan
            <span className="text-placeholder-grey "> for your business</span>
          </h1>
          <p className="max-w-[360px] text-lg pt-5 lg:pt-16 max-lg:pt-16">
            Built with love for growing businesses. Check out the Roooby CRM
            pricing grid below. Switch between plans at any time.
          </p>
        </div>
      </div>
      <div className="max-w-[1110px]">
        <div className="mt-[6.4rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
          {prices.map((deal) => (
            <div
              key={deal.id}
              className="flex flex-col p-6 mx-auto max-lg:w-[374px] lg:w-[374px] after:text-center text-gray-900 bg-white rounded-xl border border-gray-100"
            >
              <div className="flex">
                <h2 className="mb-4 text-2xl text-start font-semibold">
                  {deal.title}
                </h2>
                {deal.offer && (
                  <p className="mt-1 ml-6 text-xs max-h-[15px] pb-4 pt-1 px-2 tracking-[1.2px] text-news-green bg-green-bg font-bold">
                    RECOMMENDED
                  </p>
                )}
              </div>
              <p className="text-start -mt-2 leading-[26px]">
                {deal.description}
              </p>
              <div className="flex pl-4 items-baseline my-8">
                <span className="text-5xl mt-[-12px] tracking-[-0.67px] leading-[1.2083] font-bold">
                  {deal.price}
                </span>
                <span className="text-pricing-gray text-base font-bold">
                  /{deal.period}
                </span>
              </div>
              <Button
                secondary={deal.button.type === "secondary"}
                primary={deal.button.type === "primary"}
                className="mt-[-0.5rem] h-[3.5rem] font-bold rounded-lg text-lg tracking-[-0.25px]"
              >
                {deal.button.text}
              </Button>
              <p className="text-pricing-gray text-end text-sm tracking-[0.16px] mt-3">
                {deal.trial}
              </p>
              <div className="mt-9 bg-placeholder-grey h-[1px]"></div>
              <ul role="list" className="mb-2 -mt-2 space-y-4 text-left">
                {deal.list.map((item, index) => (
                  <li key={index} className="mt-7 flex items-center space-x-2">
                    <CheckIcon />
                    <p
                      className={`${
                        item.inactive ? "line-through text-gray-300" : ""
                      } leading-[1.625] tracking-[0.18px]`}
                    >
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[7.4rem] bg-placeholder-grey h-[1px]"></div>

      <div className="mt-11 flex flex-col items-center lg:flex-row lg:justify-center lg:max-w-[1480px]">
        <h3 className="text-[24px] lg:text-[32px] font-bold leading-[1.3125] tracking-[-0.44px] text-center lg:text-left">
          Need help choosing the right plan?
        </h3>
        <div className="mt-6 lg:mt-0 lg:ml-12">
          <Button
            secondary
            className="w-full lg:w-auto h-14 text-lg px-5 font-bold rounded-lg mb-4 lg:mb-0 lg:mr-6"
          >
            Contact sales
          </Button>
          <Button
            primary
            className="w-full lg:w-auto h-14 text-lg px-5 font-bold rounded-lg"
          >
            Compare plans
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
