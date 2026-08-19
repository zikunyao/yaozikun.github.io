export default function CVSection() {
  return (
    <section id="cv" style={{ zIndex: 1, position: 'relative' }}>
      <hr className="section-divider" />
      <div className="content-col cv-callout">
        <div><p className="eyebrow">Curriculum Vitae</p><h2>The complete record.</h2></div>
        <a href="/cv.pdf" className="btn-accent" download>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download CV
        </a>
      </div>
    </section>
  );
}
