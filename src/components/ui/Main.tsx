const Main = ({ children, ...props }: any) => {
  return (
    <main className="flex items-center justify-center h-full" {...props}>
      <div className="max-w-[1140px] w-full">{children}</div>
    </main>
  );
};

export default Main;
