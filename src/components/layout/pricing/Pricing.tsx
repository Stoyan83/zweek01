import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import CheckIcon from "@/components/ui/icons/CheckIcon";

const list = [
  {
    text: "2 team members",
    inactive: false,
  },
  {
    text: "1,000 Contacts & Companies",
    inactive: false,
  },
  {
    text: "5 Campaign Workflows",
    inactive: false,
  },
  {
    text: "10 Nodes Per Campaign",
    inactive: false,
  },
  {
    text: "5 Automation Rules (Triggers)",
    inactive: false,
  },
  {
    text: "3 Plugins/Integrations",
    inactive: false,
  },
  {
    text: "Marketing Automation",
    inactive: true,
  },
  {
    text: "Custom Deal Tracks",
    inactive: true,
  },
  {
    text: "Automated Voicemails",
    inactive: true,
  },
  {
    text: "Post-call Automation",
    inactive: true,
  },
];

const Pricing = () => {
  return (
    <Section fullWidth>
      <div className="max-w-[1180px] pt-24">
        <div className="flex justify-between max-lg:flex-col">
          <h1 className="max-w-[689px] font-bold text-[64px] tracking-[-0.89px] leading-[1.1563]">
            Choose the right plan{" "}
            <span className="text-placeholder-grey ">for your business</span>
          </h1>
          <p className="max-w-[360px] text-lg pt-5 lg:pt-16 max-lg:pt-16">
            Built with love for growing businesses. Check out the Roooby CRM
            pricing grid below. Switch between plans at any time.
          </p>
        </div>
      </div>
      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
        <div className="flex flex-col p-6 mx-auto max-lg:w-[374px] lg:w-[374px] after:text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-2xl text-start font-semibold">Starter</h3>
          <p className="text-start -mt-2 leading-[26px]">
            Get organized and set up simple sales processes lorem ipsum
          </p>
          <div className="flex pl-4 items-baseline my-8">
            <span className="text-5xl mt-[-12px] tracking-[-0.67px] leading-[1.2083] font-bold">
              $8,90
            </span>
            <span className="text-pricing-gray">/month</span>
          </div>
          <Button
            secondary
            className="mt-[-0.5rem] h-[3.5rem] font-bold rounded-lg text-lg tracking-[-0.25px]"
          >
            Try for Free
          </Button>
          <p className="text-pricing-gray text-end text-sm tracking-[0.16px] mt-3">
            Free 14-day trial. No credit card required.
          </p>
          <div className="mt-9 bg-placeholder-grey h-[1px]"></div>
          <ul role="list" className="mb-2 -mt-2 space-y-4 text-left">
            {list.map((item: any, index: number) => (
              <li key={index} className="mt-7 flex items-center space-x-2">
                  <CheckIcon />
                <p
                  className={`${
                    item.inactive ? "text-[#C2C2C2] line-through" : ""
                  } leading-[1.625] tracking-[0.18px]`}
                >
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
