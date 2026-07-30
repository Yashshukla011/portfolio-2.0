// import axios from "axios";

// export const getLeetcode = async (req, res) => {
//   try {

//     const username = "yashshukla8796";

//     const query = `
//       query {
//         matchedUser(username: "${username}") {
//           submitStatsGlobal {
//             acSubmissionNum {
//               difficulty
//               count
//             }
//           }
//         }
//       }
//     `;


//     const response = await axios.post(
//       "https://leetcode.com/graphql",
//       {
//         query
//       }
//     );


//     const data =
//       response.data.data.matchedUser.submitStatsGlobal.acSubmissionNum;


//     const totalSolved = data.find(
//       item => item.difficulty === "All"
//     ).count;


//     res.json({
//       totalSolved
//     });


//   } catch(error) {

//     res.status(500).json({
//       message:error.message
//     });

//   }
// };