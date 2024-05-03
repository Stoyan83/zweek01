import Image from "next/image";

const SmallArticles = ({ smallArticles }: any) => {
  return (
    <div className="flex flex-wrap mt-[3.2rem]">
      {smallArticles.map((blog: any) => (
        <div key={blog.id} className={`md:w-1/2 lg:w-1/3 mb-[7.4rem] max-sm:mb-0`}>
          <div className="cursor-pointer">
            <div className="text-sm font-bold uppercase tracking-[1.4px] text-placeholder-grey">
              {blog.type}
            </div>
            <div className="mt-[14px] max-w-[361px] h-[1px] bg-placeholder-grey"></div>
            <div className="mt-6">
              <Image
                src={blog.image}
                loading="lazy"
                width={361}
                height={241}
                alt="image"
              />
              <h2 className="max-w-[361px] text-2xl font-bold leading-[1.4] tracking-[-0.33px] mt-4">
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
