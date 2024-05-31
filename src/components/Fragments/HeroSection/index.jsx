import { Fade } from "react-reveal";
import HeroImage from "../../../assets/images/img-hero.jpg";
import {
  Button,
  DescriptionText,
  FeatureItem,
  Heading1,
  PopupImage,
  SectionBracket,
} from "../../Elements";

const HeroSection = ({ data }) => {
  return (
    <Fade bottom>
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
                  <p>
                    We provide what you need to enjoy your <br />
                    holiday with family. Time to make another <br />
                    memorable moments.
                  </p>
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
            <div className="flex flex-row mt-8 gap-x-12">
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
          <PopupImage
            imageUrl={HeroImage}
            imageAlt="hero illustration"
            popTo="-top-8 -left-9"
            width="w-[500px]"
            height="h-[400px]"
          />
        </div>
      </SectionBracket>
    </Fade>
  );
};

export default HeroSection;
