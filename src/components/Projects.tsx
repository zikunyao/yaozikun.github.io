const projects = [
  { id:'hvrclassify', num:'01', title:'HVRclassify', kind:'PUBLISHED RESEARCH · SCIENTIFIC SOFTWARE', statement:'Identifying and classifying mosaic evolution in outer membrane proteins.', desc:'A bioinformatics project on highly variable regions in bacterial outer membrane proteins. The associated genome-wide study in E. coli was published in Applied and Environmental Microbiology in 2025.', proof:['Associated publication: Applied and Environmental Microbiology, 2025','Study findings: 21 OMP families, including 16 newly identified families','HVRclassify V1.0 software copyright registered in February 2026; rights holder: Shenzhen University'], tech:['Mosaic evolution','HVR analysis','Bioinformatics'], href:'https://doi.org/10.1128/aem.00557-25', action:'Read associated paper', evidence:[{src:'/awards/aem-paper.png',label:'Paper preview'},{src:'/awards/hvrclassify-copyright.png',label:'HVRclassify software certificate'}] },
  { id:'isle', num:'02', title:'Isle', kind:'RESEARCH PLATFORM', statement:'Connecting different steps of pathogen protein analysis.', desc:'A research platform bringing together secretion protein prediction, subcellular localization, host–pathogen protein interaction prediction and pathway analysis.', proof:['Four analysis modules connected through a web interface','National Second Prize in the C4 competition'], tech:['Protein prediction','Host–pathogen analysis','Web platform'], href:'https://mbs.szu-bioinf.org/PathoMamba/frontend/', action:'Explore platform', evidence:[{src:'/awards/c4-national.jpg',label:'Competition certificate'}] },
  { id:'mescan', num:'03', title:'MEscan', kind:'RESEARCH SOFTWARE · IN PROGRESS', statement:'Developing a workflow for mosaic-evolution screening.', desc:'An ongoing project focused on screening proteins for mosaic evolution. The workflow is still being developed.', proof:['In development'], tech:['Mosaic evolution','Workflow development'], evidence:[] },
  { id:'pbl', num:'04', title:'PBL PPT Agent', kind:'SMALL SIDE PROJECT · COLLEGE COMPETITION', statement:'A small agent for preparing PBL presentations.', desc:'An LLM-based agent that helps prepare PowerPoint presentations for problem-based learning. Built as a small experiment for a college competition.', proof:['College competition project'], tech:['LLM agent','PBL presentations'], evidence:[] },
];

export default function Projects() {
  return <section id="projects" className="project-section"><div className="content-col">
    <div className="section-intro"><div><p className="eyebrow">Selected projects</p><h2 className="section-heading">Research, in progress<br/>and in practice.</h2></div><p>Published work with HVRclassify, the Isle research platform, ongoing development of MEscan, and a small PBL presentation agent.</p></div>
    <div className="project-list">{projects.map(p => <article id={p.id} className={`project-row ${p.id === 'pbl' ? 'project-row-small' : ''}`} key={p.id}>
      <div className="project-meta"><span>{p.num}</span><p>{p.kind}</p></div>
      <div className="project-main"><h3>{p.title}</h3><h4>{p.statement}</h4><p>{p.desc}</p>
        {'href' in p && <div className="project-actions"><a href={p.href} target="_blank" rel="noreferrer">{p.action} ↗</a></div>}
        {p.evidence.length > 0 && <details className="project-details"><summary>Related outputs <span aria-hidden="true">+</span></summary><ul>{p.proof.map(v => <li key={v}>{v}</li>)}</ul>{p.evidence.map(e => <a key={e.src} href={e.src} target="_blank" rel="noreferrer" className="project-evidence"><img src={e.src} alt={e.label} loading="lazy"/><span>{e.label} ↗</span></a>)}</details>}
      </div><div className="project-tech">{p.tech.map(v => <span key={v}>{v}</span>)}</div>
    </article>)}</div>
  </div></section>;
}
