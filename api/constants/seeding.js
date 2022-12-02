const USERS = [
  {
    id: 1,
    username: "Butterriolu",
    email: "butterriolu@fakemail.com",
    password: "butterriolupassword",
    portfolio_url: "https://dli7077.github.io/portfolio/",
    active_resume: 1,
    description: "",
  },
  {
    id: 2,
    username: "FBI Agent",
    email: "FBI Agent@fakemail.com",
    password: "FBIagentpassword",
    active_resume: 2,
    description: "",
  },
  {
    id: 3,
    username: "John Doe",
    email: "johndoe@gmail.com",
    password: "johndoepassword",
    active_resume: 3,
    description: "Software Engineer at Google",
  },
  {
    id: 4,
    username: "Peter Dubcak",
    email: "peterdubcak.com",
    password: "peterdubcakpassword",
    description: "Senior Software Manager at Captial One",
  },
  {
    id: 5,
    username: "Patrick Shyu",
    email: "techlead.com",
    password: "techlead",
    description: "ex-Google ex-Facebook Tech Lead",
  },
  {
    id: 6,
    username: "Coffeezilla",
    email: "coffeezilla@coffee.com",
    password: "coffeezilla@password",
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
      "https://www.freecodecamp.org/news/content/images/2020/03/1_software_resume_tk-1.jpg",
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

module.exports = {
  USERS,
  RESUMES,
  RESUME_COMMENTS,
};
