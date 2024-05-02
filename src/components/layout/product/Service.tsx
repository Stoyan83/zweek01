import Image from "next/image";

interface Bullet {
  id: number;
  text: string;
}

const Service = ({ item }: { item: any }) => (
  <div key={item.id} className={`flex justify-between items-center max-sm:py-5 lg:pt-[3.125rem] border-t-[0.0625rem] border-placeholder-grey max-lg:flex-col max-lg:gap-2.5rem ${item.id === 2 ? 'lg:flex-row-reverse' : ''}`}>
    <div className={`max-w-[30.625rem] ${item.id === 3 ? 'lg:pt-[3.8rem] max-sm:py-5' : ''}`}>
      <div className="px-2 py-[0.375rem] inline-block text-sm font-bold bg-benefit_yellow tracking-[0.875px] uppercase rounded ">
        {item.tag}
      </div>
      <h3 className="mt-[0.62rem] text-5xl font-bold leading-[1.2] tracking-[-0.042rem] max-lg:text-[2.5rem]">
        {item.title}
      </h3>
      <p className="mt-6 text-lg leading-[1.75rem]">
        {item.text.paragraph}
      </p>
      <ul className="mt-5 space-y-4">
        {item.text.bullets.map((bullet: Bullet) => (
          <li key={bullet.id} className="flex gap-5">
            <Image src="/shape.svg" alt="bullet shape" width={18}  height={18} className="mb-4 w-auto h-auto" />
            <p className="text-lg tracking-[0.2px]">{bullet.text}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className={`relative -mt-2 max-sm:mt-12`}>
      <Image
        src={item.image}
        alt={item.tag}
        width={555}
        height={555}
      />
    </div>
  </div>
);

export default Service;
