import { Link } from "react-router-dom";

const classNames =
  "px-10 py-3 bg-mn-blue text-white text-lg font-medium rounded drop-shadow-[0_8px_15px_rgba(50,82,223,0.3)] hover:drop-shadow-[0_8px_15px_rgba(50,82,223,0.5)] focus:opacity-80 disabled:drop-shadow-none disabled:cursor-not-allowed disabled:bg-mn-grey-1 disabled:text-mn-grey-3";

const Button = (props) => {
  const {
    children,
    isWidthFull = false,
    buttonFor = "button",
    ...rest
  } = props;

  if (buttonFor === "link") {
    return (
      <ForLink {...rest} isWidthFull={isWidthFull}>
        {children}
      </ForLink>
    );
  } else if (buttonFor === "button") {
    return (
      <ForButton {...rest} isWidthFull={isWidthFull}>
        {children}
      </ForButton>
    );
  }
};

const ForButton = (props) => {
  const { children, isWidthFull, ...rest } = props;

  return (
    <button
      {...rest}
      className={isWidthFull ? "w-full " + classNames : classNames}
    >
      {children}
    </button>
  );
};

const ForLink = (props) => {
  const { children, isWidthFull, ...rest } = props;

  return (
    <Link
      {...rest}
      className={isWidthFull ? "w-full " + classNames : classNames}
    >
      {children}
    </Link>
  );
};

export default Button;
