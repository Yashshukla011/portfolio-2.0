import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";

import {
  FaJava,
  FaCode,
  FaMicrochip,
  FaCss3Alt,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

const CATEGORIES = [
  {
    title: "Frontend Development",
    desc: "Creating responsive, modern and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3Alt }, // Changed
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend Development",
    desc: "Building APIs, server-side applications and database systems.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Programming",
    desc: "Learning problem-solving, logic and data structures.",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "C++", icon: FaMicrochip },
      { name: "C", icon: FaCode },
    ],
  },
  {
    title: "Tools & Workflow",
    desc: "Tools used to build, manage and deploy projects.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vite", icon: SiVite },
      { name: "VS Code", icon: VscVscode },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#0a0a0c] px-6 py-28 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#34d399]">
          What I Know
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#f2f2f3] sm:text-5xl">
          Skills.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-white/10 bg-[#111114] p-7 transition hover:border-[#34d399]/30"
            >
              <h3 className="text-lg font-bold text-[#f2f2f3]">
                {cat.title}
              </h3>

              <p className="mt-2 text-sm text-[#a1a1aa]">
                {cat.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0a0c] px-3.5 py-2 text-xs font-semibold text-[#e4e4e7]"
                  >
                    <s.icon className="text-[#34d399] text-lg" />
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;