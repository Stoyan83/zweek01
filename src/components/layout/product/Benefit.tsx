import Image from "next/image";
import React from "react";

interface BenefitProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const Benefit = ({ id, title, description, icon }: BenefitProps) => {
  let lineMarginTop = "62px";
  let h3MarginTop = "4";
  let pMarginTop = "4";
  let pPaddingBottom = "4";
  let pMarginRight = "12";

  if (id === 1) {
    lineMarginTop = "37px";
    h3MarginTop = "4";
    pMarginTop = "4";
    pPaddingBottom = "6";
    pMarginRight = "55px";
  } else if (id === 3) {
    lineMarginTop = "46px";
    h3MarginTop = "4";
    pMarginTop = "4";
    pPaddingBottom = "12";
    pMarginRight = "12";
  }

  return (
    <div className="max-w-[374px] h-[439px] flex flex-col justify-between px-8 pb-20 pt-8 rounded-xl bg-card_bg transition duration-300 ease-in-out transform hover:-translate-y-6 hover:shadow-md hover:bg-benefit_yellow hover:text-black group">
      <div className="pt-10">
        <div className="group-hover:filter group-hover:invert">
          <Image height={84} src={icon} alt={title} width={74} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className={`h-[1px] mt-[${lineMarginTop}] bg-white group-hover:bg-black`}></div>
        <h3 className={`mt-${h3MarginTop} text-xl font-bold tracking-[0.38px]`}>{title}</h3>
        <p className={`mt-${pMarginTop} pb-${pPaddingBottom} mr-${pMarginRight} leading-[26px]`}>{description}</p>
      </div>
    </div>
  );
};

export default Benefit;
