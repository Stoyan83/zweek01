import React from 'react';

interface LogoProps {
  [key: string]: any;
}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <img src="/logo.svg" alt="logo" {...props} />
  );
};

export default Logo;
