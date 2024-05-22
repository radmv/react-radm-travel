import { Fullscreen, HeroSection, HrLine, Navbar } from "../components";
import landingPageData from "../json/landingPage.json";

const LandingPage = () => {
  return (
    <>
      <Fullscreen>
        <Navbar />
        <HrLine />
        <HeroSection data={landingPageData.hero} />
      </Fullscreen>
    </>
  );
};

export default LandingPage;
