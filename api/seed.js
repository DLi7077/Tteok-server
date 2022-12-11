const db = require("./models");
const bcrypt = require("bcrypt");
const { User, WorkExperience, Project, ResumePost, ResumeComment } = db;
const { USERS, RESUMES, RESUME_COMMENTS, WORKEXPS, PROJECTS } = require("./constants/seeding");


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
