import { useState } from 'react';

const projects = [
  { num:'01', title:'PathoMamba', kind:'AI PLATFORM · PATHOGEN BIOLOGY', statement:'A research system that connects prediction with biological interpretation.', desc:'SWA, Bi-Mamba and ESM2 embeddings power four connected modules for secretion proteins—from identification to host–pathogen interaction.', proof:['C4 National Second Prize','NCCBB 2026 Oral Presentation','4 modules + GnTxSPdb'], tech:['SWA + Bi-Mamba','ESM2','Protein LMs'], href:'https://mbs.szu-bioinf.org/PathoMamba/frontend/', action:'Open live platform', image:'/awards/c4-national.jpg' },
  { num:'02', title:'MEscan', kind:'SCIENTIFIC SOFTWARE · EVOLUTION', statement:'Turning a complex evolutionary screen into a reproducible workflow.', desc:'An automated platform for identifying mosaic-evolution proteins and locating hypervariable regions across large sequence collections.', proof:['Software copyright registered','Biomedical Innovation award','Liyuan Challenge Second Prize'], tech:['HVR detection','Bioinformatics','Pipeline'], image:'/awards/hvrclassify-copyright.png' },
  { num:'03', title:'HVR Evolution', kind:'PUBLISHED RESEARCH · GENOMICS', statement:'A genome-wide view of hidden variation in bacterial outer membrane proteins.', desc:'The first genome-wide screen of OMP families under mosaic evolution, identifying 21 families—including 16 newly characterized—with structural and immunogenic patterns.', proof:['Applied and Environmental Microbiology · 2025','21 OMP families','16 newly characterized'], tech:['Phylogenetics','BLAST','Genomics'], href:'https://doi.org/10.1128/aem.00557-25', action:'Read the paper', image:'/awards/aem-paper.png' },
  { num:'04', title:'Medical AI', kind:'LOCAL AI · KNOWLEDGE SYSTEM', statement:'From literature retrieval to a presentation-ready evidence trail.', desc:'A local-LLM workflow for medical education that retrieves, analyzes and structures literature while keeping the process reproducible.', proof:['First Prize','Best Popularity Award','Local model deployment'], tech:['RAG','LLM','NLP'], image:'/awards/patent.png' },
];

export default function Projects() {
  const [image, setImage] = useState<string | null>(null);
  return <section id="projects" className="project-section"><div className="content-col">
    <div className="section-intro"><div><p className="eyebrow">Selected work</p><h2 className="section-heading">Built to answer<br/>real questions.</h2></div><p>Four projects across biological sequence intelligence, scientific software, and medical knowledge systems.</p></div>
    <div className="project-list">{projects.map((p) => <article className="project-row" key={p.title}>
      <div className="project-meta"><span>{p.num}</span><p>{p.kind}</p></div>
      <div className="project-main"><h3>{p.title}</h3><h4>{p.statement}</h4><p>{p.desc}</p><div className="project-proof">{p.proof.map(v => <span key={v}>{v}</span>)}</div><div className="project-actions">{p.href && <a href={p.href} target="_blank" rel="noreferrer">{p.action} ↗</a>}<button onClick={() => setImage(p.image)}>View evidence</button></div></div>
      <div className="project-tech">{p.tech.map(v => <span key={v}>{v}</span>)}</div>
    </article>)}</div>
  </div>{image && <div className="evidence-modal" role="dialog" aria-modal="true" onClick={() => setImage(null)}><button aria-label="Close" onClick={() => setImage(null)}>×</button><img src={image} alt="Research evidence" onClick={e => e.stopPropagation()}/></div>}</section>;
}
