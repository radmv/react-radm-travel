import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import IconCalendar from "../../assets/images/icons/icon-calendar.svg";
import { formatDate } from "../../utils";

const InputDate = (props) => {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name: name,
      },
    };
    props.onChange(target);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const refDate = useRef(null);
  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  return (
    <div ref={refDate} className="relative">
      <div className="absolute z-50 flex justify-center p-2 rounded cursor-pointer bg-mn-primary w-11 h-11">
        <img src={IconCalendar} alt="icon calendar" />
      </div>
      <input
        readOnly
        type="text"
        value={displayDate}
        placeholder={placeholder}
        onClick={() => setIsShowed(!isShowed)}
        className="flex justify-center px-3 py-3 text-center w-fit bg-mn-grey-2"
      />

      {isShowed && (
        <div className="absolute z-20 p-1 bg-white rounded shadow-md top-11">
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
