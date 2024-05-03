import { useState } from 'react';

interface Tab {
  id: number;
  title: string;
}

interface TabsProps {
  tabs: Tab[];
  onTabChange: (tabId: number) => void;
}

const Tabs = ({ tabs, onTabChange }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-[36px]">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`md:pb-0 lg:pb-7 max-lg:pb-7 sm:pb-0 max-sm:pb-0 font-medium whitespace-nowrap text-lg hover:border-news-green border-b-[3px] focus:outline-none ${activeTab === tab.id ? 'border-news-green' : 'border-transparent text-pricing-gray'}`}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
