import { useEffect, useRef, useState } from 'react';

const views = [
  { name: 'Sequence', title: 'It starts with a sequence.', caption: 'Biological sequence intelligence', text: 'Finding meaningful patterns in the language of proteins.' },
  { name: 'Model', title: 'Patterns become understanding.', caption: 'Representation learning', text: 'Connecting sequence representations with biological questions.' },
  { name: 'System', title: 'Understanding, put to work.', caption: 'Scientific software', text: 'Bringing prediction and interpretation into usable research tools.' },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const [autoplay, setAutoplay] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 });
    if (stageRef.current) observer.observe(stageRef.current);
    const visibility = () => setPageVisible(!document.hidden);
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motionChange = () => { if (preference.matches) setAutoplay(false); };
    document.addEventListener('visibilitychange', visibility);
    preference.addEventListener('change', motionChange);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', visibility);
      preference.removeEventListener('change', motionChange);
    };
  }, []);

  useEffect(() => {
    if (!autoplay || !visible || !pageVisible) return;
    const timer = window.setTimeout(() => setActive(index => (index + 1) % views.length), 4500);
    return () => window.clearTimeout(timer);
  }, [active, autoplay, visible, pageVisible]);
  return <section className="hero-section">
    <div className="content-col hero-layout">
      <p className="hero-kicker">Zikun Yao · Biomedical Engineering</p>
      <h1>Biology. Intelligence.<br/><span>Possibility.</span></h1>
      <p className="hero-lede">Building thoughtful AI tools<br className="mobile-break"/> for biological discovery.</p>
      <div className="hero-actions"><a className="btn-accent" href="#projects">Explore my work</a><a className="text-link" href="#about">Meet the researcher <span>↗</span></a></div>
      <div className="sequence-stage" ref={stageRef}>
        <div className="sequence-art" data-view={active} aria-hidden="true">
          {Array.from({length: 36}, (_, i) => <i key={i} style={{height: `${38 + Math.sin(i * .48) * 24 + Math.cos(i * .23) * 15}%`, transitionDelay: `${i * 7}ms`}}><b/></i>)}
        </div>
        <div className="sequence-caption" key={active}><p>{views[active].caption}</p><h2>{views[active].title}</h2><span>{views[active].text}</span></div>
        <div className="sequence-switch" role="group" aria-label="Explore the research workflow">{views.map((v,i) => <button key={v.name} onClick={() => setActive(i)} aria-pressed={active === i}>{v.name}</button>)}
          <button className="sequence-playback" onClick={() => setAutoplay(value => !value)} aria-label={autoplay ? 'Pause automatic presentation' : 'Play automatic presentation'} title={autoplay ? 'Pause' : 'Play'}>
            {autoplay ? <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12"><path d="M3 2v8M9 2v8" stroke="currentColor" strokeWidth="2"/></svg> : <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12"><path d="M3 1.5 11 6 3 10.5Z" fill="currentColor"/></svg>}
          </button>
        </div>
        <p className="visual-note">Conceptual illustration · sequence → model → system</p>
      </div>
    </div>
  </section>;
}
