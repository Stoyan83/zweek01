import Image from 'next/image';

const LogoBar = ({ text, logos }: any) => {
  return (
    <div className="max-w-[1180px] lg:mt-32 lg:mb-[88px] gap-20 flex flex-wrap justify-start items-center max-sm:flex-col max-sm:pb-12">
      <p className="text-base max-sm:mt-20 max-sm:pr-1 font-medium tracking-[-0.22px]">
        {text}
      </p>
      {logos.map((image: any, index: number) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={`max-sm:mx-4 max-sm:ml-1 max-sm:-mr-2 ${index === 0 ? 'max-sm:-mr-3 ml-6 lg:-mr-1' : ''} ${index === 1 ? 'max-sm:ml-0 lg:-mr-1' : ''} ${index === 2 ? 'lg:-ml-2 max-sm:ml-1' : ''} ${index === 3 ? 'lg:-ml-6 max-sm:-ml-6' : ''} ${index === 4 ? 'max-sm:mx-32 lg:-ml-5' : ''} max-sm:w-[94px] w-[${image.width}px] h-[${image.height}px]`}
        />
      ))}
    </div>
  );
};

export default LogoBar;
