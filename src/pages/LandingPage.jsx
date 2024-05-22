import {
  Fullscreen,
  HeroSection,
  HrLine,
  MostPickedSection,
  Navbar,
} from "../components";
import landingPageData from "../json/landingPage.json";

const LandingPage = () => {
  return (
    <>
      <Fullscreen>
        <Navbar />
        <HrLine />
        <HeroSection data={landingPageData.hero} />
        <MostPickedSection data={landingPageData.mostPicked} />
      </Fullscreen>
    </>
  );
};

export default LandingPage;
