'use client'
import Section from "@/components/ui/Section";
import React from "react";
import Image from "next/image";

function ShowArticle({
  article,
}: {
  article: {
    id: number;
    title: string;
    type: string;
    image: string;
    date: string;
    author: string;
  };
}) {
  return (
    <Section>
      <div className="flex flex-col flex-wrap items-center pt-10 px-5">
        <div className="max-w-[800px] px-5">
          <div className=" mx-auto">
            <p className="mt-8 font-bold uppercase text-[14px] text-placeholder-grey tracking-[1.4px]">
              {article.type}
            </p>
            <div className="mt-[6px] h-[1px] bg-placeholder-grey"></div>

            <h2 className="max-w-[865px] pt-[22px] font-bold leading-[1.2] text-5xl tracking-[-0.67px] max-lg:text-[40px]">
              {article.title}
            </h2>
            <div className="flex pt-6 mb-4 mt-auto font-medium">
              <p>
                {article.date}
                <span className="text-placeholder-grey">
                  , by {article.author}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[945px] mx-auto overflow-hidden">
          <Image
            src={article.image}
            loading="lazy"
            width={945}
            height={511}
            alt="Show Article"
            className="max-h-[511px] max-w-[945px]"
          />
        </div>
      </div>
    </Section>
  );
}

export default ShowArticle;
