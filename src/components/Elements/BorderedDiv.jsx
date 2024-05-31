const BorderedDiv = (props) => {
  const { width, height, children, padding, margin } = props;

  return (
    <div
      className={`border-4 border-mn-grey-1 ${width} ${height} rounded-2xl ${padding} ${margin}`}
    >
      {children}
    </div>
  );
};

export default BorderedDiv;
