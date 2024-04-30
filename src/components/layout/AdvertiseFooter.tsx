import Image from "next/image";
import Button from "../ui/Button";
import RightArrowIcon from "../ui/icons/RightArrowIcon";

const AdvertiseFooter = () => {
  return (
    <div className="relative mt-[9.2rem] text-white flex flex-col items-center">
      <div className="max-w-[1180px] mx-auto px-5 flex flex-col justify-between items-start pt-[120px] pb-[117px] max-lg:py-[60px] max-lg:flex-col max-lg:gap-7 max-lg:text-center">
        <h2 className="max-w-[770px] text-left text-[64px] font-bold tracking-[-0.89px] leading-[1.1563] max-lg:text-[40px]">
          Ready to supercharge your business?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 w-full max-w-[1180px]">
          <p className="max-w-[570px] text-lg font-medium text-footer-text text-center lg:text-left">
            Ask about <span className="font-black">Roooby</span> products,
            pricing, implementation, or anything else. Our highly trained reps
            are standing by, ready to help.
          </p>
          <div className="flex flex-col items-center lg:items-end lg:ml-auto lg:mt-0">
            <Button
              secondary
              className="h-16 font-bold text-lg px-8 rounded-lg flex items-center"
            >
              Try for Free
              <RightArrowIcon />
            </Button>
            <p className="text-white text-sm font-medium max-w-[570px] mx-auto mt-3 text-center lg:text-left">
              Full access. No credit card required.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/background.png"
        alt="background image"
        className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
        width={1000}
        height={580}
      />
    </div>
  );
};

export default AdvertiseFooter;
