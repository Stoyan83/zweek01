"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ href, exact, children, ...props }: any) => {
  const pathname = usePathname();
  const activeClassName = "border-black";
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className = `${props.className} ${activeClassName}`;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
