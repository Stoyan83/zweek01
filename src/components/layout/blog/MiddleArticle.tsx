import Image from "next/image";

const MiddleArticle = ({ midlleArticle }: any) => {
  return (
    <div className="max-w-[555px] lg:mr-10">
      <p className="text-sm font-bold text-placeholder-grey tracking-[1.4px] uppercase">
        {midlleArticle.type}
      </p>
      <div className="mt-[10px] h-[1px] bg-placeholder-grey"></div>
      <Image
        src={midlleArticle.image}
        alt={midlleArticle.title}
        width={555}
        height={370}
        className="mt-10"
      />
      <h2 className="mt-5 font-bold text-[32.5px] tracking-[-0.44px] leading-[1.4]">
        {midlleArticle.title}
      </h2>
      <div className="mt-[18px] flex font-medium">
        <p>{midlleArticle.date},</p>
        <p className="text-placeholder-grey ">&nbsp;by {midlleArticle.author}</p>
      </div>
    </div>
  );
};

export default MiddleArticle;
