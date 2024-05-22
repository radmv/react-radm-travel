import HeroImage from "../../../assets/images/img-hero.jpg";
import {
  Button,
  DescriptionText,
  FeatureItem,
  Heading1,
  SectionBracket,
} from "../../Elements";

const HeroSection = ({ data }) => {
  return (
    <SectionBracket sectionId="hero">
      {/* parent */}
      <div className="flex flex-row justify-between">
        {/* left content */}
        <div className="flex flex-col justify-between">
          {/* top-left content */}
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-5">
              {/* heading 1 */}
              <Heading1>
                Forget Busy Work,
                <br />
                Start Next Vacation
              </Heading1>

              {/* description */}
              <DescriptionText>
                We provide what you need to enjoy your <br />
                holiday with family. Time to make another <br />
                memorable moments.
              </DescriptionText>
            </div>

            {/* cta button */}
            <div>
              <Button buttonFor="link" to="#browse-by">
                Show Me Now
              </Button>
            </div>
          </div>

          {/* bottom-left content */}
          <div className="flex flex-row gap-x-12 mt-8">
            {/* feature */}
            {data.map((item, index) => {
              return (
                <FeatureItem
                  key={index}
                  imageUrl={`/images/icon-${item.name}.svg`}
                  name={item.name}
                  value={item.value}
                />
              );
            })}
          </div>
        </div>

        {/* right content */}
        <div className="pt-8 relative">
          <img
            src={HeroImage}
            alt="hero illustration"
            loading="lazy"
            className="absolute -top-1 -left-8"
          />
          <div className="border-4 border-mn-grey-1 w-[500px] h-[400px] rounded-2xl"></div>
        </div>
      </div>
    </SectionBracket>
  );
};

export default HeroSection;
