import { Fade } from "react-reveal";
import { Card, Heading3, SectionBracket } from "../../Elements";

const CategoriesSection = ({ data }) => {
  return (
    <Fade bottom>
      <SectionBracket sectionId="categories">
        <div className="flex flex-col mb-4 gap-y-14">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-y-5">
                {/* heading */}
                <Heading3>{item.name}</Heading3>
                {/* content */}
                <div>
                  {/* card layout */}
                  <div className="grid grid-cols-4 gap-8">
                    {/* card */}
                    {item.items.map((item, i) => {
                      return (
                        <Fade bottom delay={300 * i} key={i}>
                          <Card
                            imageUrl={item.imageUrl}
                            name={item.name}
                            href={item._id}
                          >
                            {item.isPopular && <Card.Badge value="Popular" />}
                            <Card.Footer
                              name={item.name}
                              city={item.city}
                              country={item.country}
                              href={item._id}
                            />
                          </Card>
                        </Fade>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SectionBracket>
    </Fade>
  );
};

export default CategoriesSection;
