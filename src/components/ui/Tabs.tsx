import { useState } from 'react';
import Button from './Button';

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
    <div className="flex gap-x-[36px]">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`pb-7 font-medium text-lg hover:border-news-green border-b-[3px] focus:outline-none ${activeTab === tab.id ? 'border-news-green' : 'border-transparent text-pricing-gray'}`}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
