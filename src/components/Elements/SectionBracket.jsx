const SectionBracket = (props) => {
  const { children, sectionId } = props;

  return (
    <section id={sectionId} className="w-full max-w-6xl pt-4 mx-auto mt-14">
      {children}
    </section>
  );
};

export default SectionBracket;
