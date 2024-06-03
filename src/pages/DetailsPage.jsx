import { useState } from "react";
import { HrLine, InputDate, InputNumber, Navbar } from "../components";

const DetailsPage = () => {
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

  return (
    <div>
      <Navbar />
      <HrLine />
      DetailsPage
      <InputNumber
        max={30}
        isSuffixPlural
        name="example"
        onChange={handleInputnumberChange}
        min={1}
        suffix=" night"
        value={value}
      />
      <InputDate
        value={dateRange}
        onChange={handleDateChange}
        name="dateRange"
        placeholder="Select date range"
      />
    </div>
  );
};

export default DetailsPage;
