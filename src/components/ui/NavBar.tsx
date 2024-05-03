"use client";
import { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "./NavLink";
import LogIn from "./LogIn";

const links = [
  { id: 1, href: "/", text: "Product", style: "ml-0" },
  { id: 2, href: "/pricing", text: "Pricing", style: "ml-4" },
  { id: 3, href: "/company", text: "Company", style: "ml-2" },
  { id: 4, href: "/blog", text: "Blog", style: "ml-2" },
  { id: 5, href: "/contact", text: "Contact", style: "ml-2" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  if (isOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <div className="max-w-[1180px] mx-auto px-5 h-[80px] flex items-center lg:gap-x-8 max-lg:justify-between relative z-200">
      <div className="flex items-center gap-24">
        <Logo className="" />
        <nav className="hidden lg:flex items-center">
          {links.map((link) => (
            <NavLink
              key={link.id}
              href={link.href}
              className={`py-2 px-1 text-sm mr-10 font-medium border-b-2 border-transparent hover:border-black max-lg:text-xl ${link.style}`}
              exact
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="hidden lg:flex -mt-1 ml-[9.8rem] max-lg:flex-col max-lg:gap-9">
        <LogIn isOpen={isOpen} />
      </div>
      <div className="flex -mt-2 gap-2 max-lg:flex-col max-lg:gap-9 -mr-3 lg:hidden">
        <button
          onClick={toggleMenu}
          className="block max-sm:mr-8 mr-20 text-black"
        >
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
        <div className="absolute top-14 left-0 bg-darkWhite h-screen w-full p-4 lg:hidden flex flex-col">
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
          <div className="-ml-1">
            <LogIn isOpen={isOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
