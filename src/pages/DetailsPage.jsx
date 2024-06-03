import { useState } from "react";
import { useParams } from "react-router-dom";
import { HrLine, Navbar, TitleDetailspage } from "../components";
import detailsPageData from "../json/itemDetails.json";

const DetailsPage = () => {
  const params = useParams();
  const [value, setValue] = useState("1");
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleDateChange = (e) => {
    setDateRange(e.target.value);
  };

  const handleInputnumberChange = (event) => {
    setValue(event.target.value);
  };

  const titleData = {
    params: params.houseId,
    name: detailsPageData.name,
    city: detailsPageData.city,
    country: detailsPageData.country,
  };
  // console.log(detailsPageData);

  return (
    <div>
      <Navbar />
      <HrLine />
      <TitleDetailspage data={titleData} />
    </div>
  );
};

export default DetailsPage;
