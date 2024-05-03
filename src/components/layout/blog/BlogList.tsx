import BigArticle from "./BigArticle";
import Image from "next/image";

const BlogList = ({ blogs }: any) => {
  const bigArticle = blogs[0];
  const smallArticles = blogs.slice(1, 7);
  const midlleArticle = blogs.slice(7, 12);
  const lastSmallArticles = blogs.slice(12, 15);

  return (
    <div>
      <div className="-mt-2">
        <BigArticle article={bigArticle} />
      </div>
      <div className="mt-[4.25rem] flex flex-col gap-y-12 gap-x-7 max-lg:mt-[3.12rem] max-lg:flex-col max-lg:items-center">
        <div className="flex flex-wrap">
          {smallArticles.map((blog: any, index: number) => (
            <div key={blog.id} className="flex w-1/3 mb-6">
              <Image src={blog.image} loading="lazy" width={361} height={241} alt="image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
