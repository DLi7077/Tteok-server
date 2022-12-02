const db = require("./models");
const bcrypt = require("bcrypt");
const { User, WorkExperience, Project, ResumePost, ResumeComment } = db;
const { USERS, RESUMES, RESUME_COMMENTS } = require("./constants/seeding");

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

  const Models = [User, WorkExperience, Project, ResumePost, ResumeComment];

  // reset tables on server load
  Models.map((model) => {
    model.destroy({ where: {}, truncate: true });
    model.sync({ force: true });
  });

  /*
    Postgres only fix:
      Since we provided fixed id's for our seed data,
      we have to reset our id sequences in postgres.
      (ONLY do this for Models with autoincrementing id's)
  */
  const tables = [
    "User",
    "WorkExperience",
    "Project",
    "ResumePost",
    "ResumeComment",
  ];
  const tableResetTasks = tables.map((table) => {
    return db.sequelize.query(
      `select setval('"${table}_id_seq"',${table.length + 1}, true);`
    );
  });

  await Promise.all(tableResetTasks);

  // seed tables topologically
  await Promise.all(
    USERS.map(async (user) => {
      const saltRounds = 10;
      const encryptedPassword = await bcrypt.hash(user.password, saltRounds);
      return User.create({
        ...user,
        password: encryptedPassword,
      });
    })
  );
  await Promise.all(RESUMES.map((resumePost) => ResumePost.create(resumePost)));
  await Promise.all(
    RESUME_COMMENTS.map((comment) => ResumeComment.create(comment))
  );
  await Promise.all(WORKEXPS.map((workexp) => WorkExperience.create(workexp)));
  await Promise.all(PROJECTS.map((project) => Project.create(project)));
};

module.exports = seed;
