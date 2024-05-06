import React, { useState } from "react";
import BigArticle from "./BigArticle";
import SmallArticles from "./SmallArticles";
import MiddleArticle from "./MiddleArticle";
import Pagination from "@/components/ui/Pagination";

const BlogList = ({ blogs }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 14;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = blogs.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(blogs.length / articlesPerPage);

  const onPageChange = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <div className="">
      <div className="lg:-mt-20 lg:pb-20">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>

      <div className="-mt-1 max-sm:px-5">
        <BigArticle article={currentArticles[0]} />
      </div>
      <div className="mt-[4.25rem] max-sm:px-5 flex flex-col gap-y-12 max-lg:gap-x-7 max-lg:mt-[3.12rem] max-lg:flex-col max-lg:items-center">
        <SmallArticles
          layout="horizontal"
          mbTp={"mb-[7.4rem] max-sm:mb-12"}
          smallArticles={currentArticles.slice(1, 7)}
        />
      </div>
      <div className="flex lg:flex-row max-sm:px-5 sm:flex-col max-sm:flex-col md:flex-row cursor-pointer">
        {currentArticles[7] && (
          <MiddleArticle midlleArticle={currentArticles[7]} />
        )}
        <div className="">
          <SmallArticles
            layout="vertical"
            mbTp={"mb-[3.2rem]"}
            smallArticles={currentArticles.slice(8, 11)}
          />
        </div>
      </div>
      <div className="mt-[4.25rem] pb-0 flex flex-col max-sm:px-5 gap-y-12 gap-x-7 max-lg:mt-[3.12rem] max-lg:flex-col max-lg:items-center">
        <SmallArticles
          layout="horizontal"
          mbTp={"mb-[2rem]"}
          smallArticles={currentArticles.slice(11)}
        />
      </div>

      <div className="pt-40">

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      </div>
    </div>
  );
};

export default BlogList;
