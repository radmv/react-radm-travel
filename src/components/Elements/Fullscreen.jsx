const Fullscreen = (props) => {
  const { children } = props;

  return <div className="w-screen h-screen">{children}</div>;
};

export default Fullscreen;
