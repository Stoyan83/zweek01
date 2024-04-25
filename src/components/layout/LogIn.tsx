import Button from "../ui/Button";

const LogIn = ({ isOpen }: any) => {
  return (
    <>
      <Button
        secondary
        className={`lg:text-xs py-2 pl-5 pr-6 ml-7 ${isOpen ? "max-w-24 text-sm" : ""}`}
      >
        Log In
      </Button>
      <Button
        primary
        className={`lg:text-xs py-1 pl-5 pr-6 ml-6 ${isOpen ? "max-w-[180px] text-sm ml-0 mt-4" : ""}`} // Adjusted width of the button
      >
        Try for Free
      </Button>
    </>
  );
};

export default LogIn;
