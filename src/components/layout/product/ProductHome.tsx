"use client";
import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Image from "next/image";
import LogoBar from "@/components/ui/LogoBar";
import { logos } from "@/api/data";

const ProductHome = () => {
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = (event: any) => {
    event.preventDefault();
    if (validateEmail(email)) {
      setIsModalOpen(true);
      setEmail("");
    } else {
      setErrorMessage("Please enter a valid email address.");
    }
  };

  const validateEmail = (email: any) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  return (
    <>
      <div className="mx-auto object-cover ml-0  max-sm:pt-5 max-sm:pb-20 lg:pt-16 lg:pb-[90px] relative max-xl:flex max-xl:flex-col max-xl:gap-[70px] max-xl:text-center">
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
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleInputChange}
                required
              />
              <Button
                primary
                className="absolute text-lg inset-y-0 h-14 right-0 my-2 mr-2 px-5 max-sm:px-4 font-bold rounded-lg"
                onClick={handleClick}
              >
                Try for Free
              </Button>
            </div>
            {errorMessage && (
              <p className="ml-4 mt-2 text-sm text-red-500 lg:text-left">
                {errorMessage}
              </p>
            )}
            <p className="ml-4 mt-2 text-sm text-[#404040] lg:text-left">
              Full access. No credit card required.
            </p>
          </form>
          <div className="absolute top-[76px] -right-[242px] max-xl:static max-xl:self-center max-sm:-mt-16 max-sm:px-5">
            <Image
              src="/home-product.svg"
              alt="home"
              width={680}
              height={505}
              decoding="async"
              className="lg:w-[690px] lg:h-[505px] max-sm:mt-24 max-sm:-mb-8"
            />
          </div>
          <div className="pt-4">
            <LogoBar text="Trusted by 1,000+ customers" logos={logos} />
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-auto">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">
                  Thank you for contacting us!
                </h2>
                <p className="text-sm leading-relaxed">
                  We've received your email and will get back to you soon.
                </p>
              </div>
              <div className="flex justify-end p-3 bg-gray-100">
                <button
                  onClick={closeModal}
                  className="text-sm font-semibold px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductHome;
