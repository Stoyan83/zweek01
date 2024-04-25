import Button from "../ui/Button";

const LogIn = ({ isOpen }: any) => {
  return (
    <>
      <Button
        secondary
        className={`max-lg:text-lg max-lg:h-auto px-4 ${isOpen ? "max-w-24 text-sm" : ""}`}
      >
        Log In
      </Button>
      <Button
        primary
        className={`max-lg:text-xl px-5 max-lg:h-auto ml-2 ${isOpen ? "max-w-40 text-sm ml-0 mt-4" : ""}`}
      >
        Try for Free
      </Button>
    </>
  );
};

export default LogIn;
