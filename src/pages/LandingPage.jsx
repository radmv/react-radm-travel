import {
  BrandIcon,
  CenteredFlex,
  Fullscreen,
  HrLine,
  Navbar,
} from "../components";

const LandingPage = () => {
  return (
    <>
      <Fullscreen>
        <Navbar />
        <HrLine />
        <CenteredFlex>
          <BrandIcon />
        </CenteredFlex>
      </Fullscreen>
    </>
  );
};

export default LandingPage;
