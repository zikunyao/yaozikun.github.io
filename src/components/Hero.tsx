export default function Hero() {
  return (
    <section className="hero-section hero-centered relative overflow-hidden" style={{ zIndex: 1 }}>
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <img
        src="/yaozikun.png"
        alt=""
        width="1024"
        height="1536"
        loading="eager"
        fetchPriority="high"
        className="hero-portrait-ambient"
        aria-hidden="true"
      />

      <div className="content-col relative py-24 text-center md:py-36">
        <div className="mx-auto max-w-5xl anim-up">
          <p className="eyebrow mb-8">Zikun Yao · Biomedical Engineering</p>
          <h1 className="hero-title hero-title-centered">
            Computation,
            <span className="hero-gradient block">in service of life.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#a1a1a6] md:text-xl">
            Building intelligent systems for proteins, biological sequences,
            and biomedical discovery at Shenzhen University.
          </p>
          <div className="mt-10 flex items-center justify-center gap-7 text-sm">
            <a href="#projects" className="hero-link">View selected work <span>↓</span></a>
            <a href="/cv.pdf" className="hero-link hero-link-muted" download>Download CV ↗</a>
          </div>
        </div>

        <div className="hero-proof mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 text-left sm:grid-cols-3">
          <div><strong>01</strong><span>SCI publication</span></div>
          <div><strong>04</strong><span>Research systems</span></div>
          <div><strong>National</strong><span>Second prize · C4</span></div>
        </div>
      </div>
    </section>
  );
}
