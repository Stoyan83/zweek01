import Section from "@/components/ui/Section";
import SmallArticles from "./SmallArticles";
import { articles } from "@/api-data/data";

const RelatedArticle = ({ article }: any) => {
  const related = articles.filter((blog) => {
    return blog.type === article.type;
  });

  return (
    <Section fullWidth className="mb-10">
      <div className="max-w-[1180px] max-sm:px-5 max-lg:pr-0 max-lg:pl-12 lg:pr-0 lg:pl-12  mx-auto">
        <h2 className="pt-28 text-[64px] font-bold leading-[1.1] max-lg:text-center tracking-[-0.89px] max-lg:text-[40px]">
          More from this topic
        </h2>
        <div className="mt-[1.5rem] flex flex-col gap-y-12 max-lg:gap-x-8 max-lg:mt-[3.12rem] max-lg:flex-col max-lg:items-center">
          <SmallArticles
            smallArticles={related}
            mbTp={"mb-[3.5rem]"}
            backGround={"bg-darkWhite"}
          />
        </div>
      </div>
    </Section>
  );
};

export default RelatedArticle;
