import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import yash from "../assets/yash_photo.png"
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0c] pt-24"
    >
      {/* single soft accent glow */}
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#34d399]/[0.07] blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#34d399]">
            About Me
          </p>
<h1 className="text-5xl font-black leading-[1.05] tracking-tight text-[#f2f2f3] sm:text-6xl lg:text-7xl">
  Hi, I'm
  <span className="block text-[#34d399]">Yash Shukla.</span>
</h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#a1a1aa]">
            I am a BCA student and aspiring full-stack developer. I build
            modern, responsive and user-friendly web applications using
            React and modern technologies.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-[#a1a1aa]">
            <span className="h-2 w-2 rounded-full bg-[#34d399]" />
            BCA · Full Stack Development
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#34d399] px-7 py-3.5 font-bold text-[#0a0a0c] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(52,211,153,0.35)]"
            >
              View My Work
            </a>
            <a
              href="mailto:yashshuklashuklas@gmail.com"
              className="rounded-full border border-white/10 px-7 py-3.5 font-bold text-[#f2f2f3] transition duration-300 hover:-translate-y-1 hover:border-[#34d399]/50 hover:text-[#34d399]"
            >
              yashshuklashuklas@gmail.com
            </a>
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href="https://github.com/yashshukla011"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#a1a1aa] transition hover:-translate-y-1 hover:border-[#34d399]/50 hover:text-[#34d399]"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-shukla-108563327/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#a1a1aa] transition hover:-translate-y-1 hover:border-[#34d399]/50 hover:text-[#34d399]"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://leetcode.com/u/yashshukla8796/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#a1a1aa] transition hover:-translate-y-1 hover:border-[#34d399]/50 hover:text-[#34d399]"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
          </div>
        </motion.div>

        {/* Right — avatar card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="rounded-[28px] border border-white/10 bg-[#111114] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a1a1f] to-[#0d0d10] text-6xl font-black text-[#34d399]">
                            <img
                src={yash}
                alt="Yash Shukla"
                className="h-full w-full object-cover"
              />

            </div>
            <div className="mt-6 flex items-center gap-3 text-[#a1a1aa]">
              <FaCode className="text-[#34d399]" />
              <span className="text-sm font-medium">
                Frontend · Backend · DSA
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
