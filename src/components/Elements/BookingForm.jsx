import { addDays, differenceInDays } from "date-fns"; // Pastikan untuk menginstal date-fns
import { useState } from "react";
import BorderedDiv from "./BorderedDiv";
import Button from "./Button";
import DescriptionText from "./DescriptionText";
import Heading4 from "./Heading4";
import InputDate from "./InputDate";
import InputNumber from "./InputNumber";

const BookingForm = (props) => {
  const { itemDetails } = props;
  const [nights, setNights] = useState(1);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 1), // Menggunakan addDays dari date-fns
    key: "selection",
  });

  const handleDateChange = (e) => {
    const { startDate, endDate } = e.target.value;
    const days = differenceInDays(new Date(endDate), new Date(startDate));
    setNights(days); // Set the number of nights correctly
    setDateRange(e.target.value);
  };

  const handleInputNumberChange = (e) => {
    const newNights = e.target.value;
    const newEndDate = addDays(dateRange.startDate, newNights);
    setNights(newNights);
    setDateRange({
      ...dateRange,
      endDate: newEndDate,
    });
  };

  return (
    <BorderedDiv width="w-full">
      <div className="flex flex-col w-full h-full px-12 py-12 gap-y-4">
        <Heading4>Start Booking</Heading4>
        <DescriptionText>
          <div className="flex items-center text-4xl gap-x-2">
            <span className="font-medium text-mn-green">
              ${itemDetails.price}
            </span>
            <span>per night</span>
          </div>
        </DescriptionText>
        <form className="w-full">
          <div className="flex flex-col w-full gap-y-1">
            <label htmlFor="durations" className="font-normal text-mn-primary">
              How long you will stay?
            </label>
            <InputNumber
              name="durations"
              value={nights}
              min={1}
              max={30}
              onDateChange={handleInputNumberChange}
              suffix=" night"
              isSuffixPlural
            />
          </div>
          <div className="flex flex-col w-full mt-4 gap-y-1">
            <label htmlFor="date" className="font-normal text-mn-primary">
              Pick a date
            </label>
            <InputDate
              name="date"
              onChange={handleDateChange}
              value={dateRange}
            />
          </div>
          <div className="mt-1">
            <DescriptionText>
              You will pay{" "}
              <span className="font-medium text-mn-primary">
                ${itemDetails.price * nights} USD
              </span>{" "}
              per{" "}
              <span className="font-medium text-mn-primary">
                {nights} night{nights > 1 ? "s" : ""}
              </span>
            </DescriptionText>
          </div>
          <div className="mt-10">
            <Button isWidthFull={true}>Continue to Book</Button>
          </div>
        </form>
      </div>
    </BorderedDiv>
  );
};

export default BookingForm;
