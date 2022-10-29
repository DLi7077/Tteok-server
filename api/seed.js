const db = require("./models");

const { User } = db;

const USERS = [
  {
    id: 1,
    username: "Butterriolu",
    email: "butterriolu@fakemail.com",
    password: "butterriolupassword",
    portfolio_url: "https://dli7077.github.io/portfolio/",
    resume_url:
      "https://storage.googleapis.com/katsudon-assets/Devin%20L.%20Resume.pdf",
    description: "",
  },
  {
    id: 2,
    username: "FBI Agent",
    email: "FBI Agent@fakemail.com",
    password: "FBIagentpassword",
    portfolio_url: "https://dli7077.github.io/portfolio/",
    resume_url:
      "https://storage.googleapis.com/katsudon-assets/Devin%20L.%20Resume.pdf",
    description: "",
  },
];

const seed = async function () {
  await db.sequelize.sync({ force: true });
  await User.sync({ force: true });
  // seed tables topologically
  await Promise.all(USERS.map((user) => User.create(user)));
};

module.exports = seed;
