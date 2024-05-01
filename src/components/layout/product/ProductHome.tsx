"use client";
import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Image from "next/image";

const ProductHome = () => {
  const [email, setEmail] = useState("");

  const handleButtonClick = (event: any) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <>
      <div className="mx-auto object-cover ml-0 pt-24 pb-[90px] relative max-xl:flex max-xl:flex-col max-xl:gap-[70px] max-xl:text-center">
        <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
          <h1 className="max-w-[642px] text-[64px] font-bold tracking-[-0.89px] leading-[74px] text-primary max-sm:text-[40px] max-sm:leading-[50px]">
            Bringing companies and customers together, anywhere
          </h1>
          <p className="max-w-[478px] mt-5 max-sm:text-base text-lg leading-7">
            An awesome & powerful tools for your business, increase business
            revenue with enterprise-grade links built to acquire and engage
            customers.
          </p>
          <form className="mt-16 max-w-[457px] w-full relative">
            <div className="relative  max-sm:pl-5">
              <Input
                className="placeholder:text-placeholder-grey border-white placeholder:text-lg placeholder:font-medium border-2 full w-full h-20 px-6 rounded-xl"
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Button
                primary
                className="absolute text-lg inset-y-0 h-14 right-0 my-2 mr-2 px-5 max-sm:px-4 font-bold rounded-lg"
                onClick={handleButtonClick}
              >
                Try for Free
              </Button>
            </div>
            <p className="ml-4 mt-2 text-sm text-[#404040] lg:text-left">
              Full access. No credit card required.
            </p>
          </form>
          <div className="absolute top-[94px] -right-[242px] max-xl:static max-xl:self-center max-sm:-mt-16 max-sm:px-5">
            <Image
              src="/home-product.svg"
              alt="home"
              width={680}
              height={505}
              decoding="async"
              className="lg:w-[690px] lg:h-[505px] max-sm:mt-24 max-sm:-mb-8"
            />
          </div>
          <div className="max-w-[1180px] lg:mt-32 lg:mb-[88px] gap-20 flex flex-wrap justify-start items-center max-sm:pb-12">
            <p className="text-base max-sm:mt-20 max-sm:pr-0 max-sm:pl-[4.7rem] font-medium tracking-[-0.22px]">
              Trusted by 1,000+ customers
            </p>
            <Image
              src="/Google.png"
              className="max-sm:mx-4 max-sm:ml-12  max-sm:-mr-3 ml-6 lg:-mr-1 max-sm:w-[94px] w-[97px] h-[32px]"
              alt="google"
              width={97}
              height={32}
            />
            <Image
              src="/Atlassian.png"
              alt="atlassian"
              width={135}
              height={17}
              className="max-sm:w-[94px] w-[135px] h-[17px]"

            />
            <Image
              src="/Canon.png"
              className="max-sm:mx-4 max-sm:ml-12 lg:-ml-2 w-[95px] h-[20px] max-sm:w-[94px]"
              alt="canon"
              width={95}
              height={20}

            />
            <Image
              src="/Walmart.png"
              className="lg:-ml-6 max-sm:-ml-6 w-[129px] h-[30px] max-sm:w-[94px]"
              alt="walmart"
              width={129}
              height={30}
            />
            <Image
              src="/Amazon.png"
              className="max-sm:mx-32 max-sm:w-[94px] w-[95px] h-[29px] lg:-ml-5"
              alt="amazon"
              width={95}
              height={29}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHome;
