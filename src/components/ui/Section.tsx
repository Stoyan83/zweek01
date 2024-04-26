const Section = ({ children, fullWidth, ...props }: any) => {
  return (
    <section className={`${fullWidth ? '' : 'flex items-center justify-center h-full '}`}>
      <div className={`max-w-[1140px]  flex items-center justify-center`} {...props}>
        {children}
      </div>
    </section>
  );
};

export default Section;
