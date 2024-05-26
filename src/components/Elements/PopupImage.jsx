import BorderedDiv from "./BorderedDiv";

const PopupImage = (props) => {
  const { imageUrl, imageAlt, popTo, width, height } = props;

  return (
    <div className="relative">
      <img
        src={imageUrl}
        alt={imageAlt}
        loading="lazy"
        className={`absolute ${popTo}`}
      />
      <BorderedDiv width={width} height={height} />
    </div>
  );
};

export default PopupImage;
