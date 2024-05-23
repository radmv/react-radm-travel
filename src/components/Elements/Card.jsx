import { Link } from "react-router-dom";
import DescriptionText from "./DescriptionText";

const Card = (props) => {
  const { children, imageUrl, name, href } = props;

  return (
    <div className="relative overflow-hidden rounded-2xl group">
      <img
        src={imageUrl}
        alt={name}
        loading="lazy"
        className="duration-200 group-hover:scale-125"
      />
      {children}
      {/* card link */}
      <Link
        to={`/details/${href}`}
        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
      ></Link>
    </div>
  );
};

{
  /* card description */
}
const Description = (props) => {
  const { name, city, country } = props;

  return (
    <div className="absolute bottom-0 left-0 right-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-mn-grey-1/0">
      <div className="absolute bottom-6 left-6">
        <DescriptionText>
          <dl className="text-white">
            <dt className="text-xl font-normal">{name}</dt>
            <dd>
              {city}, {country}
            </dd>
          </dl>
        </DescriptionText>
      </div>
    </div>
  );
};

{
  /* card badge */
}
const Badge = (props) => {
  const { value } = props;

  const isBadgeValueNumber = (value) => {
    return typeof value === "number";
  };

  return (
    <div className="absolute top-0 right-0 px-4 py-2 rounded-bl-2xl bg-mn-pink">
      <DescriptionText>
        <dl className="flex items-center px-6 text-white">
          <dt className="font-medium">
            {isBadgeValueNumber(value) ? `$${value}` : value}
          </dt>
          <dd>{isBadgeValueNumber(value) ? "/ per night" : " Choice"}</dd>
        </dl>
      </DescriptionText>
    </div>
  );
};

Card.Badge = Badge;
Card.Description = Description;

export default Card;
