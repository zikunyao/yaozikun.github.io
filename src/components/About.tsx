export default function About() {
  return (
    <section id="about" className="editorial-section" style={{ zIndex: 1, position: 'relative' }}>
      <div className="content-col grid gap-8 md:grid-cols-[0.45fr_1fr] md:gap-20">
        <div>
          <p className="eyebrow">Perspective</p>
          <p className="mt-3 text-sm text-[#86868b]">Medicine × Engineering × AI</p>
        </div>
        <div className="max-w-3xl">
          <h2 className="editorial-quote">
            Biological questions deserve tools that are as rigorous as they are intuitive.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#a1a1a6]">
            I moved from Clinical Medicine to Biomedical Engineering at Shenzhen University,
            combining a clinical perspective with computational research in protein function,
            sequence intelligence, and biomedical data interpretation.
          </p>
        </div>
      </div>
    </section>
  );
}
