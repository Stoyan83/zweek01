import React from "react";
import { articles } from "@/api/data";
import ShowArticle from "@/components/layout/blog/ShowArticle";

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
    <>
      <ShowArticle article={article} />
    </>
  );
}

export default ArticlePage;
