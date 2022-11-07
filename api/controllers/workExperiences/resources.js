const db = require("../../models");
const _ = require("lodash");
const { WorkExperience } = db;

/**
 * @description Queries for WorkExperiences
 * @param {Request} req HTTP Request
 * @param {Request} res HTTP Response
 * @param {NextFunction} next The next function to call
 * @returns {Promise<void>} callback to next function
 */
async function findAll(req, res, next) {
  const queryParams = req.query;
  const DEFAULT_LIMIT = 50;

  await WorkExperience.findAll({ where: queryParams, limit: DEFAULT_LIMIT })
    .then((WorkExperiences) => {
      const result = _.map(
        WorkExperiences,
        (WorkExperience) => WorkExperience.dataValues
      );
      req.body.response = result;
    })
    .catch(next);

  return next();
}

async function WorkExperienceProfile(req, res, next) {}

/**
 * @description Present WorkExperiences and omit password
 * @param {Request} req HTTP Request
 * @param {Request} res HTTP Response
 * @returns {void} presents WorkExperiences to response
 */
async function presentAll(req, res) {
  const omitFields = ["password", "createdAt", "updatedAt"];

  res.status(200);
  res.json({
    WorkExperiences: _.map(req.body.response, (WorkExperience) =>
      _.omit(WorkExperience, omitFields)
    ),
  });
}

module.exports = {
  findAll,
  presentAll,
};
