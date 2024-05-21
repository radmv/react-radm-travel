import { Link } from "react-router-dom";

const classNames =
  "px-7 py-2 bg-mn-blue text-white rounded drop-shadow-[0_8px_15px_rgba(50,82,223,0.3)] disabled:drop-shadow-none disabled:cursor-not-allowed disabled:bg-mn-grey-1 disabled:text-mn-grey-3";

const Button = (props) => {
  const { children, buttonFor = "button", ...rest } = props;

  if (buttonFor === "link") {
    return <ForLink {...rest}>{children}</ForLink>;
  } else if (buttonFor === "button") {
    return <ForButton {...rest}>{children}</ForButton>;
  }
};

const ForButton = (props) => {
  const { children, ...rest } = props;

  return (
    <button {...rest} className={classNames}>
      {children}
    </button>
  );
};

const ForLink = (props) => {
  const { children, ...rest } = props;

  return (
    <Link {...rest} className={classNames}>
      {children}
    </Link>
  );
};

export default Button;
