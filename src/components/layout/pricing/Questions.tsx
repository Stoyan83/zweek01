"use client";
import { useState } from "react";
import Section from "@/components/ui/Section";
import MinusIcon from "@/components/ui/icons/MinusIcon";
import PlusIcon from "@/components/ui/icons/PlusIcon";

interface TextContents {
  [key: number]: string;
}

const Questions = () => {
  const [showTextBlocks, setShowTextBlocks] = useState<{[key: number]: boolean;}>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const toggleTextBlock = (id: number) => {
    setShowTextBlocks((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const textContents: TextContents = {
    1: "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
    2: "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
    3: "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
    4: "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
    5: "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
  };

  const titles: TextContents = {
    1: "How Does Roooby CRM Compare To The Competition?",
    2: "Can I Change Plans Or Cancel My Subscription At Any Time?",
    3: "How Secure Is My Data With Roooby CRM?",
    4: "What Is The Uptime Guarantee?",
    5: "How Can I Add More Emails To My Account?",
  };

  return (
    <Section fullWidth className="bg-white">
      <div className="max-w-[73.75rem] mx-auto max-sm:py-5 px-5 pt-32 ">
        <h2 className="max-w-[594px] pb-0 -mt-2 leading-[1.2] tracking-[-0.89px] font-bold text-[3.9rem]">
          Frequently asked questions
        </h2>
        <div className="-pt-16 mt-[4.5rem]">
          {[1, 2, 3, 4, 5].map((id) => (
            <div key={id} className="flex justify-end">
              <div className="max-w-[945px] w-[945px] relative">
                <div onClick={() => toggleTextBlock(id)}>
                  <div className="border-t border-placeholder-grey w-full pt-28 pb-8">
                    {showTextBlocks[id] && (
                      <p
                        className={`max-w-[860px] text-block text-lg pt-4 `}
                      >
                        {textContents[id]}
                      </p>
                    )}
                  </div>
                  <div className="lg:w-[945px] absolute top-0 right-0">
                    <div className="flex justify-between pt-[3.8rem]">
                      <h3 className="text-[32px] font-medium leading-[1.3125] tracking-[-0.44px]">
                        {titles[id]}
                      </h3>
                      {showTextBlocks[id] ? (
                        <MinusIcon />
                      ) : (
                        <PlusIcon />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Questions;
