"use client";
import React from "react";
import ShowArticle from "@/components/layout/blog/ShowArticle";
import Main from "@/components/ui/Main";
import ArticleDetails from "@/components/layout/blog/ArticleDetails";
import RelatedArticle from "@/components/layout/blog/RelatedArticles";

function ArticlePage() {
  return (
    <Main>
      <ShowArticle />
      <ArticleDetails />
      <RelatedArticle />
    </Main>
  );
}

export default ArticlePage;
