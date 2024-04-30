import Image from "next/image";

interface BenefitProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const Benefit = ({ id, title, description, icon }: BenefitProps) => {
  return (
    <div className={`max-w-[374px] h-[439px] flex flex-col justify-between px-8 pb-20 pt-8 rounded-xl bg-card_bg transition duration-300 ease-in-out transform hover:-translate-y-6 hover:shadow-md hover:bg-benefit_yellow hover:text-black group`}>
      <div className="pt-10">
        <div className="group-hover:filter group-hover:invert">
          <Image height={84} src={icon} alt={title} width={74} />
        </div>
      </div>
      <div className="flex flex-col pt-10">
        <div className={`h-[1px] mt-${id === 1 ? '[37px]' : id === 3 ? '[46px]' : '[62px]'} bg-white group-hover:bg-black`}></div>
        <h3 className={`mt-4 ${id === 1 ? 'mr-32' : ''} text-xl font-bold tracking-[0.38px]`}>{title}</h3>
        <p className={`mt-4 pb-${id === 1 ? '6' : id === 3 ? '12' : '4'} ${id === 1 ? 'mr-[55px]' : 'mr-12'} leading-[26px]`}>{description}</p>
      </div>
    </div>
  );
};

export default Benefit;
