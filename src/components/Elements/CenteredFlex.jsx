const CenteredFlex = (props) => {
  const { children, direction, width = "w-full", height = "h-full" } = props;

  return (
    <div
      className={`flex justify-center items-center ${direction} ${width} ${height}`}
    >
      {children}
    </div>
  );
};

export default CenteredFlex;
