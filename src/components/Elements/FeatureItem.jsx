import DescriptionText from "./DescriptionText";

const FeatureItem = (props) => {
  const { imageUrl, name, value } = props;
  return (
    <div className="flex flex-col gap-y-3">
      <img src={imageUrl} alt={name} loading="lazy" className="max-w-8" />
      <DescriptionText>
        <span className="text-mn-primary font-medium">{value}</span> {name}
      </DescriptionText>
    </div>
  );
};

export default FeatureItem;
