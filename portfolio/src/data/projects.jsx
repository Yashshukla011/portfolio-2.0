import { FaExternalLinkAlt } from "react-icons/fa";

const PROJECTS = [
  {
    n: "01",
    featured: true,
    tag: "MERN Stack Project",
    title: "Logistics Cargo Management System",
    desc: "A full-stack logistics and cargo management system where users can create and track shipments, manage payments, warehouses, and delivery operations.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://logistics-cargo-management-system-p.vercel.app/",
  },
  {
    n: "02",
    featured: true,
    tag: "React Project",
    title: "Quiz Battle Game",
    desc: "An interactive quiz game where users can answer multiple-choice questions, test their knowledge, track their score, and enjoy a smooth gaming experience.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://quizegame-cyan.vercel.app/",
  },
  {
    n: "03",
    featured: false,
    tag: "JavaScript Game",
    title: "Snake Game",
    desc: "A classic Snake game built with JavaScript featuring keyboard controls, score tracking and dynamic gameplay.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: null,
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-[#0a0a0c] px-6 py-28 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#34d399]">
          Things I Have Built
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#f2f2f3] sm:text-5xl">
          Projects, with code.
        </h2>
        <p className="mt-4 max-w-2xl text-[#a1a1aa]">
          A selection of projects where I applied programming,
          problem-solving and modern web development skills.
        </p>

        <div className="mt-14 space-y-6">
          {PROJECTS.map((p) => (
            <div
              key={p.n}
              className="group grid gap-6 rounded-2xl border border-white/10 bg-[#111114] p-7 transition hover:border-[#34d399]/30 sm:p-9 md:grid-cols-[auto_1fr]"
            >
              <span className="text-4xl font-black text-white/10">{p.n}</span>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  {p.featured && (
                    <span className="rounded-full bg-[#34d399]/10 px-3 py-1 text-xs font-bold text-[#34d399]">
                      Featured
                    </span>
                  )}
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#a1a1aa]">
                    {p.tag}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-[#f2f2f3]">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#a1a1aa]">
                  {p.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-[#e4e4e7]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#34d399] hover:underline"
                  >
                    Live Demo <FaExternalLinkAlt size={11} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
