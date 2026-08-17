const groups = [
  { label: 'Languages', items: 'Python, C, R' },
  { label: 'AI / ML', items: 'PyTorch, Deep Learning, Protein LMs, LLM Apps' },
  { label: 'Bioinformatics', items: 'BLAST, Sequence Analysis, HVR Detection, Phylogenetics' },
  { label: 'Engineering', items: 'Linux Admin, Docker, Git, Web Dev' },
];

export default function Skills() {
  return (
    <section id="skills" style={{ zIndex: 1, position: 'relative' }}>
      <hr className="section-divider" />
      <div className="content-col">
        <p className="section-label">Skills</p>
        <h2 className="section-heading">Tools for discovery.</h2>
        <div className="grid gap-4 md:grid-cols-2 max-w-2xl">
          {groups.map((g) => (
            <div key={g.label} className="flex items-baseline gap-3 text-sm">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider w-24 shrink-0">
                {g.label}
              </span>
              <span className="text-slate-300">{g.items}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
