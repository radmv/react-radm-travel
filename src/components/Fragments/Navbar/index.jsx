import { BrandIcon, NavigationLink } from "../../Elements";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <div className="w-full mx-auto max-w-7xl">
      <div className="flex items-center justify-between py-7">
        <div>
          <NavigationLink>
            <BrandIcon />
          </NavigationLink>
        </div>
        <ul className="flex gap-x-9">
          <li>
            <NavbarLink to="/">Home</NavbarLink>
          </li>
          <li>
            <NavbarLink to="#browse-by">Browse By</NavbarLink>
          </li>
          <li>
            <NavbarLink to="#stories">Stories</NavbarLink>
          </li>
          <li>
            <NavbarLink to="#agents">Agents</NavbarLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
