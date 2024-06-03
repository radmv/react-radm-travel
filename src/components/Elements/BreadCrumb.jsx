import { NavLink } from "react-router-dom";

const BreadCrumb = (props) => {
  const { items = [] } = props;

  return (
    <div className="flex flex-row text-lg font-light gap-x-1 text-mn-grey-0">
      {items?.map((item, index) => {
        return (
          <div key={index}>
            <BreadcrumbLink to={item.to}>{item.label}</BreadcrumbLink>
            {index < items.length - 1 && " / "}
          </div>
        );
      })}
    </div>
  );
};

const BreadcrumbLink = ({ children, to }) => {
  return <NavLink to={to}>{children}</NavLink>;
};

export default BreadCrumb;
