
import BigArticle from "./BigArticle";
import SmallArticles from "./SmallArticles";

const BlogList = ({ blogs }: any) => {
  const bigArticle = blogs[0];
  const smallArticles = blogs.slice(1, 7);
  const midlleArticle = blogs.slice(7, 11);
  const lastSmallArticles = blogs.slice(11, 14);

  return (
    <div>
      <div className="-mt-2">
        <BigArticle article={bigArticle} />
      </div>
      <div className="mt-[4.25rem] flex flex-col gap-y-12 max-lg:gap-x-7 max-lg:mt-[3.12rem] max-lg:flex-col max-lg:items-center">
        <SmallArticles smallArticles={smallArticles} />
      </div>
      
      <div className="mt-[4.25rem] flex flex-col gap-y-12 gap-x-7 max-lg:mt-[3.12rem] max-lg:flex-col max-lg:items-center">
        <SmallArticles smallArticles={lastSmallArticles} />
      </div>
    </div>
  );
};

export default BlogList;
