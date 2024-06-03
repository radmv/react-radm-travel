import { SectionBracket } from "../../Elements";

const FeaturedImageDetailspage = ({ data }) => {
  return (
    <SectionBracket>
      <div className="grid grid-cols-5 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full rounded-2xl overflow-hidden ${
              index === 0 ? "col-span-3 row-span-2" : "col-span-2"
            }`}
          >
            <img
              src={item.url}
              alt={`Featured Image ${index + 1}`}
              className={`object-cover h-full`}
            />
          </div>
        ))}
      </div>
    </SectionBracket>
  );
};

export default FeaturedImageDetailspage;
