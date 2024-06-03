import {
  BreadCrumb,
  DescriptionText,
  Heading2,
  SectionBracket,
} from "../../Elements";

const TitleDetailspage = ({ data }) => {
  const breadCrumbItems = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: `/details/${data.params}`,
      label: "House Details",
    },
  ];
  return (
    <SectionBracket>
      <div className="grid items-center justify-center w-full grid-cols-3">
        <BreadCrumb items={breadCrumbItems} />
        <div className="flex flex-col items-center gap-y-2">
          <Heading2>{data.name}</Heading2>
          <DescriptionText>
            {data.city}, {data.country}
          </DescriptionText>
        </div>
      </div>
    </SectionBracket>
  );
};

export default TitleDetailspage;
