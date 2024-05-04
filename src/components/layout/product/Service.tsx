import Button from "@/components/ui/Button";
import Image from "next/image";

interface Bullet {
  id: number;
  text: string;
}

const Service = ({ item }: { item: any }) => (
  <div
    key={item.id}
    className={`relative flex justify-between items-center max-sm:py-5 lg:pt-[3.125rem] border-t-[0.0625rem] border-placeholder-grey max-lg:flex-col max-lg:gap-2.5rem ${
      item.id === 2 ? "lg:flex-row-reverse" : ""
    }`}
  >
    <div
      className={`max-w-[30.625rem] ${
        item.id === 3 ? "lg:pt-[3.8rem] max-sm:py-5" : ""
      }`}
    >
      <div className="px-2 py-[0.375rem] inline-block text-sm font-bold bg-benefit_yellow tracking-[0.875px] uppercase rounded ">
        {item.tag}
      </div>
      <h3 className="mt-[0.62rem] text-5xl font-bold leading-[1.2] tracking-[-0.042rem] max-lg:text-[2.5rem]">
        {item.title}
      </h3>
      <p className="mt-6 text-lg leading-[1.75rem]">{item.text.paragraph}</p>
      <ul className="mt-5 space-y-4">
        {item.text.bullets.map((bullet: Bullet) => (
          <li key={bullet.id} className="flex gap-5">
            <div>
              <Image
                src="/shape.svg"
                alt="bullet shape"
                width={18}
                height={18}
                className="mb-4 w-auto h-auto"
              />
            </div>
            <p className="text-lg tracking-[0.2px]">{bullet.text}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="relative">
      <div className="absolute bottom-0 left-0 w-full">
        {item.id === 2 && (
          <div className="mx-auto mb-4 lg:mb-8 lg:w-[450px] lg:h-[80px] bg-primary rounded-xl flex flex-col lg:flex-row items-center">
            <p className="text-lg ml-2 font-bold lg:ml-4 lg:mr-4 tracking-[-0.25px] text-white whitespace-nowrap mb-2 lg:mb-0">
              Automate your sales & marketing
            </p>
            <Button
              primary
              className="px-4 py-[10px] lg:py-4 lg:ml-2 font-bold text-lg !bg-news-green hover:!bg-black rounded-lg"
            >
              Start now
            </Button>
          </div>
        )}
      </div>
      <Image src={item.image} alt={item.tag} width={555} height={555} />
    </div>
  </div>
);

export default Service;
