import { Card, Heading3, SectionBracket } from "../../Elements";

const MostPickedSection = ({ data }) => {
  return (
    <SectionBracket sectionId="browse-by">
      <div className="flex flex-col gap-y-5">
        {/* heading */}
        <Heading3>Most Picked</Heading3>
        {/* content */}
        <div>
          {/* card layout */}
          <div className="grid grid-cols-3 gap-8">
            {/* card */}
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${index === 0 ? "row-span-2" : ""}`}
                >
                  <Card
                    imageUrl={item.imageUrl}
                    name={item.name}
                    href={item._id}
                  >
                    <Card.Description
                      name={item.name}
                      city={item.city}
                      country={item.country}
                    />
                    <Card.Badge value={item.price} />
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionBracket>
  );
};

export default MostPickedSection;
