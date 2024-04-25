import Section from "../ui/Section";

const ProductHome = () => {
  return (
    <>
      <div className="mx-auto ml-0 pt-24 pb-[90px] relative max-xl:flex max-xl:flex-col max-xl:gap-[70px] max-xl:text-center">
        <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
          <h1 className="max-w-[642px] text-[64px] font-bold tracking-[-0.89px] leading-[74px] text-primary max-sm:text-[40px] max-sm:leading-[50px]">
            Bringing companies and customers together, anywhere
          </h1>
          <p className="max-w-[478px] mt-5 text-lg leading-7">
            An awesome & powefull tools for your business, increase business
            revenue with enterprise-grade links built to acquire and engage
            cutomers.
          </p>
        </div>
      </div>
      <img
        decoding="async"
        src="/home-product.png"
        alt="charts"
        className="absolute top-[152px] -right-[90px] max-xl:static max-xl:self-center max-sm:mt-[70px]"
      />
    </>
  );
};

export default ProductHome;
