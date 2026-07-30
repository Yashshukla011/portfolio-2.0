import GitHubActivity from "./GitHubActivity";
import LeetCode from "./LeetCode";

function Stats() {
  return (
    <section id="stats" className="bg-[#0a0a0c] px-6 py-10 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-6">
        <GitHubActivity />
        <LeetCode />
      </div>
    </section>
  );
}

export default Stats;