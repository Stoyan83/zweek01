import BigArticle from "./BigArticle";
import SmallArticles from "./SmallArticles";
import MiddleArticle from "./MiddleArticle";

const BlogList = ({ blogs }: any) => {
  const bigArticle = blogs[0];
  const smallArticles = blogs.slice(1, 7);
  const midlleArticle = blogs[7];
  const midlleArticles = blogs.slice(8, 11);
  const lastSmallArticles = blogs.slice(11, 14);

  return (
    <div>
      <div className="-mt-1">
        <BigArticle article={bigArticle} />
      </div>
      <div className="mt-[4.25rem] flex flex-col gap-y-12 max-lg:gap-x-7 max-lg:mt-[3.12rem] max-lg:flex-col max-lg:items-center">
        <SmallArticles layout="horizontal"  mbTp={"mb-[7.4rem]"} smallArticles={smallArticles} />
      </div>
      <div className="flex lg:flex-row  sm:flex-col max-sm:flex-col md:flex-row  cursor-pointer">
        {midlleArticle && <MiddleArticle midlleArticle={midlleArticle} />}
        <div className="">
          <SmallArticles layout="vertical" mbTp={"mb-[3.2rem]"} smallArticles={midlleArticles} />
        </div>
      </div>
      <div className="mt-[4.25rem] pb-0 flex flex-col gap-y-12 gap-x-7 max-lg:mt-[3.12rem] max-lg:flex-col max-lg:items-center">
        <SmallArticles layout="horizontal"  mbTp={"mb-[2rem]"} smallArticles={lastSmallArticles} />
      </div>
    </div>
  );
};

export default BlogList;
