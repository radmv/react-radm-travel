const SectionBracket = (props) => {
  const { children, sectionId } = props;

  return (
    <section id={sectionId} className="w-full mx-auto max-w-7xl mt-14 pt-4">
      {children}
    </section>
  );
};

export default SectionBracket;
