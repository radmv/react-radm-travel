import ReactHtmlParser from "react-html-parser";
import {
  BookingForm,
  DescriptionText,
  FeatureItem,
  Heading4,
  SectionBracket,
} from "../../Elements";

const DescriptionDetailspage = ({ data }) => {
  return (
    <SectionBracket>
      <div className="grid grid-cols-5 gap-x-8">
        <div className="flex flex-col col-span-3 gap-y-3">
          <Heading4>About the place</Heading4>
          <DescriptionText>{ReactHtmlParser(data.description)}</DescriptionText>
          <div className="grid grid-cols-4 mt-5 gap-y-5">
            {data.facilities.map((item, index) => (
              <FeatureItem
                key={index}
                imageUrl={item.imageUrl}
                name={item.name}
                value={item.qty}
              />
            ))}
          </div>
        </div>
        <div className="col-span-2">
          {/* booking form */}
          <BookingForm itemDetails={data} />
        </div>
      </div>
    </SectionBracket>
  );
};

export default DescriptionDetailspage;
