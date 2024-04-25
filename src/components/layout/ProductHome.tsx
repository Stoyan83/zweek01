import Button from "../ui/Button";
import Input from "../ui/Input";
import Image from "next/image";

const ProductHome = () => {
  return (
    <>
      <div className="mx-auto object-cove ml-0 pt-24 pb-[90px] relative max-xl:flex max-xl:flex-col max-xl:gap-[70px] max-xl:text-center">
        <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
          <h1 className="max-w-[642px] text-[64px] font-bold tracking-[-0.89px] leading-[74px] text-primary max-sm:text-[40px] max-sm:leading-[50px]">
            Bringing companies and customers together, anywhere
          </h1>
          <p className="max-w-[478px] mt-5 text-lg leading-7">
            An awesome & powerful tools for your business, increase business
            revenue with enterprise-grade links built to acquire and engage
            customers.
          </p>
          <form className="mt-16 max-w-[457px] w-full relative">
            <div className="relative">
              <Input
                className="placeholder:text-placeholder_grey placeholder:text-lg placeholder:font-medium border-2 full w-full h-20 px-6 rounded-xl"
                type="text"
                placeholder="Enter your email"
              />
              <Button
                primary
                className="absolute text-lg inset-y-0 h-14 right-0 my-2 mr-2 px-5 font-bold rounded-lg"
              >
                Try for Free
              </Button>
            </div>
            <p className="ml-4 mt-2  text-sm text-[#404040] text-left">
              Full access. No credit card required.
            </p>
          </form>
          <div className="absolute top-[94px] -right-[242px] max-xl:static max-xl:self-center max-sm:mt-16">
        <Image
          src="/home-product.png"
          alt="charts"
          width={695}
          height={470}
          layout="fixed"
          decoding="async"
        />
      </div>
          <div className="max-w-[1180px] mt-32 mb-[88px] gap-20 flex flex-wrap justify-start items-center  max-sm:mt-0">
            <p className="text-base max-sm:mt-20 max-sm:px-16 font-medium tracking-[-0.22px]">
              Trusted by 1,000+ customers
            </p>
            <Image src="/Google.png" className="max-sm:mx-4 max-sm:ml-12 max-sm:-mr-3 ml-6 mr-7" alt="google" width={98} height={40} />
            <Image
              src="/Atlassian.png"
              alt="atlassian"
              width={98}
              height={40}
            />
            <Image src="/Canon.png" className="max-sm:mx-4 max-sm:ml-12 -ml-2" alt="canon" width={98} height={40} />
            <Image src="/Walmart.png" className="-ml-6" alt="walmart" width={105} height={40} />
            <Image src="/Amazon.png" className=" max-sm:mx-32" alt="amazon" width={98} height={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHome;
