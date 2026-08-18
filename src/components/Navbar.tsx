const links = [
  { label: 'Work', href: '#projects' },
  { label: 'Research', href: '#publications' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  return (
    <nav className="site-nav sticky top-0 z-50">
      <div className="content-col flex h-14 items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[0.6rem] font-bold tracking-tighter text-black transition-transform group-hover:scale-105">
            ZY
          </span>
          <span className="nav-brand-label text-sm font-semibold tracking-tight text-white">
            Zikun Yao
          </span>
        </a>
        <div className="nav-links flex items-center gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs text-[#a1a1a6] transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
