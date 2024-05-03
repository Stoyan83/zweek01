"use client";
import { useState } from "react";
import Section from "@/components/ui/Section";
import Tabs from "@/components/ui/Tabs";
import { articles } from "@/api/data";

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

  console.log(blogs);


  return (
    <Section fullWidth>
      <div className="max-w-[1180px] pb-10 pt-[4.6rem]">
        <div className="flex flex-col justify-start">
          <h1 className="max-w-[689px] font-bold max-sm:text-[54px] text-[64px] tracking-[-0.89px] leading-[1.1563]">
            News and insights <span className="text-placeholder-grey">from our experts</span>
          </h1>
          <div className="pt-[5.8rem]">

          <Tabs tabs={tabs} onTabChange={handleTabChange} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
