import { useParams } from "react-router-dom";
import {
  CategoriesSection,
  DescriptionDetailspage,
  FeaturedImageDetailspage,
  Footer,
  Fullscreen,
  HrLine,
  Navbar,
  TestimonySection,
  TitleDetailspage,
} from "../components";
import detailsPageData from "../json/itemDetails.json";

const DetailsPage = () => {
  const params = useParams();

  const titleData = {
    params: params.houseId,
    name: detailsPageData.name,
    city: detailsPageData.city,
    country: detailsPageData.country,
  };
  const descriptionData = {
    description: detailsPageData.description,
    facilities: detailsPageData.features,
    price: detailsPageData.price,
  };

  return (
    <Fullscreen>
      <Navbar />
      <HrLine />
      <TitleDetailspage data={titleData} />
      <FeaturedImageDetailspage data={detailsPageData.imageUrls} />
      <DescriptionDetailspage data={descriptionData} />
      <CategoriesSection data={detailsPageData.categories} />
      <TestimonySection data={detailsPageData.testimonial} />
      <div className="mt-24"></div>
      <HrLine />
      <Footer />
    </Fullscreen>
  );
};

export default DetailsPage;
