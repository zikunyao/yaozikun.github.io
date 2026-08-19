import { useEffect, useRef, useState } from 'react';

const slides = [
  { id: 'PathoMamba', eyebrow: 'PATHOGEN INTELLIGENCE', title: 'From sequence to mechanism.', copy: 'A unified workflow for secretion prediction, localization, host–pathogen interaction, and interpretation.', visual: 'patho' },
  { id: 'MEscan', eyebrow: 'MOSAIC EVOLUTION', title: 'Find variation that matters.', copy: 'Automated screening for mosaic-evolution proteins and hypervariable regions across large sequence collections.', visual: 'mescan' },
  { id: 'HVR Evolution', eyebrow: 'GENOME-WIDE STUDY', title: 'Map hidden evolutionary structure.', copy: 'Twenty-one OMP families, sixteen newly characterized, connected through HVR structure and immunogenicity.', visual: 'hvr' },
  { id: 'Medical AI', eyebrow: 'KNOWLEDGE SYSTEM', title: 'Evidence, ready to use.', copy: 'Local language models transform retrieval, synthesis, and presentation into one reproducible workflow.', visual: 'literature' },
];

export default function ResearchDeck() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const state = useRef({ x: 0, target: 0, velocity: 0, startX: 0, startPos: 0, dragging: false, frame: 0 });
  const [active, setActive] = useState(0);

  const cardWidth = () => (viewportRef.current?.clientWidth ?? 600) + 18;
  const snapTo = (index: number) => {
    const next = Math.max(0, Math.min(slides.length - 1, index));
    state.current.target = -next * cardWidth();
    setActive(next);
  };

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animation = state.current;
    const tick = () => {
      const s = state.current;
      if (!s.dragging) {
        if (reduced) s.x = s.target;
        else {
          const force = (s.target - s.x) * 0.105;
          s.velocity = (s.velocity + force) * 0.76;
          s.x += s.velocity;
        }
      }
      if (trackRef.current) trackRef.current.style.transform = `translate3d(${s.x}px,0,0)`;
      s.frame = requestAnimationFrame(tick);
    };
    state.current.frame = requestAnimationFrame(tick);
    const resize = () => snapTo(active);
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animation.frame);
      window.removeEventListener('resize', resize);
    };
  }, [active]);

  const pointerDown = (event: React.PointerEvent) => {
    const s = state.current;
    s.dragging = true;
    s.startX = event.clientX;
    s.startPos = s.x;
    s.velocity = 0;
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const pointerMove = (event: React.PointerEvent) => {
    const s = state.current;
    if (!s.dragging) return;
    const next = s.startPos + event.clientX - s.startX;
    s.velocity = next - s.x;
    s.x = next;
  };
  const pointerUp = (event: React.PointerEvent) => {
    const s = state.current;
    if (!s.dragging) return;
    s.dragging = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
    const projected = s.x + s.velocity * 8;
    snapTo(Math.round(-projected / cardWidth()));
  };

  return (
    <div className="research-deck-shell">
      <div className="deck-topbar">
        <span><i /> RESEARCH SYSTEMS</span>
        <span>DRAG TO EXPLORE</span>
      </div>
      <div
        ref={viewportRef}
        className="research-deck-viewport"
        onPointerDown={pointerDown}
        onPointerMove={pointerMove}
        onPointerUp={pointerUp}
        onPointerCancel={pointerUp}
      >
        <div ref={trackRef} className="research-deck-track">
          {slides.map((slide, index) => (
            <article key={slide.id} className="deck-slide" aria-hidden={index !== active}>
              <div className="deck-copy">
                <span className="deck-eyebrow">{slide.eyebrow}</span>
                <h2>{slide.title}</h2>
                <p>{slide.copy}</p>
              </div>
              <div className={`deck-visual ${slide.visual}`} aria-hidden="true">
                {slide.visual === 'patho' && <><b>Sequence</b><b>Secretion</b><b>Localization</b><b>Host–PPI</b><em>Mechanism</em></>}
                {slide.visual === 'mescan' && <><span/><span/><span/><span/><span/><i/></>}
                {slide.visual === 'hvr' && <><div/><div/><div/><div/><div/><div/></>}
                {slide.visual === 'literature' && <><b>01</b><b>02</b><b>03</b><em>RAG</em></>}
              </div>
              <span className="deck-index">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
      <div className="deck-controls">
        <div className="deck-dots">
          {slides.map((slide, index) => <button key={slide.id} onClick={() => snapTo(index)} aria-label={`Show ${slide.id}`} aria-current={index === active ? 'true' : undefined}><span /></button>)}
        </div>
        <span>{active + 1} / {slides.length}</span>
      </div>
    </div>
  );
}
