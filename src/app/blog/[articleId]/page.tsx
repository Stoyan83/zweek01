'use client'
import React from "react";
import { articles } from "@/api/data";
import ShowArticle from "@/components/layout/blog/ShowArticle";
import Main from "@/components/ui/Main";
import ArticleDetails from "@/components/layout/blog/ArticleDetails";
import RelatedArticle from "@/components/layout/blog/RelatedArticles";


function ArticlePage({
  params,
}: {
  params: {
    articleId: string;
  };
}) {
  const article = articles.find(
    (article) => article.id === Number(params.articleId)
  );

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Main>
      <ShowArticle article={{ ...article, image: article.image.src }} />
      <ArticleDetails article={article} />
      <RelatedArticle article={article}/>
    </Main>
  );
}

export default ArticlePage;
