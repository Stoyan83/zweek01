'use client';
import { useState } from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import Image from "next/image";

const links = [
  {
    name: "Company",
    links: ["About", "Pricing", "Jobs", "Blog", "Careers"],
  },
  {
    name: "Product",
    links: [
      "Sale software",
      "Features",
      "Privacy and security",
      "Marketplace",
      "Status",
      "API",
    ],
  },
  {
    name: "Discover",
    links: [
      "Partner Program",
      "Get our newsletter",
      "Sales Pipiline",
      "What is CRM?",
      "CRM Comparison",
      "Resources",
    ],
  },
  {
    name: "Help Center",
    links: ["Community", "Knowledge Base", "Academy", "Support"],
  },
];

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="pt-20 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-between">
          <div>
            <Logo />
            <p className="pt-6 max-w-[263px] leading-6 text-sm">
              We built an elegant solution.
              <br /> Our team created a fully integrated sales and marketing
              solution for SMBs
            </p>
            <div className="pt-4 flex flex-row gap-4">
              <Image
                src="/twitter.png"
                alt="twitter"
                width={24}
                height={24}
              ></Image>
              <Image
                src="/facebook.png"
                alt="faceboo"
                width={24}
                height={24}
              ></Image>
              <Image
                src="/linkedin.png"
                alt="linkedin"
                width={24}
                height={24}
              ></Image>
            </div>
          </div>
          {links.map((section, index) => (
            <div key={index} className="w-full sm:w-auto gap-2 mb-4 sm:mb-0">
              <h2 className="text-base font-extrabold">{section.name}</h2>
              <ul className="mt-4">
                {section.links.map((link, i) => (
                  <li key={i} className="mb-2">
                    <Link
                      href={`${link}`}
                      className="text-sm tracking-[0.2px] hover:text-gray-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-28 max-w-[1440px] mx-auto h-[1px] bg-placeholder_grey"></div>

      <div className="max-w-[1180px] mx-auto px-5 pt-[40px] pb-[60px] flex justify-between items-center max-[800px]:flex-col max-[800px]:gap-[50px]">
        <p className="text-sm pr-40 text-customGray tracking-[0.2px]">
          &copy; Copyright 2024
        </p>

        <ul className="flex gap-[40px] mr-4 text-sm tracking-[0.2px] max-[800px]:flex-col max-[800px]:text-center max-[800px]:gap-[20px]">
          <li>
            <Link href="/terms">Terms of Service</Link>
          </li>
          <li>
            <Link href="/policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/coockies">Cookies</Link>
          </li>
        </ul>

        <div className="flex items-center"></div>
        <div className="flex">
          <Image
            src="/language.svg"
            alt="language"
            width={24}
            height={24}
          ></Image>
          <select
            className="bg-white text-sm"
            name="language"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="english">English</option>
            <option value="bulgarian">Български</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
