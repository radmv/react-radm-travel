import { Link } from "react-router-dom";

const NavbarLink = (props) => {
  const { children, ...rest } = props;
  return (
    <Link
      {...rest}
      className="text-lg font-medium text-mn-primary hover:text-mn-blue hover:font-semibold"
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
