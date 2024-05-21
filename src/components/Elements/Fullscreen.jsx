const Fullscreen = (props) => {
  const { children } = props;

  return <div className="w-screen h-screen overflow-x-hidden">{children}</div>;
};

export default Fullscreen;
