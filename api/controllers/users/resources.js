const db = require("../../models");
const _ = require("lodash");
const { User } = db;

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
      req.body.response = result;
    })
    .catch(next);

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
    users: _.map(req.body.response, (user) => _.omit(user, omitFields)),
  });
}

module.exports = {
  findAll,
  presentAll,
};
