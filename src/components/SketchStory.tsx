import { useEffect, useRef, useState } from 'react';

export default function SketchStory({ kind }: { kind: 'sequence' | 'slides' }) {
  const ref = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState(0);
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible, setVisible] = useState(false);
  const [foreground, setForeground] = useState(() => !document.hidden);
  const frames = [
    { src:'research-doodle.png', title:'An idea takes shape' },
    { src:kind === 'sequence' ? 'sequence-doodle.png' : 'slides-doodle.png', title:kind === 'sequence' ? 'Looking for variation' : 'Putting ideas into slides' },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {threshold:0.15});
    if (ref.current) observer.observe(ref.current);
    const onVisibility = () => setForeground(!document.hidden);
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onPreference = () => { if(preference.matches) setPlaying(false); };
    document.addEventListener('visibilitychange', onVisibility);
    preference.addEventListener('change', onPreference);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', onVisibility); preference.removeEventListener('change', onPreference); };
  }, []);
  useEffect(() => {
    if(!playing || !visible || !foreground) return;
    const timer = setTimeout(() => setFrame(value => 1 - value), 3200);
    return () => clearTimeout(timer);
  }, [frame, playing, visible, foreground]);
  return <div ref={ref} className="sketch-story" data-frame={frame}>
    <div className="sketch-frames" aria-hidden="true">
      {frames.map((item,i) => <img key={item.src} className={frame === i ? 'current' : ''} src={`/illustrations/${item.src}`} alt="" loading="lazy" width="1280" height="1280"/>)}
    </div>
    <div className="sketch-story-controls">
      <div className="sketch-frame-buttons" role="group" aria-label={`${kind} illustration frames`}>
        {frames.map((item,i) => <button key={item.src} onClick={() => { setFrame(i); setPlaying(false); }} aria-pressed={frame === i} aria-label={item.title}>0{i+1}</button>)}
      </div>
      <span>{frames[frame].title}</span>
      <button className="sketch-toggle" onClick={() => setPlaying(value => !value)} aria-label={`${playing ? 'Pause' : 'Play'} ${kind} sketch animation`}>{playing ? 'Ⅱ' : '▷'}</button>
    </div>
  </div>;
}
