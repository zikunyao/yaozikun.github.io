export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden" style={{ zIndex: 1 }}>
      <div className="hero-halo" aria-hidden="true" />
      <div className="content-col relative py-20 md:py-32 lg:py-36">
        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div className="anim-up">
            <p className="eyebrow mb-6">Shenzhen University · Biomedical Engineering</p>
            <h1 className="hero-title mb-6">
              Intelligence for
              <span className="hero-gradient block">living systems.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[#a1a1a6] md:text-xl">
              I’m Zikun Yao, building computational systems that turn biological
              sequences into useful scientific insight.
            </p>

            <div className="mt-8 flex flex-wrap gap-2" aria-label="Research focus">
              {['Protein Language Models', 'Bioinformatics', 'Biomedical AI'].map((focus) => (
                <span key={focus} className="focus-pill">{focus}</span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="btn-accent">Explore my work</a>
              <a href="/cv.pdf" className="btn-ghost" download>Download CV</a>
              <a href="https://github.com/zikunyao" target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub ↗</a>
            </div>
          </div>

          <div className="anim-up anim-up-2 flex justify-center md:justify-end">
            <div className="portrait-stage">
              <div className="portrait-glow" aria-hidden="true" />
              <img
                src="/yaozikun.png"
                alt="Portrait of Zikun Yao"
                width="1024"
                height="1536"
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 767px) 300px, 380px"
                className="portrait-image"
              />
              <div className="portrait-caption">
                <span className="status-dot" aria-hidden="true" />
                Open to research collaboration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
