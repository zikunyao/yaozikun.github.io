import { useEffect, useRef, useState } from 'react';

const slides = [
  { id: 'PathoMamba', eyebrow: 'PATHOGEN INTELLIGENCE', title: 'From sequence to mechanism.', copy: 'A unified workflow for secretion prediction, localization, host–pathogen interaction, and interpretation.', visual: 'patho' },
  { id: 'MEscan', eyebrow: 'MOSAIC EVOLUTION', title: 'Find variation that matters.', copy: 'Automated screening for mosaic-evolution proteins and hypervariable regions across large sequence collections.', visual: 'mescan' },
  { id: 'HVR Evolution', eyebrow: 'GENOME-WIDE STUDY', title: 'Map hidden evolutionary structure.', copy: 'Twenty-one OMP families, sixteen newly characterized, connected through HVR structure and immunogenicity.', visual: 'hvr' },
  { id: 'Medical AI', eyebrow: 'KNOWLEDGE SYSTEM', title: 'Evidence, ready to use.', copy: 'Local language models transform retrieval, synthesis, and presentation into one reproducible workflow.', visual: 'literature' },
];

export default function ResearchDeck() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const el = viewportRef.current; if (!el) return;
    let frame = 0;
    const update = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => setActive(Math.round(el.scrollLeft / el.clientWidth))); };
    el.addEventListener('scroll', update, { passive: true });
    return () => { cancelAnimationFrame(frame); el.removeEventListener('scroll', update); };
  }, []);
  const show = (index: number) => {
    const el = viewportRef.current; if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  return <div className="research-deck-shell">
    <div className="deck-topbar"><span><i /> RESEARCH SYSTEMS</span><span>SWIPE TO EXPLORE</span></div>
    <div ref={viewportRef} className="research-deck-viewport"><div className="research-deck-track">{slides.map((slide, index) => <article key={slide.id} className="deck-slide">
      <div className="deck-copy"><span className="deck-eyebrow">{slide.eyebrow}</span><h2>{slide.title}</h2><p>{slide.copy}</p></div>
      <div className={`deck-visual ${slide.visual}`} aria-hidden="true">
        {slide.visual === 'patho' && <><b>Sequence</b><b>Secretion</b><b>Localization</b><b>Host–PPI</b><em>Mechanism</em></>}
        {slide.visual === 'mescan' && <><span/><span/><span/><span/><span/><i/></>}
        {slide.visual === 'hvr' && <><div/><div/><div/><div/><div/><div/></>}
        {slide.visual === 'literature' && <><b>01</b><b>02</b><b>03</b><em>RAG</em></>}
      </div><span className="deck-index">0{index + 1}</span>
    </article>)}</div></div>
    <div className="deck-controls"><div className="deck-dots">{slides.map((slide, index) => <button key={slide.id} onClick={() => show(index)} aria-label={`Show ${slide.id}`} aria-current={index === active ? 'true' : undefined}><span /></button>)}</div><span>{active + 1} / {slides.length}</span></div>
  </div>;
}
