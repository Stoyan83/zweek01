import { useRouter } from "next/navigation";
import Image from "next/image";

const SmallArticles = ({ smallArticles, layout, mbTp, backGround }: any) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div
      className={`${backGround} ${
        layout === "vertical"
          ? "flex flex-col lg:w-[555px] mt-4 -mb-20"
          : "mt-[3.2rem] flex flex-wrap"
      }`}
    >
      {smallArticles.map((blog: any) => (
        <div
          key={blog.id}
          className={`${mbTp} ${
            layout === "vertical" ? "" : "md:w-1/2 lg:w-1/3"
          }`}
          onClick={() => handleClick(blog.id)}
          style={{ cursor: "pointer" }}
        >
          <div>
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
            <div className={`${
                layout === "vertical"
                  ? "mt-2"
                  : "mt-6"
              }`}>
              {layout !== "vertical" && (
                <Image
                  src={blog.image}
                  loading="lazy"
                  width={361}
                  height={241}
                  alt={blog.tytle}
                  className="lg:max-w-[555px] lg:max-h-[370px]"
                />
              )}
              <h2
                className={`text-2xl font-bold leading-[1.4] tracking-[-0.33px] mt-4 ${
                  blog.id === 11 ? "max-w-[400px]" : ""
                } ${blog.id === 9 ? "max-w-[486px]" : ""}
                ${blog.id === 10 ? "max-w-[486px]" : ""}
                ${layout !== "vertical" ? "max-w-[361px] -mt-2" : ""}`}
              >
                {blog.title}
              </h2>
              <div className="flex justify-between ">
                <p className="pt-[1.3rem]">
                  {blog.date}
                  <span className="text-placeholder-grey">
                    , by {blog.author}
                  </span>
                </p>
                {layout === "vertical" && (
                  <div className="text-sm pt-6 font-bold uppercase tracking-[1.4px] text-placeholder-grey">
                    {blog.type}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallArticles;
