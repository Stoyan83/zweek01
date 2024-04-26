const Input = ({ className, ...props }: any) => {

    const inputClasses = `rounded-md focus:outline-none focus:border-primary ${className}`;

    return <input className={inputClasses} {...props} />;
  };

  export default Input;
