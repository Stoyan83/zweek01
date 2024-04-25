export default function Button({ children, className, primary, secondary, onClick, ...rest }: any) {
    let classes = "";
    if (primary) {
      classes = "bg-primary hover:bg-black text-white border-primary";
    } else if (secondary) {
      classes = "bg-white hover:bg-[#DCDCDC] text-black border-[#DCDCDC]";
    }

    return (
      <button
        className={`${className} px-[23px] h-8 rounded active:scale-[0.98] border-[1px] text-xs font-bold ${classes}`}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
