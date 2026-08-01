import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { SiLeetcode } from "react-icons/si";

function LeetCode() {
  const [data, setData] = useState([]);
  const [solved, setSolved] = useState(0);
  const [streak, setStreak] = useState(0);
  const [activeDays, setActiveDays] = useState(0);

  useEffect(() => {
    fetch("https://portfolio-2-0-1-7o8u.onrender.com/api/leetcode/activity")
      .then((res) => {
        if (!res.ok) {
          throw new Error("API Failed");
        }
        return res.json();
      })
      .then((result) => {
        setSolved(result.totalSolved);
        setStreak(result.streak);
        setActiveDays(result.activeDays);
        setData(result.activity);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111114] p-7 sm:p-9">
      {/* Header */}
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2 text-[#f2f2f3]">
            <SiLeetcode className="text-[#34d399]" />
            <h3 className="text-lg font-bold">LeetCode Activity</h3>
          </div>
          <p className="mt-2 text-sm text-[#a1a1aa]">
            My coding consistency &amp; problem solving journey
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#0a0a0c] px-6 py-4 text-center">
          <h2 className="text-3xl font-black text-[#34d399]">{solved}+</h2>
          <p className="text-xs font-medium text-[#a1a1aa]">Problems Solved</p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 flex gap-10 text-sm text-[#a1a1aa]">
        <p>
          <span className="font-bold text-[#f2f2f3]">{activeDays}</span> Active
          Days
        </p>
        <p>
          <span className="font-bold text-[#f2f2f3]">{streak}</span> Max
          Streak
        </p>
      </div>

      {/* Calendar */}
      <div className="mt-6 overflow-x-auto border-t border-white/10 pt-6">
        {data.length > 0 ? (
          <ActivityCalendar
            data={data}
            blockSize={14}
            blockMargin={5}
            showWeekdayLabels
            fontSize={13}
            theme={{
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
          />
        ) : (
          <p className="text-sm text-[#a1a1aa]">Loading activity...</p>
        )}
      </div>
    </div>
  );
}

export default LeetCode;