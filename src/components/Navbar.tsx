const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/50" style={{ background: 'rgba(5, 11, 20, 0.85)', backdropFilter: 'blur(16px)' }}>
      <div className="content-col flex items-center justify-between h-12">
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-[0.6rem] font-bold text-white tracking-tighter shrink-0 group-hover:from-blue-400 group-hover:to-cyan-300 transition-all">
            ZY
          </span>
          <span className="nav-brand-label text-sm font-semibold text-white tracking-tight group-hover:text-blue-300 transition-colors">
            Zikun Yao
          </span>
        </a>
        <div className="nav-links flex items-center gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs text-slate-400 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
