import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import SketchStory from './SketchStory';

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setEntered(true); observer.disconnect(); }
    }, { threshold: 0.12 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal-block ${entered ? 'has-entered' : ''} ${className}`}>{children}</div>;
}

const modules = [
  { label:'Secretion', file:'isle-secretion.png', description:'Distribution of secretion-system predictions.' },
  { label:'Localization', file:'isle-localization.png', description:'Co-occurrence of predicted subcellular locations.' },
  { label:'Interaction', file:'isle-interaction.png', description:'Predicted protein interactions in a network view.' },
  { label:'Pathway', file:'isle-pathway.png', description:'An analysis heatmap from the pathway module.' },
];

function IsleVisual() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {threshold:0.2});
    if (ref.current) observer.observe(ref.current);
    const onVisibility = () => setPageVisible(!document.hidden);
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onPreference = () => { if (preference.matches) setPlaying(false); };
    document.addEventListener('visibilitychange', onVisibility);
    preference.addEventListener('change', onPreference);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', onVisibility); preference.removeEventListener('change', onPreference); };
  }, []);
  useEffect(() => {
    if (!playing || !visible || !pageVisible) return;
    const timer = window.setTimeout(() => setActive(index => (index + 1) % modules.length), 4500);
    return () => clearTimeout(timer);
  }, [active, playing, visible, pageVisible]);
  const module = modules[active];
  return <div className="isle-showcase" ref={ref}>
    <div className="visual-toolbar"><span>ISLE / ANALYSIS OUTPUTS</span><button onClick={() => setPlaying(value => !value)} aria-label={playing ? 'Pause ISLE demo' : 'Play ISLE demo'}>{playing ? 'Pause Ⅱ' : 'Play ▷'}</button></div>
    <div className="isle-module-picker" role="group" aria-label="ISLE analysis modules">{modules.map((m,i) => <button aria-pressed={active === i} key={m.label} onClick={() => { setActive(i); setPlaying(false); }}><small>0{i+1}</small>{m.label}</button>)}</div>
    <a className="isle-result" href={`/research/${module.file}`} target="_blank" rel="noreferrer" aria-label={`Open ${module.label.toLowerCase()} example output`}>
      {modules.map((m,i) => <img key={m.file} src={`/research/${m.file}`} alt={i === active ? m.description : ''} aria-hidden={i !== active} className={active === i ? 'active' : ''} loading="lazy" width="1000" height="800"/>)}
    </a>
    <div className="visual-caption"><span>{module.description}</span><small>Actual demo output · not a benchmark</small></div>
  </div>;
}

export default function ProjectVisual({ id }: { id: string }) {
  if (id === 'isle') return <Reveal className="project-visual"><IsleVisual/></Reveal>;
  if (id === 'hvrclassify') return <Reveal className="project-visual">
    <figure className="hvr-showcase">
      <div className="visual-toolbar"><span>HVRclassify / ASSOCIATED RESEARCH</span><span>AEM · 2025</span></div>
      <a className="research-figure" href="/research/hvr-figure.png" target="_blank" rel="noreferrer" aria-label="Open research figure 1"><img src="/research/hvr-figure.png" alt="Figure 1: screening, genetic exchange tests, phylogenetic clustering and local sequence variation in E. coli outer membrane proteins." loading="lazy" width="968" height="518"/></a>
      <div className="finding-strip"><div><strong>21</strong><span>OMP families</span></div><div><strong>16</strong><span>New families</span></div><div><strong>2025</strong><span>Published study</span></div></div>
      <figcaption>Cao et al., AEM (2025), Fig. 1 · cropped from the published page. <a href="https://doi.org/10.1128/aem.00557-25" target="_blank" rel="noreferrer">Source ↗</a> · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0</a></figcaption>
    </figure>
  </Reveal>;
  if (id === 'mescan') return <Reveal className="project-visual small-visual">
    <div className="mescan-preview"><div className="visual-toolbar"><span>MEscan</span><span className="work-in-progress">In development</span></div>
      <SketchStory kind="sequence"/>
      <div className="visual-caption"><span>Mosaic evolution, under investigation.</span><small>Concept illustration · not experimental data</small></div>
    </div>
  </Reveal>;
  return <Reveal className="project-visual small-visual"><div className="pbl-preview">
    <div className="visual-toolbar"><span>PBL PPT AGENT</span><span>College experiment</span></div>
    <SketchStory kind="slides"/>
    <div className="visual-caption"><span>Helping prepare PBL presentations.</span><small>Concept illustration · not generated output</small></div>
  </div></Reveal>;
}
