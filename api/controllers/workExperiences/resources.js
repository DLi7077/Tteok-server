const db = require("../../models");
const _ = require("lodash");
const { WorkExperience } = db;

/**
 * @description Creates a single work experience
 * @param {Request} req HTTP Request
 * @param {Request} res HTTP Response
 * @param {NextFunction} next The next function to call
 * @returns {Promise<void>} callback to next function
 */
async function create(req, res, next) {
  const workExperience = req.body.work_experience;

  await WorkExperience.create({
    user_id: workExperience.user_id,
    company: workExperience.company,
    job_title: workExperience.job_title,
    start_month: workExperience.start_month,
    start_year: workExperience.start_year,
    end_month: workExperience.end_month,
    end_year: workExperience.end_year,
    bullets: workExperience.bullets,
    tools_used: workExperience.tools_used,
  })
    .then((created) => {
      req.response = created.dataValues;
    })
    .catch(next);

  return next();
}

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
      req.response = result;
    })
    .catch(next);

  return next();
}

/**
 * @description Present WorkExperiences
 * @param {Request} req HTTP Request
 * @param {Request} res HTTP Response
 * @returns {void} presents WorkExperiences to response
 */
async function present(req, res) {
  const omitFields = ["updatedAt", "deletedAt"];
  res.status(200);
  res.json(_.omit(req.response, omitFields));
}

module.exports = { create, findAll, present };
