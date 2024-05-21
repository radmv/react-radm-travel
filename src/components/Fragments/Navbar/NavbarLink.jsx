import { Link } from "react-router-dom";

const NavbarLink = (props) => {
  const { children, ...rest } = props;
  return (
    <Link
      {...rest}
      className="text-mn-primary text-lg font-medium hover:text-mn-blue hover:font-semibold"
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
