const db = require("../../models");
const _ = require("lodash");
const { User, WorkExperience, Project } = db;

/**
 * @description Creates a user
 * @param {Request} req HTTP Request
 * @param {Request} res HTTP Response
 * @param {NextFunction} next The next function to call
 * @returns {Promise<void>} callback to next function
 */
async function createUser(req, res, next) {
  await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    profile_picture_url: req.body.profile_picture_url,
    portfolio_url: req.body.portfolio_url,
    description: req.body.description,
  })
    .then((createdUser) => {
      req.response = createdUser.dataValues;
    })
    .catch(next);

  return next();
}

/**
 * @description Queries for users
 * @param {Request} req HTTP Request
 * @param {Request} res HTTP Response
 * @param {NextFunction} next The next function to call
 * @returns {Promise<void>} callback to next function
 */
async function findAll(req, res, next) {
  const queryParams = req.query;
  const DEFAULT_LIMIT = 50;

  await User.findAll({ where: queryParams, limit: DEFAULT_LIMIT })
    .then((users) => {
      const result = _.map(users, (user) => user.dataValues);
      req.response = result;
    })
    .catch(next);

  return next();
}

async function userProfile(req, res, next, user_id) {
  const user = await User.findOne({
    where: { id: user_id },
  })
    .then((user) => user.dataValues)
    .catch(next);
  const workexps = await WorkExperience.findAll({
    where: { user_id: user_id },
  })
    .then((exps) => exps.map((exp) => exp.dataValues))
    .catch(next);

  const projects = await Project.findAll({
    where: { user_id: user_id },
  })
    .then((projects) => projects.map((project) => project.dataValues))
    .catch(next);

  req.response = {
    user: user,
    work_experiences: workexps,
    projects: projects,
  };

  return next();
}

/**
 * @description Present users and omit password
 * @param {Request} req HTTP Request
 * @param {Request} res HTTP Response
 * @returns {void} presents users to response
 */
async function presentAll(req, res) {
  const omitFields = ["password", "createdAt", "updatedAt"];
  res.status(200);
  res.json({
    users: _.map(req.response, (user) => _.omit(user, omitFields)),
  });
}

/**
 * @description Present a single user and omit password
 * @param {Request} req HTTP Request
 * @param {Request} res HTTP Response
 * @returns {void} presents users to response
 */
async function presentUser(req, res) {
  const omitFields = ["password", "createdAt", "updatedAt"];
  res.status(200);
  res.json({
    user: _.omit(req.response, omitFields),
  });
}

async function presentProfile(req, res) {
  const omitFields = ["createdAt", "updatedAt"];
  res.status(200);
  res.json({
    profile: _.omit(req.response.user, [...omitFields, "password"]),
    work_experiences: req.response.work_experiences.map((exp) =>
      _.omit(exp, omitFields)
    ),
    projects: req.response.projects.map((project) =>
      _.omit(project, omitFields)
    ),
  });
}

module.exports = {
  createUser,
  findAll,
  userProfile,
  presentAll,
  presentUser,
  presentProfile,
};
