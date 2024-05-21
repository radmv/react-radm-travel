import { NavLink } from "react-router-dom";

const NavigationLink = (props) => {
  const { children, ...rest } = props;

  return (
    <NavLink {...rest} className="text-mn-primary text-lg font-medium">
      {children}
    </NavLink>
  );
};

export default NavigationLink;
