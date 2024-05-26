import {
  Button,
  DescriptionText,
  Heading3,
  PopupImage,
  SectionBracket,
  StarRating,
} from "../../Elements";

const TestimonySection = ({ data }) => {
  return (
    <SectionBracket sectionId="stories">
      <div>
        <div className="flex flex-row items-center gap-x-14">
          {/* left content */}
          <PopupImage
            imageUrl={data.imageUrl}
            imageAlt="testimonial illustration"
            popTo="-bottom-8 -right-9"
            width="w-[350px]"
            height="h-[480px]"
          />
          {/* right content */}
          <div className="flex flex-col gap-y-10 ml-9">
            {/* heading */}
            <div>
              <Heading3>{data.name}</Heading3>
            </div>

            {/* content */}
            <div className="flex flex-col gap-y-2 text-mn-primary">
              {/* rating */}
              <div>
                <StarRating rating={data.rate} />
              </div>
              {/* description */}
              <dl className="pr-16">
                <dt className="text-4xl">{data.content}</dt>
                {/* sub description */}
                <dd className="mt-2">
                  <DescriptionText>
                    {data.familyName}
                    {", "}
                    {data.familyOccupation}
                  </DescriptionText>
                </dd>
              </dl>
            </div>

            {/* button */}
            <div className="mt-4">
              <Button buttonFor="link" to="/">
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionBracket>
  );
};

export default TestimonySection;
