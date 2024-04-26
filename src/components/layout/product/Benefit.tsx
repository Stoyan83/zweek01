import Image from "next/image";

interface BenefitProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const Benefit = ({ id, title, description, icon }: BenefitProps) => {
    let lineClass = "h-[1px] mt-[62px] bg-white group-hover:bg-black"
    let h3Class = "mt-4 text-xl font-bold tracking-[0.38px]"
    let pClass = "mt-4 pb-4 mr-12 leading-[26px]"

  if (id == 1) {
    lineClass = "h-[1px] mt-[37px] bg-white group-hover:bg-black"
    h3Class = "mt-4 mr-32 text-xl font-bold tracking-[0.38px]"
    pClass = "mt-4 pb-6 mr-[55px] leading-[26px]"
  }

  if (id == 3) {
    lineClass = "h-[1px] mt-[46px] bg-white group-hover:bg-black"
    h3Class = "mt-4 pb-4 text-xl font-bold tracking-[0.38px]"
    pClass = "pb-12 mr-12 leading-[26px]"
  }

  return (
    <div className="max-w-[374px] h-[439px] flex flex-col justify-between px-8 pb-20 pt-8 rounded-xl bg-card_bg transition duration-300 ease-in-out transform hover:-translate-y-6 hover:shadow-md hover:bg-benefit_yellow hover:text-black group">
      <div className="pt-10">
        <div className="group-hover:filter group-hover:invert">
          <Image height={84} src={icon} alt={title} width={74} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className={lineClass}></div>
        <h3 className={h3Class}>{title}</h3>
        <p className={pClass}>{description}</p>
      </div>
    </div>
  );
};

export default Benefit;
