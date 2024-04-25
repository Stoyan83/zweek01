const Section = ({ children, ...props }: any) => {
    return (
      <section className={`flex items-center justify-center`} {...props}>
        {children}
      </section>
    );
  };

  export default Section;
