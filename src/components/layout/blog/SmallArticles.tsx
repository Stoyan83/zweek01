import Image from "next/image";

const SmallArticles = ({ smallArticles, layout }: any) => {
  return (
    <div
      className={`${
        layout === "vertical"
          ? "flex flex-col lg:w-[555px] mt-4 -mb-4"
          : "mt-[3.2rem] flex flex-wrap"
      }`}
    >
      {smallArticles.map((blog: any) => (
        <div
          key={blog.id}
          className={`max-sm:mb-0 ${
            layout === "vertical"
              ? "mb-[2.3rem]"
              : "mb-[7.4rem] md:w-1/2 lg:w-1/3"
          }`}
        >
          <div className="cursor-pointer">
            {layout !== "vertical" && (
              <div className="text-sm font-bold uppercase tracking-[1.4px] text-placeholder-grey">
                {blog.type}
              </div>
            )}
            <div
              className={`${
                layout === "vertical"
                  ? "mt-[14px] max-w-[555px]"
                  : "mt-[14px] max-w-[361px]"
              } h-[1px] bg-placeholder-grey`}
            ></div>
            <div className="mt-6">
              {layout !== "vertical" && (
                <Image
                  src={blog.image}
                  loading="lazy"
                  width={361}
                  height={241}
                  alt="image"
                />
              )}
              <h2
                className={`text-2xl font-bold leading-[1.4] tracking-[-0.33px] mt-4 ${
                  blog.id === 11 ? "max-w-[400px]" : ""
                } ${blog.id === 9 ? "max-w-[486px]" : ""}
                ${blog.id === 10 ? "max-w-[486px]" : ""}
                ${layout !== "vertical" ? "max-w-[361px]" : ""}`}
              >
                {blog.title}
              </h2>
              <p className="pt-[1.3rem]">
                {blog.date}
                <span className="text-placeholder-grey">
                  , by {blog.author}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallArticles;
