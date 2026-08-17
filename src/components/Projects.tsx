import { useRef, useState } from 'react';

interface ProjectData {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  tech: string[];
  highlights: string[];
  accent: string;
  bgGlow: string;
  demoUrl?: string;
  referenceUrl?: string;
  referenceLabel?: string;
  images?: { src: string; label: string }[];
}

const projects: ProjectData[] = [
  {
    num: '01', title: 'PathoMamba',
    subtitle: 'Integrated AI Platform for Pathogenic Secretion Protein Analysis',
    desc: 'Unified framework combining SWA, Bi-Mamba, and ESM2 embeddings for secretion protein identification, subcellular localization, host-pathogen PPI prediction, and mechanistic interpretation.',
    tech: ['SWA + Bi-Mamba', 'ESM2', 'Protein LMs', 'Web Platform'],
    highlights: [
      'C4 Provincial First Prize → National Second Prize (国赛二等奖)',
      'NCCBB 2026 Graduate Forum — Oral Presentation',
      '4 core modules + GnTxSPdb database',
      '2 manuscripts under preparation',
    ],
    accent: '#3b82f6', bgGlow: 'rgba(59,130,246,0.06)',
    demoUrl: 'https://mbs.szu-bioinf.org/PathoMamba/frontend/',
    images: [{ src: '/awards/c4-national.jpg', label: 'C4 National Second Prize Certificate' }],
  },
  {
    num: '02', title: 'MEscan',
    subtitle: 'Automated Mosaic Evolution Protein Identification',
    desc: 'Platform for automated identification and analysis of mosaic evolution proteins with optimized HVR screening workflows.',
    tech: ['Bioinformatics', 'HVR Detection', 'Pipeline', 'Software'],
    highlights: [
      'Software copyright registered',
      'Provincial Excellent Award — Biomedical Innovation Competition',
      'Liyuan Challenge Second Prize',
    ],
    accent: '#8b5cf6', bgGlow: 'rgba(139,92,246,0.06)',
    images: [{ src: '/awards/hvrclassify-copyright.png', label: 'Software Copyright Certificate' }],
  },
  {
    num: '03', title: 'HVR Evolution',
    subtitle: 'Genome-wide Investigation of OMP Families under Mosaic Evolution in E. coli',
    desc: 'First genome-wide screening of bacterial OMPs under mosaic evolution. Identified 21 OMP families (16 novel) with characterized HVR structural patterns and immunogenicity.',
    tech: ['BLAST', 'Phylogenetics', 'HVRClassify', 'Genomics'],
    highlights: [
      'Published in Applied and Environmental Microbiology (SCI, 2025)',
      'DOI: 10.1128/aem.00557-25',
      'HVRClassify software copyright',
    ],
    accent: '#06b6d4', bgGlow: 'rgba(6,182,212,0.06)',
    referenceUrl: 'https://doi.org/10.1128/aem.00557-25',
    referenceLabel: 'Read the paper',
    images: [
      { src: '/awards/aem-paper.png', label: 'AEM Paper — Cao et al., 2025' },
      { src: '/awards/hvrclassify-copyright.png', label: 'HVRClassify Software Copyright' },
    ],
  },
  {
    num: '04', title: 'AI Medical Literature',
    subtitle: 'PBL Literature Retrieval & PPT Generation System',
    desc: 'Medical education support system with local LLM deployment for automated literature retrieval, analysis, and presentation generation.',
    tech: ['LLM', 'OpenClaw', 'NLP', 'RAG'],
    highlights: ['First Prize', 'Best Popularity Award — AI替繁 Challenge'],
    accent: '#f59e0b', bgGlow: 'rgba(245,158,11,0.06)',
    images: [{ src: '/awards/patent.png', label: 'Patent Document' }],
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);       // drives CSS class
  const [contentIdx, setContentIdx] = useState<number | null>(null);   // drives content visibility
  const [animatingIdx, setAnimatingIdx] = useState<number | null>(null);
  const [imgModal, setImgModal] = useState<string | null>(null);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / (el.clientWidth * 0.85));
    setActiveIdx(Math.min(idx, projects.length - 1));
  };

  const toggleExpand = (i: number) => {
    if (expanded === i) {
      // Collapse: remove CSS class first → animate → then clear content
      setExpanded(null);
      setTimeout(() => setContentIdx(null), 550);
    } else {
      // Expand: set content immediately, then add CSS class for animation
      setContentIdx(i);
      setAnimatingIdx(i);
      requestAnimationFrame(() => {
        setExpanded(i);
        setTimeout(() => {
          detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
        setTimeout(() => setAnimatingIdx(null), 600);
      });
    }
  };

  const expandedProject = contentIdx !== null ? projects[contentIdx] : null;

  return (
    <section id="projects" style={{ zIndex: 1, position: 'relative' }}>
      <div className="content-col">
        <p className="section-label !mb-1">Featured Projects</p>
        <h2 className="text-2xl font-bold text-[#f1f5f9] tracking-tight mb-6">What I Build</h2>

        {/* Scroll track */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
        >
          {projects.map((p, i) => {
            const isOpen = expanded === i;
            return (
              <div
                key={p.title}
                onClick={() => toggleExpand(i)}
                className={`flex flex-col justify-between snap-center shrink-0 anim-up relative overflow-hidden cursor-pointer group ${animatingIdx === i ? 'card-expand-pulse' : ''}`}
                style={{
                  width: 'min(440px, 82vw)',
                  background: isOpen
                    ? `linear-gradient(135deg, ${p.bgGlow}, ${p.accent}0D, rgba(15,23,42,0.95))`
                    : `linear-gradient(135deg, ${p.bgGlow}, rgba(15,23,42,0.9))`,
                  border: `1px solid ${isOpen ? p.accent + '50' : p.accent + '20'}`,
                  borderLeft: `4px solid ${p.accent}`,
                  borderRadius: 16, padding: '1.5rem',
                  animationDelay: `${i * 0.1}s`,
                  transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
                }}
              >
                {/* Watermark */}
                <span
                  className="absolute -bottom-2 -right-2 text-[7rem] font-black leading-none select-none pointer-events-none transition-all duration-500"
                  style={{ color: isOpen ? `${p.accent}14` : `${p.accent}08` }}
                >
                  {p.num}
                </span>

                {/* Expand button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ background: isOpen ? `${p.accent}25` : `${p.accent}15` }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={p.accent}
                      strokeWidth="2.5" strokeLinecap="round"
                      className="transition-transform duration-500"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-black tracking-tighter shrink-0 transition-colors duration-300"
                      style={{ color: p.accent }}>
                      {p.num}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">{p.title}</h3>
                      <p className="text-[0.7rem] text-slate-400">{p.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t) => (
                      <span key={t} className="tag" style={{ background: `${p.accent}15`, color: p.accent, borderColor: `${p.accent}25` }}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="relative border-t border-slate-800 pt-3 space-y-1.5">
                  {p.highlights.slice(0, 3).map((h) => (
                    <p key={h} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="mt-0.5 shrink-0" style={{ color: p.accent }}>▸</span>
                      {h}
                    </p>
                  ))}
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleExpand(i);
                    }}
                    aria-expanded={isOpen}
                    aria-controls="project-details"
                    className="text-[0.65rem] font-medium mt-2 transition-colors duration-300 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                    style={{ color: p.accent }}>
                    {isOpen ? 'Collapse −' : 'View details +'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {projects.map((p, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show ${p.title}`}
              aria-current={i === activeIdx ? 'true' : undefined}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                el.scrollTo({ left: i * (el.clientWidth * 0.85), behavior: 'smooth' });
              }}
              className="rounded-full transition-all duration-300"
              style={{
                height: i === activeIdx ? 6 : 4,
                width: i === activeIdx ? 24 : 6,
                background: i === activeIdx ? p.accent : '#334155',
              }}
            />
          ))}
        </div>

        {/* === Expandable detail panel === */}
        <div id="project-details" className={`expand-wrapper ${expanded !== null ? 'open' : ''}`} ref={detailRef}>
          <div className="expand-inner">
            {expandedProject && (
              <div
                className="mt-6"
                style={{
                  background: `linear-gradient(135deg, ${expandedProject.bgGlow}, rgba(15,23,42,0.95))`,
                  border: `1px solid ${expandedProject.accent}30`,
                  borderLeft: `4px solid ${expandedProject.accent}`,
                  borderRadius: 16, padding: '1.75rem',
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5 stagger-1">
                  <div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded"
                      style={{ background: `${expandedProject.accent}20`, color: expandedProject.accent }}>
                      {expandedProject.num} · Research Output
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2">
                      {expandedProject.title} — Achievements
                    </h3>
                  </div>
                  <button
                    type="button"
                    aria-label={`Close ${expandedProject.title} details`}
                    onClick={() => toggleExpand(contentIdx!)}
                    className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                </div>

                {/* Highlights */}
                <div className="mb-5 space-y-1.5 stagger-2">
                  {expandedProject.highlights.map((h) => (
                    <p key={h} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="mt-0.5 shrink-0" style={{ color: expandedProject.accent }}>▸</span>
                      {h}
                    </p>
                  ))}
                  {'demoUrl' in expandedProject && expandedProject.demoUrl && (
                    <a href={expandedProject.demoUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-80 transition-opacity mt-2"
                      style={{ color: expandedProject.accent }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Open Live Demo →
                    </a>
                  )}
                  {expandedProject.referenceUrl && (
                    <a href={expandedProject.referenceUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-80 transition-opacity mt-2 ml-4"
                      style={{ color: expandedProject.accent }}
                    >
                      {expandedProject.referenceLabel ?? 'Open reference'} →
                    </a>
                  )}
                </div>

                {/* Image gallery */}
                {expandedProject.images && expandedProject.images.length > 0 && (
                  <div className="stagger-3">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Certificates & Documents</p>
                    <div className="grid gap-4 md:grid-cols-2">
                      {expandedProject.images.map((img) => (
                        <button
                          key={img.src}
                          type="button"
                          aria-label={`View ${img.label}`}
                          onClick={() => setImgModal(img.src)}
                          className="text-left group/img overflow-hidden rounded-xl border border-slate-800 hover:border-slate-600 transition-all duration-300"
                        >
                          <div className="overflow-hidden bg-slate-900" style={{ maxHeight: 480 }}>
                            <img src={img.src} alt={img.label}
                              className="w-full h-auto object-contain group-hover/img:scale-[1.02] transition-transform duration-500"
                              loading="lazy" />
                          </div>
                          <p className="text-xs text-slate-400 px-3 py-2 group-hover/img:text-slate-300 transition-colors">
                            {img.label}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {imgModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setImgModal(null)}
        >
          <button
            type="button"
            aria-label="Close certificate preview"
            onClick={() => setImgModal(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <img src={imgModal} alt="Certificate"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl modal-in"
            onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
