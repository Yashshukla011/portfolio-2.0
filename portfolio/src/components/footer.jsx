const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0c] px-6 py-14 sm:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <a href="#home" className="text-xl font-black tracking-tight text-[#f2f2f3]">
            Yash<span className="text-[#34d399]">.</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#a1a1aa]">
            I am a BCA student and aspiring full-stack developer. I build
            modern, responsive and user-friendly web applications using
            React and modern technologies.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#34d399]">
            Quick Links
          </p>
          <div className="mt-4 flex flex-col gap-2.5">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#a1a1aa] transition hover:text-[#f2f2f3]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#34d399]">
            Let&apos;s Connect
          </p>
          <p className="mt-4 text-sm leading-6 text-[#a1a1aa]">
            Interested in working together or discussing a project? Feel
            free to reach out.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block rounded-full bg-[#34d399] px-5 py-2.5 text-sm font-bold text-[#0a0a0c] transition hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-[#6b6b70]">
        © {new Date().getFullYear()} Yash Shukla. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
