const Main = ({ children, ...props }: any) => {
  return (
    <main {...props}>
      {children}
    </main>
  );
};

export default Main;
