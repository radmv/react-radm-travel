import { useState } from "react";
import { HrLine, InputNumber, Navbar } from "../components";

const DetailsPage = () => {
  const [value, setValue] = useState("1");

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
    </div>
  );
};

export default DetailsPage;
