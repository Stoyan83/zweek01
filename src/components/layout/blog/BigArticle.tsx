import { useRouter } from "next/navigation";
import Image from "next/image";

const BigArticle = ({ article }: any) => {
  const router = useRouter();


  const handleClick = () => {
    router.push(`/blog/${article.id}?type=${article.type}&date=${article.date}&author=${article.author}`);
  };

  return (
    <div className="flex max-lg:flex-col max-lg:items-center justify-between gap-6 cursor-pointer" onClick={handleClick}>
      <div className="flex flex-col max-w-[555px] w-full border-t-placeholder-grey border-y-[1px] border-b-placeholder-grey">
        <p className="mt-6 font-bold uppercase text-sm text-placeholder-grey tracking-[1.4px]">
          {article?.type}
        </p>
        <h2 className="mt-[13px] font-bold text-[40px] leading-[1.2] tracking-[-0.56px] max-lg:text-[32px]">
          {article?.title}
        </h2>
        <div className="flex pt-10 mb-4 mt-auto font-medium">
          <p>
            {article?.date}
            <span className="text-placeholder-grey">
              , by {article?.author}
            </span>
          </p>
        </div>
      </div>

      <div className="lg:max-w-[555px] lg:max-h-[370px]">
        <Image src={article?.image} width={555} height={370} alt={article?.title} className="lg:max-w-[555px] lg:max-h-[370px]" />
      </div>
    </div>
  );
};

export default BigArticle;
