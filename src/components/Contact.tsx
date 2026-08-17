export default function Contact() {
  return (
    <section id="contact" style={{ zIndex: 1, position: 'relative' }}>
      <hr className="section-divider" />
      <div className="content-col">
        <p className="section-label">Contact</p>
        <div className="text-sm text-slate-400 space-y-2">
          <p>
            <span className="text-slate-500">Email</span>{' '}
            <a href="mailto:zikun.yao@yaozikun.top" className="text-blue-400 hover:text-blue-300 transition-colors">
              zikun.yao@yaozikun.top
            </a>
          </p>
          <p>
            <span className="text-slate-500">GitHub</span>{' '}
            <a href="https://github.com/zikunyao" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              github.com/zikunyao
            </a>
          </p>
          <p><span className="text-slate-500">Location</span> China</p>
        </div>
      </div>
    </section>
  );
}
