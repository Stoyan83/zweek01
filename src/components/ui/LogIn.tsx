import Button from "./Button";

const LogIn = ({ isOpen }: any) => {
  return (
    <>
      <Button
        secondary
        className={`lg:text-xs max-sm:ml-0  py-2 pl-5 pr-6 ml-7 ${
          isOpen
            ? "max-w-24 sm:ml-0 text-xs flex justify-center items-center"
            : ""
        }`}
      >
        Log In
      </Button>
      <Button
        primary
        className={`lg:text-xs max-sm:ml-0  py-1 pl-5 pr-6 ml-6 ${
          isOpen
            ? "max-w-24 sm:ml-0 text-sm ml-0 mt-4 flex justify-center items-center"
            : ""
        }`}
      >
        Try for Free
      </Button>
    </>
  );
};

export default LogIn;
