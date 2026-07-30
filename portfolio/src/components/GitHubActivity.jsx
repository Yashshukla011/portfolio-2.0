import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function GitHubActivity() {
  const githubUsername = "yashshukla011";

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111114] p-7 sm:p-9">
      <div className="flex items-center gap-2 text-[#f2f2f3]">
        <FaGithub className="text-[#34d399]" />
        <h3 className="text-lg font-bold">GitHub Activity</h3>
      </div>
      <p className="mt-2 text-sm text-[#a1a1aa]">
        A visual overview of my coding activity and contributions throughout
        the year.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-6 overflow-x-auto border-t border-white/10 pt-6"
      >
        <div className="min-w-[700px]">
          <GitHubCalendar
            username={githubUsername}
            colorScheme="dark"
            fontSize={14}
            blockSize={13}
            blockMargin={5}
          />
        </div>

        <div className="mt-7 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-[#a1a1aa]">
            Contributions from my GitHub profile
          </p>

          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[#34d399] px-5 py-3 text-sm font-bold text-[#0a0a0c] transition hover:-translate-y-0.5"
          >
            Visit GitHub
            <FaArrowUpRightFromSquare size={12} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default GitHubActivity;