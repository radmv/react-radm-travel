import { useState } from "react";

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
  } = props;

  const [inputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  const onChange = (e) => {
    let value = String(e.target.value);

    if (prefix) value = value.replace(prefix);
    if (suffix) value = value.replace(suffix);

    const patternNumeric = new RegExp("[0-9]*");
    const isNumeric = patternNumeric.test(value);

    if (isNumeric && +value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
      setInputValue(
        `${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`
      );
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };
  return (
    <div>
      <div className="flex rounded bg-mn-grey-2 w-fit">
        <InputNumberButton backgroundColor="bg-mn-red" onClick={minus}>
          -
        </InputNumberButton>
        <div>
          <input
            min={min}
            max={max}
            name={name}
            pattern="[0-9]*"
            placeholder={placeholder ? placeholder : "0"}
            value={String(inputValue)}
            onChange={onChange}
            className="px-2 py-4 text-center bg-mn-grey-2 min-h-11"
          />
        </div>
        <InputNumberButton backgroundColor="bg-mn-green" onClick={plus}>
          +
        </InputNumberButton>
      </div>
    </div>
  );
};

const InputNumberButton = ({ children, backgroundColor, ...rest }) => {
  return (
    <button
      {...rest}
      className={`flex items-center justify-center rounded cursor-pointer w-11 ${backgroundColor}`}
    >
      <span className="text-2xl font-bold text-center text-white">
        {children}
      </span>
    </button>
  );
};

export default InputNumber;
