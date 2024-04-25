import Logo from "../ui/Logo";
import { NavLink } from "../ui/NavLink";
import Link from "next/link";
import Button from "../ui/Button";

const links = [
  { id: 1, href: "/", text: "Product" },
  { id: 2, href: "/pricing", text: "Pricing" },
  { id: 3, href: "/company", text: "Company", style: "ml-2" },
  { id: 4, href: "/blog", text: "Blog", style: "ml-2" },
  { id: 5, href: "/contact", text: "Contact", style: "ml-2" },
];

const NavBar = () => {
  return (
    <nav className="container flex justify-between items-center mt-7">
      <div className="flex items-center ml-36 gap-28">
        <Link
          className=" text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
          href="/"
        >
          <Logo />
        </Link>

        <div className="flex items-center">
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
      <div className="flex -mb-1 gap-3 max-lg:flex-col max-lg:gap-9">
        <Button secondary className="max-lg:text-xl max-lg:h-11 whitespace-nowrap">
          Log In
        </Button>
        <Button primary className="max-lg:text-xl max-lg:h-11 whitespace-nowrap">
          Try for Free
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
