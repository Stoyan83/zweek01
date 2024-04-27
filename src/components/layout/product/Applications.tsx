import { logoApps } from "@/api/data";
import Link from "next/link";
import Image from "next/image";

const Applications = () => {
  return (
    <div className="mt-[9rem] mb-14 mx-auto px-5 text-center">
      <h2 className="text-5xl -mt-2 font-bold tracking-[-1px]">Over 300+ integrations</h2>
      <p className="mt-5 text-lg">
        Expand the capabilities of <span className="font-black">Roooby</span> with hundreds of apps and integrations
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-16 ">
        {logoApps.map((logo) => (
          <Image
            key={logo.id}
            src={logo.image}
            alt="app logo"
            width={0}
            height={0}
            className="max-w-none w-max px-[43.4px] py-[24px] bg-white"
          />
        ))}
      </div>

      <Link href="/prices" className="mt-20 block text-2xl font-medium max-lg:text-[1.375rem]">
        See all apps and extensions &gt;
      </Link>
    </div>
  );
};

export default Applications;
