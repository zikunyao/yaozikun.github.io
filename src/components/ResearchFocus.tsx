const foci = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/><path d="M2 12h20"/>
        <circle cx="12" cy="12" r="3"/><line x1="8" y1="8" x2="16" y2="16"/><line x1="16" y1="8" x2="8" y2="16"/>
      </svg>
    ),
    label: 'AI for Biology',
    desc: 'Protein language models, deep representation learning, and biological sequence intelligence.',
    tags: ['PyTorch', 'Protein LMs', 'Mamba', 'Sequence Models'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
        <rect x="2" y="3" width="20" height="18" rx="2"/><line x1="6" y1="8" x2="10" y2="8"/>
        <line x1="6" y1="12" x2="14" y2="12"/><line x1="6" y1="16" x2="10" y2="16"/>
        <circle cx="17" cy="15" r="2"/><line x1="17" y1="13" x2="17" y2="7"/><line x1="15" y1="9" x2="19" y2="9"/>
      </svg>
    ),
    label: 'Bioinformatics',
    desc: 'Computational pipelines for genomic analysis, HVR detection, and protein function annotation.',
    tags: ['BLAST', 'HVRClassify', 'Phylogenetics', 'Databases'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    ),
    label: 'Biomedical AI',
    desc: 'LLM-powered medical tools, clinical data analysis, and AI-assisted diagnostics.',
    tags: ['LLM Apps', 'Medical AI', 'OpenClaw', 'RAG'],
  },
];

export default function ResearchFocus() {
  return (
    <section style={{ zIndex: 1, position: 'relative' }}>
      <div className="content-col">
        <div className="grid gap-4 md:grid-cols-3">
          {foci.map((f, i) => (
            <div key={f.label} className={`glass focus-card p-7 anim-up ${i === 0 ? '' : `anim-up-${i + 1}`}`}>
              <div className="mb-8">{f.icon}</div>
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-white">{f.label}</h3>
              <p className="mb-7 text-sm leading-relaxed text-[#a1a1a6]">{f.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {f.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
