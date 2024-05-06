'use client'
import Section from "@/components/ui/Section";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useSearchParams  } from 'next/navigation';
import { getPost } from "@/lib/actions/posts";
import { getImage } from "@/lib/actions/images";

function ShowArticle() {
  const [article, setArticle] = useState<any>(null);

  const params = useParams<{ articleId: string  }>();
  const searchParams = useSearchParams()

  const type = searchParams.get('type')
  const date = searchParams.get('date')
  const author = searchParams.get('author')

  const id = params.articleId;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const [postData, imageData] = await Promise.all([
          getPost(id),
          getImage(id)
        ]);

        const processedArticle = {
          ...postData,
          date: date,
          type: type,
          author: author,
          image: imageData.url
        };

        setArticle(processedArticle);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };

    fetchArticle();

  }, [id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <Section>
      <div className="flex flex-col flex-wrap items-center pt-10 px-5">
        <div className="max-w-[800px] px-5">
          <div className=" mx-auto">
            <p className="mt-8 font-bold uppercase max-sm:text-xs text-[14px] text-placeholder-grey tracking-[1.4px]">
              {article.type}
            </p>
            <div className="mt-[6px] h-[1px] bg-placeholder-grey"></div>

            <h2 className="max-w-[865px] pt-[22px] font-bold leading-[1.2] max-sm:text-lg text-5xl tracking-[-0.67px]">
              {article.title}
            </h2>
            <div className="max-sm:text-xs flex pt-6 mb-4 mt-auto font-medium">
              <p>
                {article.date}
                <span className="text-placeholder-grey">
                  , by {article.author}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[945px]  mt-5 mx-auto overflow-hidden">
          <Image
            src={article.image}
            loading="lazy"
            width={945}
            height={511}
            alt="Show Article"
            className="w-screen max-h-[511px]"
          />
        </div>
      </div>
    </Section>
  );
}

export default ShowArticle;
