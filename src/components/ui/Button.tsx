import RightArrowIcon from "./icons/RightArrowIcon";

const Button = ({
  children,
  className,
  primary,
  secondary,
  white,
  green,
  onClick,
  arrowIcon,
  ...props
}: any) => {
  let classes = "";
  if (primary) {
    classes = "bg-primary hover:bg-black text-white border-primary";
  } else if (secondary) {
    classes = "bg-white hover:bg-gray-200 text-black";
  } else if (green) {
    classes = "mt-8 lg:w-[206px] max-sm:h-[36px] max-sm:my-5 sm:my-5 w-[160px] sm:py-3 sm:pl-5 max-sm:pl-5 lg:h-[56px] lg:px-5 text-lg text-white font-bold bg-[#00CC61] hover:bg-[#40b87a] border-[#00CC61] rounded-lg max-sm:text-base max-sm:py-3"
  } else if (white) {
    classes = "bg-white hover:bg-gray-200 text-black h-16 font-bold text-lg px-8 rounded-lg flex items-center"
  }

  return (
    <button
      className={`${className} rounded border-[1px] font-bold flex items-center justify-center whitespace-nowrap ${classes}`}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
      {arrowIcon && <RightArrowIcon className="ml-4" />}
    </button>
  );
};

export default Button;
