import {
  BrandIcon,
  DescriptionText,
  Heading4,
  SectionBracket,
} from "../../Elements";

const Footer = () => {
  return (
    <SectionBracket sectionId="Footer">
      <footer>
        <div className="flex flex-row justify-between mx-auto">
          <div className="flex flex-col gap-y-2">
            <BrandIcon />
            <DescriptionText>
              We kaboom your beauty holiday <br />
              instantly and memorable.
            </DescriptionText>
          </div>
          <div className="grid w-2/3 grid-cols-3">
            <div className="flex flex-col gap-y-6">
              <Heading4>For Beginners</Heading4>
              <div className="flex flex-col gap-y-2">
                <DescriptionText>New Account</DescriptionText>
                <DescriptionText>Start Booking a Room</DescriptionText>
                <DescriptionText>Use Payments</DescriptionText>
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <Heading4>Explore Us</Heading4>
              <div className="flex flex-col gap-y-2">
                <DescriptionText>Our Careers</DescriptionText>
                <DescriptionText>Privacy</DescriptionText>
                <DescriptionText>Terms & Conditions</DescriptionText>
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <Heading4>Connect Us</Heading4>
              <div className="flex flex-col gap-y-2">
                <DescriptionText>support@staycation.id</DescriptionText>
                <DescriptionText>021 - 2208 - 1996</DescriptionText>
                <DescriptionText>Staycation, Kemang, Jakarta</DescriptionText>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mx-auto text-center my-14">
          <DescriptionText>
            Copyright 2019 • All rights reserved • Staycation
          </DescriptionText>
        </div>
      </footer>
    </SectionBracket>
  );
};

export default Footer;
