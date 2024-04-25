"use client";
import { useState } from "react";
import Logo from "../ui/Logo";
import { NavLink } from "../ui/NavLink";
import Link from "next/link";
import LogIn from "./LogIn";

const links = [
  { id: 1, href: "/", text: "Product", style: "ml-2" },
  { id: 2, href: "/pricing", text: "Pricing", style: "ml-2" },
  { id: 3, href: "/company", text: "Company", style: "ml-2" },
  { id: 4, href: "/blog", text: "Blog", style: "ml-2" },
  { id: 5, href: "/contact", text: "Contact", style: "ml-2" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="max-w-[1140px] mx-auto mt-7 flex items-center lg:gap-x-32 max-lg:justify-between">
      <div className="flex items-center ml-0 gap-24">
        <Link className="" href="/">
          <Logo />
        </Link>

        <div className="hidden lg:flex items-center">
          {links.map((link) => (
            <NavLink
              key={link.id}
              href={link.href}
              className={`py-1 text-sm mr-10 font-medium border-b-2 border-transparent hover:border-black max-lg:text-xl ${link.style}`}
              exact
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex -mt-2 gap-2 ml-36 max-lg:flex-col max-lg:gap-9">
        <LogIn isOpen={isOpen} />
      </div>
      <div className="flex -mt-2 gap-2 max-lg:flex-col max-lg:gap-9 -mr-3 lg:hidden">
        <button onClick={toggleMenu} className="block mr-4 text-black">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-14 left-0 bg-white h-screen w-full p-4 lg:hidden flex flex-col">
          {links.map((link) => (
            <div key={link.id} className="mb-2">
              <NavLink
                key={link.id}
                href={link.href}
                className="inline-block mr-4 text-black border-b-2 border-transparent hover:border-black text-sm"
                exact
                onClick={toggleMenu}
              >
                {link.text}
              </NavLink>
            </div>
          ))}
          <LogIn isOpen={isOpen} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
