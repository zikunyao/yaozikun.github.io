import { useState } from 'react';

const views = [
  { name: 'Sequence', title: 'It starts with a sequence.', caption: 'Biological sequence intelligence', text: 'Finding meaningful patterns in the language of proteins.' },
  { name: 'Model', title: 'Patterns become understanding.', caption: 'Representation learning', text: 'Connecting sequence representations with biological questions.' },
  { name: 'System', title: 'Understanding, put to work.', caption: 'Scientific software', text: 'Bringing prediction and interpretation into usable research tools.' },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  return <section className="hero-section">
    <div className="content-col hero-layout">
      <p className="hero-kicker">Zikun Yao · Biomedical Engineering</p>
      <h1>Biology. Intelligence.<br/><span>Possibility.</span></h1>
      <p className="hero-lede">Building thoughtful AI tools<br className="mobile-break"/> for biological discovery.</p>
      <div className="hero-actions"><a className="btn-accent" href="#projects">Explore my work</a><a className="text-link" href="#about">Meet the researcher <span>↗</span></a></div>
      <div className="sequence-stage">
        <div className="sequence-art" data-view={active} aria-hidden="true">
          {Array.from({length: 36}, (_, i) => <i key={i} style={{height: `${38 + Math.sin(i * .48) * 24 + Math.cos(i * .23) * 15}%`, transitionDelay: `${i * 7}ms`}}><b/></i>)}
        </div>
        <div className="sequence-caption" key={active}><p>{views[active].caption}</p><h2>{views[active].title}</h2><span>{views[active].text}</span></div>
        <div className="sequence-switch" aria-label="Explore the research workflow">{views.map((v,i) => <button key={v.name} onClick={() => setActive(i)} aria-pressed={active === i}>{v.name}</button>)}</div>
        <p className="visual-note">Conceptual illustration · sequence → model → system</p>
      </div>
    </div>
  </section>;
}
