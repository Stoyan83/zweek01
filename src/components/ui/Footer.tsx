'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

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
      "Sales Pipeline",
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
    <div className="pt-[7.5rem] bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between max-lg:items-center">
          <div className="w-full lg:w-auto max-w-[263px] max-sm:pb-6  sm:pb-6 text-center lg:text-left lg:mb-8">
            <Logo className="max-sm:pl-[5.5rem] sm:pl-[5.5rem] lg:pl-0"/>
            <p className="pt-6 leading-6 text-sm">
              We built an elegant solution.
              <br /> Our team created a fully integrated sales and marketing
              solution for SMBs
            </p>
            <div className="pt-4 flex justify-center lg:justify-start flex-row gap-4">
              <Image
                src="/twitter.png"
                alt="twitter"
                width={24}
                height={24}
              ></Image>
              <Image
                src="/facebook.png"
                alt="facebook"
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
            <div key={index} className="w-full lg:w-auto mb-4 lg:mb-0">
              <h2 className="text-base font-extrabold text-center lg:text-left">{section.name}</h2>
              <ul className="mt-4">
                {section.links.map((link, i) => (
                  <li key={i} className="text-center lg:text-left mb-2">
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

      <div className="max-w-[1180px] mx-auto px-5 pt-[40px] pb-[60px] flex justify-between items-center flex-wrap">
        <p className="text-sm lg:pr-40 text-customGray tracking-[0.2px] mb-4 lg:mb-0">
          &copy; Copyright 2024
        </p>

        <ul className="flex gap-4 lg:gap-20 text-sm tracking-[0.2px] mb-4 lg:mb-0">
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

        <div className="flex items-center">
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
