import React, { useState, useContext } from "react";
import Section from "@/components/ui/Section";
import SmallArticles from "./SmallArticles";
import PostContext from "@/app/context/PostsContext";
import { useSearchParams } from 'next/navigation';
import Pagination from "@/components/ui/Pagination";


const RelatedArticle = () => {
  const { posts } = useContext(PostContext);
  const searchParams = useSearchParams();
  const type = searchParams.get('type');


  const articlesPerPage = 3;

  const related = posts.filter((blog: any) => {
    return blog.type === type;
  });


  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(related.length / articlesPerPage);


  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = related.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Section fullWidth className="mb-10">
      <div className="max-w-[1180px] max-sm:px-5 max-lg:pr-0 max-lg:pl-12 lg:pr-0 lg:pl-12  mx-auto">
        <h2 className="pt-28 text-[64px] font-bold leading-[1.1] max-lg:text-center tracking-[-0.89px] max-lg:text-[40px]">
          More from this topic
        </h2>
        <div className="mt-[1.5rem] flex flex-col gap-y-12 max-lg:gap-x-8 max-lg:mt-[3.12rem] max-lg:flex-col max-lg:items-center">
          <div className="pt-10">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
            </div>
          <SmallArticles
            smallArticles={currentArticles}
            mbTp={"mb-[3.5rem]"}
            backGround={"bg-darkWhite"}
          />
        </div>
      </div>
    </Section>
  );
};

export default RelatedArticle;
