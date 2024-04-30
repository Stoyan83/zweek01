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
  return (
    <div className="pt-20 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-between">
          <div>
            <Logo />
            <p className="pt-10 max-w-[263px] leading-6 text-sm">
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
              <ul>
                {section.links.map((link, i) => (
                  <li key={i} className="mb-1">
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
    </div>
  );
};

export default Footer;
