import React from "react";

function ShowArticle({
  article,
}: {
  article: {
    id: number;
    title: string;
  };
}) {
  return (
    <div>
      <h1>{article.title}</h1>
    </div>
  );
}

export default ShowArticle;
