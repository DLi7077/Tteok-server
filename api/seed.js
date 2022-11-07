const db = require("./models");

const { User, WorkExperience, Project } = db;

const USERS = [
  {
    username: "Butterriolu",
    email: "butterriolu@fakemail.com",
    password: "butterriolupassword",
    portfolio_url: "https://dli7077.github.io/portfolio/",
    resume_url:
      "https://storage.googleapis.com/katsudon-assets/Devin%20L.%20Resume.pdf",
    description: "",
  },
  {
    username: "FBI Agent",
    email: "FBI Agent@fakemail.com",
    password: "FBIagentpassword",
    portfolio_url: "https://dli7077.github.io/portfolio/",
    resume_url:
      "https://storage.googleapis.com/katsudon-assets/Devin%20L.%20Resume.pdf",
    description: "",
  },
];

const WORKEXPS = [
  {
    user_id: 1,
    company: "CUNY Hunter College",
    job_title: "UTA",
    start_month: 8,
    start_year: 2022,
    end_month: null,
    end_year: null,
    bullets: [
      "Did this and that while providing something else which lead to a quantifyable change of X percent",
      "The fitness gram pacer test is a multi-aerobic capacity test that progressively gets more difficult as it continues",
    ],
    tools_used: ["C++"],
  },
  {
    user_id: 1,
    company: "The Golden House",
    job_title: "Full Stack Engineer",
    start_month: 2,
    start_year: 2022,
    end_month: null,
    end_year: null,
    bullets: [
      "Engineered a full stack application to host a leaderboard displaying the achievements of 800+ users",
      "Designed scalable MongoDB schemas to accurately store user entries and character records",
      "Implemented REST APIs using Mongoose queries for data retrieval and automated user submissions",
      "Built a data migration script to migrate 700+ entries from TablePress spreadsheets into production",
      "Created an approval table to allow our moderation team to approve and modify submissions 5 times faster",
      "Performed a database backfill to reduce the runtime of an aggregation query by ~60%",
    ],
    tools_used: ["TypeScript", "JavaScript", "NodeJS", "MongoDB", "ReactJS"],
  },
];

const PROJECTS = [
  {
    user_id: 1,
    title: "Katsudon Leetcode",
    brief: "Full stack website",
    start_month: 8,
    start_year: 2022,
    end_month: null,
    end_year: null,
    bullets: [
      "Engineered a social platform for users to compare LeetCode solutions with friends",
      "Built a server and utilizing Mongoose aggregation queries, and an user interface using ReactJS and CSS",
      "Created and published a chrome extension to automate solution submissions for authorized users",
    ],
    tools_used: ["TypeScript", "JavaScript", "NodeJS", "MongoDB", "ReactJS"],
  },
  {
    user_id: 1,
    title: "Genshin Impact Damage Calculator",
    brief: "Website",
    start_month: 8,
    start_year: 2021,
    end_month: 10,
    end_year: 2021,
    bullets: [
      "Built an alternative damage calculator that estimates a characters' damage with less needed information",
      "Allowed a small community to accurately predict their characters' damage consistently within 99.5% accuracy",
      "Helped over 600 players decide on the value of an unreleased character by analyzing survey data",
      "Set the community standard for a character's damage by generating all ways their stats could be optimized",
    ],
    tools_used: ["HTML", "JavaScript", "CSS"],
  },
];

const seed = async function () {
  await db.sequelize.sync({ force: true });
  db.User.destroy({ where: {}, truncate: true });
  db.WorkExperience.destroy({ where: {}, truncate: true });
  db.Project.destroy({ where: {}, truncate: true });

  await User.sync({ force: true });
  await WorkExperience.sync({ force: true });
  await Project.sync({ force: true });
  // seed tables topologically
  await Promise.all(USERS.map((user) => User.create(user)));
  await Promise.all(WORKEXPS.map((user) => WorkExperience.create(user)));
  await Promise.all(PROJECTS.map((user) => Project.create(user)));
};

module.exports = seed;
