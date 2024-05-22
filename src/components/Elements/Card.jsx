import { Link } from "react-router-dom";
import DescriptionText from "./DescriptionText";

const Card = (props) => {
  const { imageUrl, name, city, country, price, href } = props;

  return (
    <div className="rounded-2xl overflow-hidden relative group">
      <img
        src={imageUrl}
        alt={name}
        loading="lazy"
        className="group-hover:scale-125 duration-200"
      />
      {/* card description */}
      <div className="w-full h-1/2 absolute bg-gradient-to-t from-black/70 to-mn-grey-1/0 bottom-0 left-0 right-0">
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
      {/* card badge */}
      <div className="absolute top-0 right-0 rounded-bl-2xl bg-mn-pink px-4 py-2">
        <DescriptionText>
          <dl className="text-white px-6 flex items-center">
            <dt className="font-medium">${price}</dt>
            <dd> / per night</dd>
          </dl>
        </DescriptionText>
      </div>
      <Link
        to={`/details/${href}`}
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
      ></Link>
    </div>
  );
};

export default Card;
