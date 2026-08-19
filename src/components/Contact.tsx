export default function Contact() {
  return (
    <section id="contact" style={{ zIndex: 1, position: 'relative' }}>
      <hr className="section-divider" />
      <div className="content-col contact-callout">
        <div><p className="eyebrow">Contact</p><h2>Let’s discuss the<br/>next question.</h2></div>
        <div className="contact-links">
          <p>
            <span>Email</span>{' '}
            <a href="mailto:zikun.yao@yaozikun.top">
              zikun.yao@yaozikun.top
            </a>
          </p>
          <p>
            <span>GitHub</span>{' '}
            <a href="https://github.com/zikunyao" target="_blank" rel="noopener noreferrer">
              github.com/zikunyao
            </a>
          </p>
          <p><span>Location</span> China</p>
        </div>
      </div>
    </section>
  );
}
