const Input = ({ className, ...props }: any) => {

    const inputClasses = `border-gray-300 rounded-md focus:outline-none focus:border-primary ${className}`;

    return <input className={inputClasses} {...props} />;
  };

  export default Input;
