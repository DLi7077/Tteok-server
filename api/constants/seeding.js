const USERS = [
  {
    id: 1,
    username: "Butterriolu",
    email: "butterriolu@fakemail.com",
    password: "butterriolupassword",
    portfolio_url: "https://dli7077.github.io/portfolio/",
    profile_picture_url:
      "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png",
    active_resume: 1,
    description: "building full stack projects for fun",
  },
  {
    id: 2,
    username: "FBI Agent",
    email: "FBI Agent@fakemail.com",
    password: "FBIagentpassword",
    profile_picture_url:
      "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png",
    active_resume: 2,
    description: "Backend Developer",
  },
  {
    id: 3,
    username: "John Doe",
    email: "johndoe@gmail.com",
    password: "johndoepassword",
    profile_picture_url:
      "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png",
    active_resume: 3,
    description: "Software Engineer at Google",
  },
  {
    id: 4,
    username: "Peter Dubcak",
    email: "peterdubcak.com",
    password: "peterdubcakpassword",
    profile_picture_url:
      "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png",
    description: "Senior Software Manager at Captial One",
  },
  {
    id: 5,
    username: "Patrick Shyu",
    email: "techlead.com",
    password: "techlead",
    profile_picture_url:
      "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png",
    description: "ex-Google ex-Facebook Tech Lead",
  },
  {
    id: 6,
    username: "Coffeezilla",
    email: "coffeezilla@coffee.com",
    password: "coffeezilla@password",
    profile_picture_url:
      "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png",
    description: "Scam exposer",
  },
];

const RESUMES = [
  {
    user_id: 1,
    resume_url:
      "https://storage.googleapis.com/katsudon-assets/Devin%20L.%20Resume.pdf",
  },
  {
    user_id: 2,
    resume_url:
      "https://docs.google.com/document/d/1zmKwdM2QMFj0ypEKHiVswKaoRkXnTGLPdvZgT19nXlw/edit",
  },
  {
    user_id: 3,
    resume_url:
      "https://www.freecodecamp.org/news/content/images/2020/03/1_software_resume_tk-1.jpg",
  },
];

const RESUME_COMMENTS = [
  {
    user_id: 2,
    resume_post_id: 1,
    comment: "Not bad",
  },
  {
    user_id: 2,
    resume_post_id: 1,
    comment: "Nice one dude",
  },
  {
    user_id: 2,
    resume_post_id: 1,
    comment: "Pretty good",
  },
  {
    user_id: 2,
    resume_post_id: 1,
    comment: "Double columns is a sin",
  },
  {
    user_id: 2,
    resume_post_id: 1,
    comment: "Idk man looks kinda",
  },
];

const WORKEXPS = [
  // Devin
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
  // FBI Agent
  {
    user_id: 2,
    company: "CUNY Tech Prep",
    job_title:
      "Tech Fellow 2023, Cohort 8, Technical and Professional Development Program",
    start_month: 7,
    start_year: 2022,
    end_month: null,
    end_year: null,
    bullets: [
      "Learn JavaScript, HTML, CSS, React, Bootstrap, and GitHub",
      "Practice interview skills with industry professionals",
    ],
    tools_used: ["JavaScript", "HTML", "CSS", "React", "Bootstrap", "GitHub"],
  },
  {
    user_id: 2,
    company: "Teachers' Retirement System of New York",
    job_title: "College Aid Developer",
    start_month: 5,
    start_year: 2022,
    end_month: null,
    end_year: null,
    bullets: [
      "Develop Web Application Lookup Page and Maintenance Page by using C#, .NET, and SQL",
      "Utilize Azure DevOps to communicate with team using good Agile practice and GitHub",
      "Conduct 3 bug fixes and 1 feature developments on the development branch",
      "Improve work flow of TRS Agents by automating the business process and maximize data retrieval process",
    ],
    tools_used: ["C#", ".NET", "SQL", "Azure"],
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
    title: "The Golden House",
    brief: "Full Stack Application",
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
  {
    user_id: 2,
    title: "Rent A Home Android App",
    brief: "Website",
    start_month: 5,
    start_year: 2021,
    end_month: 10,
    end_year: 2021,
    bullets: [
      "Communicated with team members on discord in order to develop app",
      "Develop the back-end of the application",
    ],
    tools_used: ["Android Studio", "Back4App", "Java"],
  },
];

module.exports = {
  USERS,
  RESUMES,
  RESUME_COMMENTS,
  WORKEXPS,
  PROJECTS,
};
