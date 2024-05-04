import Section from "@/components/ui/Section";
import SmallArticles from "./SmallArticles";
import { articles } from "@/api/data";

const RelatedArticle = ({ article }: any) => {
  const related = articles.filter((blog) => {
    return blog.type === article.type;
  });

  return (
    <Section fullWidth className="mb-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mt-[4.25rem] flex flex-col gap-y-12 max-lg:gap-x-8 max-lg:mt-[3.12rem] max-lg:flex-col max-lg:items-center">
          <SmallArticles smallArticles={related} backGround={"bg-darkWhite"} />
        </div>
      </div>
    </Section>
  );
};

export default RelatedArticle;
