import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import IconCalendar from "../../assets/images/icons/icon-calendar.svg";
import { formatDate } from "../../utils";

const InputDate = (props) => {
  const { value, placeholder, name, onChange } = props;
  const [isShowed, setIsShowed] = useState(false);

  const datePickerChange = (ranges) => {
    const target = {
      target: {
        value: ranges.selection,
        name: name,
      },
    };
    onChange(target);
  };

  const refDate = useRef(null);

  const handleClickOutside = (event) => {
    if (refDate.current && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const check = (focus) => {
    if (focus.indexOf(1) < 0) {
      setIsShowed(false);
    }
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  return (
    <div ref={refDate} className="relative w-full">
      <div className="absolute z-50 flex justify-center w-12 p-2 rounded cursor-pointer bg-mn-primary min-h-14">
        <img src={IconCalendar} alt="icon calendar" />
      </div>
      <input
        readOnly
        name={name}
        id={name}
        type="text"
        value={displayDate}
        placeholder={placeholder}
        onClick={() => setIsShowed(!isShowed)}
        className="flex justify-center w-full px-3 py-3 text-center rounded bg-mn-grey-2 h-14"
      />

      {isShowed && (
        <div className="absolute z-20 p-2 bg-white rounded shadow-md top-14">
          <DateRange
            editableDateInputs={true}
            onChange={datePickerChange}
            moveRangeOnFirstSelection={false}
            onRangeFocusChange={check}
            ranges={[value]}
          />
        </div>
      )}
    </div>
  );
};

export default InputDate;
