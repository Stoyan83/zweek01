export default function Button({ children, className, primary, secondary, onClick, ...props }: any) {
    let classes = "";
    if (primary) {
      classes = "bg-primary hover:bg-black text-white border-primary";
    } else if (secondary) {
      classes = "bg-white hover:bg-gray-200 text-black";
    }

    return (
      <button
        className={`${className} h-8 rounded  border-[1px] text-xs font-bold whitespace-nowrap ${classes}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
