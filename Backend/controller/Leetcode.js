import axios from "axios";

export const getLeetcode = async (req, res) => {
  try {
    const username = "yashshukla8796";

    const query = `
      query {
        matchedUser(username: "${username}") {

          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }

          userCalendar {
            streak
            totalActiveDays
            submissionCalendar
          }

        }
      }
    `;

    const response = await axios.post(
      "https://leetcode.com/graphql",
      { query }
    );

    const user = response.data.data.matchedUser;

    const totalSolved = user.submitStatsGlobal.acSubmissionNum.find(
      (item) => item.difficulty === "All"
    ).count;

    const calendar = JSON.parse(user.userCalendar.submissionCalendar);

    const activity = Object.entries(calendar).map(([timestamp, count]) => {
      const date = new Date(Number(timestamp) * 1000)
        .toISOString()
        .split("T")[0];

      let level = 0;

      if (count > 0 && count <= 2) level = 1;
      else if (count <= 5) level = 2;
      else if (count <= 8) level = 3;
      else if (count > 8) level = 4;

      return {
        date,
        count,
        level,
      };
    });

    res.json({
      totalSolved,
      streak: user.userCalendar.streak,
      activeDays: user.userCalendar.totalActiveDays,
      activity,
    });
  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      message: error.message,
    });
  }
};