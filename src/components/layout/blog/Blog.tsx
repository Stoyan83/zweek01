"use client";
import { useState } from "react";
import Section from "@/components/ui/Section";
import Tabs from "@/components/ui/Tabs";
import { articles } from "@/api/data";
import BlogList from "./BlogList";

const Blog = () => {
  const tabs = [
    { id: 1, title: "All Articles" },
    { id: 2, title: "Sales" },
    { id: 3, title: "Marketing" },
    { id: 4, title: "Service" },
    { id: 5, title: "Product" },
    { id: 6, title: "News" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  const activeTabTitle = tabs
    .find((tab) => tab.id === activeTab)
    ?.title?.toLowerCase();

  const blogs = articles.filter((blog) => {
    if (activeTab === 1) {
      return blog;
    } else {
      return blog.type === activeTabTitle;
    }
  });

  return (
    <>
      <Section fullWidth>
        <div className="px-5 pb-0 pt-[8rem]">
          <div className="flex flex-col lg:justify-start max-lg:justify-start md:justify-start sm:justify-center max-sm:justify-center">
            <h1 className="max-w-[689px] font-bold max-sm:text-[54px] text-[64px] tracking-[-0.89px] leading-[1.1563]">
              News and insights{" "}
              <span className="text-placeholder-grey">from our experts</span>
            </h1>
            <div className="flex lg:justify-start max-lg:justify-start md:justify-center sm:justify-center max-sm:justify-center pt-[5.8rem]">
              <Tabs tabs={tabs} onTabChange={handleTabChange} />
            </div>
          </div>
        </div>
      </Section>
      <Section fullWidth className="bg-white">
        <div className="max-w-[73.75rem] px-5 mx-auto max-sm:py-5 py-32">
          <div className="flex gap-7 max-lg:text-center max-lg:flex-col max-lg:items-center">
            <BlogList blogs={blogs} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Blog;
