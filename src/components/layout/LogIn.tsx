import Button from "../ui/Button";

const LogIn = () => {
  return (
    <>
      <Button
        secondary
        className="max-lg:text-lg max-lg:h-11 px-5"
      >
        Log In
      </Button>
      <Button
        primary
        className="max-lg:text-xl px-6 max-lg:h-11 ml-2"
      >
        Try for Free
      </Button>
    </>
  );
};

export default LogIn;
