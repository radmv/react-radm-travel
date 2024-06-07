import { useEffect, useState } from "react";

const InputNumber = (props) => {
  const {
    value,
    placeholder,
    name,
    min = 1,
    max = 1,
    prefix = "",
    suffix = "",
    isSuffixPlural,
    onDateChange, // props untuk menerima perubahan tanggal
  } = props;

  const [inputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  useEffect(() => {
    setInputValue(`${prefix}${value}${suffix}`);
  }, [value, prefix, suffix]);

  const onChange = (e) => {
    let newValue = String(e.target.value);

    if (prefix) newValue = newValue.replace(prefix, "");
    if (suffix) newValue = newValue.replace(suffix, "");

    const patternNumeric = new RegExp("^[0-9]*$");
    const isNumeric = patternNumeric.test(newValue);

    if (isNumeric && +newValue <= max && +newValue >= min) {
      onDateChange({ target: { name, value: +newValue } }); // Kirim perubahan ke komponen induk
      setInputValue(
        `${prefix}${newValue}${suffix}${
          isSuffixPlural && +newValue > 1 ? "s" : ""
        }`
      );
    }
  };

  const minus = () => {
    if (value > min) {
      onDateChange({ target: { name, value: +value - 1 } }); // Kirim perubahan ke komponen induk
    }
  };

  const plus = () => {
    if (value < max) {
      onDateChange({ target: { name, value: +value + 1 } }); // Kirim perubahan ke komponen induk
    }
  };

  return (
    <div className="flex w-full rounded bg-mn-grey-2">
      <InputNumberButton backgroundColor="bg-mn-red" onClick={minus}>
        -
      </InputNumberButton>
      <div className="w-full">
        <input
          min={min}
          max={max}
          name={name}
          id={name}
          pattern="[0-9]*"
          placeholder={placeholder ? placeholder : "0"}
          value={String(inputValue)}
          onChange={onChange}
          className="w-full px-2 py-4 text-center bg-mn-grey-2 min-h-11"
        />
      </div>
      <InputNumberButton backgroundColor="bg-mn-green" onClick={plus}>
        +
      </InputNumberButton>
    </div>
  );
};

const InputNumberButton = ({ children, backgroundColor, ...rest }) => {
  return (
    <button
      type="button"
      {...rest}
      className={`flex items-center justify-center rounded cursor-pointer w-11 px-6 ${backgroundColor}`}
    >
      <span className="text-2xl font-bold text-center text-white">
        {children}
      </span>
    </button>
  );
};

export default InputNumber;
