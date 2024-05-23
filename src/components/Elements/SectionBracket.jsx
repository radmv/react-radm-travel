const SectionBracket = (props) => {
  const { children, sectionId = "" } = props;

  return (
    <section id={sectionId} className="w-full pt-4 mx-auto max-w-7xl mt-14">
      {children}
    </section>
  );
};

export default SectionBracket;
