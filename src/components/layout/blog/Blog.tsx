"use client";
import { useEffect, useState } from "react";
import Section from "@/components/ui/Section";
import Tabs from "@/components/ui/Tabs";
// import { articles } from "@/api-data/data";
import BlogList from "./BlogList";
import { getPosts } from "@/lib/actions/posts";
import { getRandomDate, getRandomJobRole, getRandomType } from "@/app/utils/helpers";
import { getImages } from "@/lib/actions/images";
import { getUsers } from "@/lib/actions/users";

const Blog = () => {
  const tabs = [
    { id: 1, title: "All Articles" },
    { id: 2, title: "Sales" },
    { id: 3, title: "Marketing" },
    { id: 4, title: "Service" },
    { id: 5, title: "Product" },
    { id: 6, title: "News" },
  ];

  interface Post {
    id: number;
    type: string;
  }


  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  const activeTabTitle = tabs
    .find((tab) => tab.id === activeTab)
    ?.title?.toLowerCase();

  const blogs = posts.filter((blog) => {
    if (activeTab === 1) {
      return blog;
    } else {
      return blog.type === activeTabTitle;
    }
  });


  useEffect(() => {
    Promise.all([getPosts(), getImages(), getUsers()])
      .then(([postsData, imagesData, userData]) => {
        const processedPosts = postsData.map((post: any, index: number) => ({
          ...post,
          date: getRandomDate(),
          type: getRandomType(),
          role: getRandomJobRole(),
          image: imagesData[index].url,
          author: userData.find((user: any) => user.id === post.userId)?.name || "Unknown User"
        }));

        setPosts(processedPosts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);



  return (
    <>
      <Section fullWidth>
        <div className="px-5 pb-0 pt-[4.4rem]">
          <div className="flex flex-col lg:justify-start] max-lg:justify-start md:justify-start sm:justify-center sm:text-center max-sm:text-center">
            <h1 className="max-w-[689px] max-sm:text-[37px] font-bold text-[64px] tracking-[-0.89px] leading-[1.1563]">
              News and insights
              <span className="text-placeholder-grey"> from our experts</span>
            </h1>
            <div className="flex flex-wrap justify-center lg:justify-start max-sm:justify-start max-lg:justify-start md:justify-start sm:justify-center pt-[5.8rem]">
              <Tabs tabs={tabs} onTabChange={handleTabChange} />
            </div>
          </div>
        </div>
      </Section>
      <Section fullWidth className="bg-white">
        <div className="max-w-[73.75rem] px-5 mx-auto max-sm:py-12 py-32">
          <div className="flex gap-7 max-lg:text-center max-lg:flex-col max-lg:items-center">
            <BlogList blogs={blogs} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Blog;
