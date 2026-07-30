import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <a href="#home" className="text-xl font-black tracking-tight text-[#f2f2f3]">
          Yash<span className="text-[#34d399]">.</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#a1a1aa] transition hover:text-[#f2f2f3]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-[#f2f2f3] transition hover:border-[#34d399]/50 hover:text-[#34d399] md:block"
        >
          Let&apos;s Talk
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-xl text-[#f2f2f3] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-white/5 bg-[#0a0a0c] px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-[#a1a1aa] transition hover:bg-white/5 hover:text-[#f2f2f3]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
