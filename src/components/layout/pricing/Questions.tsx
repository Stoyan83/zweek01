"use client";
import { useState } from "react";
import Section from "@/components/ui/Section";
import MinusIcon from "@/components/ui/icons/MinusIcon";
import PlusIcon from "@/components/ui/icons/PlusIcon";

const questions: {[key: number]: { title: string; content: string }} = {
    1: {
      title: "How Does Roooby CRM Compare To The Competition?",
      content: "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point."
    },
    2: {
      title: "Can I Change Plans Or Cancel My Subscription At Any Time?",
      content: "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point."
    },
    3: {
      title: "How Secure Is My Data With Roooby CRM?",
      content: "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point."
    },
    4: {
      title: "What Is The Uptime Guarantee?",
      content: "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point."
    },
    5: {
      title: "How Can I Add More Emails To My Account?",
      content: "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point."
    }
  };

  const Questions = () => {
    const [isClicked, setIsClicked] = useState<{[key: number]: boolean;}>({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    });

    const handleClick = (id: number) => {
      setIsClicked((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
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
                  <div>
                    <div className="border-t border-placeholder-grey w-full pt-28 pb-8">
                      {isClicked[id] && (
                        <p
                          className={`max-w-[860px] text-block text-lg pt-4 `}
                        >
                          {questions[id].content}
                        </p>
                      )}
                    </div>
                    <div className="lg:w-[945px] absolute top-0 right-0">
                      <div className="flex justify-between pt-[3.8rem]">
                        <h3 className="text-[32px] font-medium leading-[1.3125] tracking-[-0.44px]">
                          {questions[id].title}
                        </h3>
                        <div onClick={() => handleClick(id)} className="cursor-pointer">
                          {isClicked[id] ? (
                            <MinusIcon />
                          ) : (
                            <PlusIcon />
                          )}
                        </div>
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
