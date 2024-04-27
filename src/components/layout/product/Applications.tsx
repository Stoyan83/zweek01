import { logoApps } from "@/api/data";
import Link from "next/link";
import Image from "next/image";

const Applications = () => {
  return (
    <div className="mt-[8.5rem] mx-auto px-5 text-center">
      <h2 className="text-5xl font-bold tracking-[-0.67px] max-lg:text-[40px]">Over 300+ integrations</h2>
      <p className="mt-5 text-lg tracking-tighter">
        Expand the capabilities of <span className="font-black">Roooby</span> with hundreds of apps and integrations
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {logoApps.map((logo) => (
          <Image
            key={logo.id}
            src={logo.image}
            alt="app logo"
            width={0}
            height={0}
            className="max-w-none w-max px-[32px] py-[24px] bg-white"
          />
        ))}
      </div>

      <Link href="/prices" className="mt-24 block text-2xl font-medium max-lg:text-[1.375rem]">
        See all apps and extensions &gt;
      </Link>
    </div>
  );
};

export default Applications;
