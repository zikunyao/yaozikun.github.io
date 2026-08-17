export default function Publications() {
  return (
    <section id="publications" style={{ zIndex: 1, position: 'relative' }}>
      <hr className="section-divider" />
      <div className="content-col">
        <p className="section-label">Publications & Outputs</p>
        <h2 className="section-heading">Research, made tangible.</h2>

        <div className="space-y-8">

          {/* SCI Paper */}
          <div className="glass p-5">
            <div className="flex items-start gap-3">
              <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded shrink-0 mt-0.5">SCI</span>
              <div>
                <h3 className="text-sm font-semibold text-white leading-snug mb-1">
                  Genome-wide investigation of outer membrane protein families under mosaic evolution in <i>Escherichia coli</i>
                </h3>
                <p className="text-xs text-slate-400 mb-1">
                  Cao X, Cao C, Chen Z, Li J, <strong className="text-slate-200">Yao Z</strong>, Zheng Y, Wu J, Li Z, Hu Y, Hao G, Zhu G, Köster W, White AP, Wang Y
                </p>
                <div className="flex flex-wrap items-center gap-2 text-[0.7rem] text-slate-500">
                  <span className="italic">Applied and Environmental Microbiology</span>
                  <span>·</span>
                  <span>2025</span>
                  <span>·</span>
                  <a href="https://doi.org/10.1128/aem.00557-25" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    DOI: 10.1128/aem.00557-25
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Software & Patent */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="glass p-5">
              <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">Software</span>
              <ul className="mt-3 space-y-2">
                <li className="text-sm text-slate-300">
                  <strong className="text-white">HVRClassify</strong>
                  <span className="text-slate-500 ml-1">— HVR classification & analysis software</span>
                </li>
                <li className="text-sm text-slate-300">
                  <strong className="text-white">MEscan</strong>
                  <span className="text-slate-500 ml-1">— Mosaic evolution protein identification platform</span>
                </li>
              </ul>
            </div>

            <div className="glass p-5">
              <span className="text-xs font-bold text-violet-400 bg-violet-500/10 px-1.5 py-0.5 rounded">Patent</span>
              <ul className="mt-3 space-y-2">
                <li className="text-sm text-slate-300">
                  Intelligent comb based on Wood's lamp principle
                </li>
              </ul>
            </div>
          </div>

          {/* In preparation */}
          <p className="text-xs text-slate-500 italic text-center">
            Additional manuscripts under preparation
          </p>
        </div>
      </div>
    </section>
  );
}
