const foci = [
  {
    index: '01',
    label: 'AI for Biology',
    desc: 'Protein language models, deep representation learning, and biological sequence intelligence.',
    tags: ['PyTorch', 'Protein LMs', 'Mamba', 'Sequence Models'],
    className: 'md:col-span-2',
  },
  {
    index: '02',
    label: 'Bioinformatics',
    desc: 'Computational pipelines for genomic analysis, HVR detection, and protein function annotation.',
    tags: ['BLAST', 'HVRClassify', 'Phylogenetics'],
    className: '',
  },
  {
    index: '03',
    label: 'Biomedical AI',
    desc: 'LLM-powered medical tools, clinical data analysis, and AI-assisted diagnostics.',
    tags: ['LLM Apps', 'Medical AI', 'RAG'],
    className: 'md:col-start-2 md:col-span-2',
  },
];

export default function ResearchFocus() {
  return (
    <section className="research-section" style={{ zIndex: 1, position: 'relative' }}>
      <div className="content-col">
        <div className="mb-14 grid gap-5 md:grid-cols-[0.65fr_1fr] md:items-end">
          <div>
            <p className="eyebrow">Research direction</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">Three connected lenses.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#86868b] md:justify-self-end">
            From biological sequences to deployable research systems—each project connects
            representation learning, domain knowledge, and usable scientific software.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {foci.map((focus) => (
            <article key={focus.label} className={`research-tile ${focus.className}`}>
              <div className="flex items-start justify-between gap-6">
                <span className="research-index">{focus.index}</span>
                <span className="research-line" aria-hidden="true" />
              </div>
              <div className="mt-16 max-w-xl">
                <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{focus.label}</h3>
                <p className="mt-4 max-w-lg text-sm leading-6 text-[#a1a1a6]">{focus.desc}</p>
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                  {focus.tags.map((tag) => <span key={tag} className="research-tag">{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
