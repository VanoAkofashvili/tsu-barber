const AuthTemplate = ({ children, title }) => {
  return (
    <section className="w-full h-full bg-blurredWp bg-cover bg-center flex flex-col justify-center items-center">
      <h1 className="text-lg text-white font-medium mb-3">{title}</h1>
      <div className="w-1/2">{children}</div>
    </section>
  );
};

export default AuthTemplate;
