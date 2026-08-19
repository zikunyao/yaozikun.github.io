const outputs = [
  { type:'Journal article', year:'2025', title:'Genome-wide investigation of outer membrane protein families under mosaic evolution in Escherichia coli', meta:'Applied and Environmental Microbiology · Cao X, Cao C, Chen Z, Li J, Yao Z et al.', href:'https://doi.org/10.1128/aem.00557-25', link:'DOI 10.1128/aem.00557-25' },
  { type:'Scientific software', year:'Registered', title:'HVRClassify · MEscan', meta:'HVR classification, analysis and automated mosaic-evolution protein identification.' },
  { type:'Patent', year:'Filed', title:"Intelligent comb based on Wood's lamp principle", meta:'A medical-device concept connecting optical examination with accessible everyday use.' },
];
export default function Publications() {
  return <section id="publications" className="output-section"><div className="content-col">
    <div className="section-intro"><div><p className="eyebrow">Publications & outputs</p><h2 className="section-heading">Work that leaves<br/>a trace.</h2></div><p>Peer-reviewed research, registered software and applied intellectual property.</p></div>
    <div className="output-list">{outputs.map(o => <article key={o.title}><div><span>{o.type}</span><time>{o.year}</time></div><h3>{o.title}</h3><p>{o.meta}</p>{o.href && <a href={o.href} target="_blank" rel="noreferrer">{o.link} ↗</a>}</article>)}</div>
  </div></section>;
}
