import Link from "next/link";
import React from "react";
import Image from "next/image";

interface LogoProps {
  [key: string]: any;
}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Link href="/" className="w-[93px]">
      <Image src="/logo.svg" width={93} height={25} alt="logo" {...props} />
    </Link>
  );
};

export default Logo;
