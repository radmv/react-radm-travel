const BorderedDiv = (props) => {
  const { width, height } = props;

  return (
    <div
      className={`border-4 border-mn-grey-1 ${width} ${height} rounded-2xl`}
    ></div>
  );
};

export default BorderedDiv;
