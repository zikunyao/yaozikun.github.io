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
        <dl className="skills-grid">
          {groups.map((g) => (
            <div key={g.label} className="skill-group">
              <dt>
                {g.label}
              </dt>
              <dd>{g.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
