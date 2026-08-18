import SequenceLab from './SequenceLab';

export default function Hero() {
  return (
    <section className="hero-section hero-showcase relative overflow-hidden" style={{ zIndex: 1 }}>
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="content-col relative py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <div className="anim-up">
            <div className="hero-kicker"><span /> RESEARCH MODE · LIVE</div>
            <h1 className="showcase-title mt-7">
              I build AI
              <span className="hero-gradient block">for biology.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#a1a1a6]">
              From protein language models to research platforms—turning biological
              questions into systems that can be tested, used, and extended.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-accent">Launch project tour</a>
              <a href="https://github.com/zikunyao" target="_blank" rel="noopener noreferrer" className="hero-link hero-link-muted">Inspect the code ↗</a>
            </div>
            <div className="mt-12 flex gap-8 border-t border-white/10 pt-6">
              <div><strong className="hero-stat">04</strong><span>Systems shipped</span></div>
              <div><strong className="hero-stat">01</strong><span>SCI publication</span></div>
              <div><strong className="hero-stat">C4</strong><span>National prize</span></div>
            </div>
          </div>
          <div className="anim-up anim-up-2">
            <SequenceLab />
          </div>
        </div>
      </div>
    </section>
  );
}
