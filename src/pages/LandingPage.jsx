import {
  CategoriesSection,
  Footer,
  Fullscreen,
  HeroSection,
  HrLine,
  MostPickedSection,
  Navbar,
  TestimonySection,
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
        <CategoriesSection data={landingPageData.categories} />
        <TestimonySection data={landingPageData.testimonial} />
        <div className="mt-24"></div>
        <HrLine />
        <Footer />
      </Fullscreen>
    </>
  );
};

export default LandingPage;
