const db = require("../../models");
const _ = require("lodash");
const { Project } = db;

/**
 * @description Creates a single project
 * @param {Request} req HTTP Request
 * @param {Request} res HTTP Response
 * @param {NextFunction} next The next function to call
 * @returns {Promise<void>} callback to next function
 */
async function create(req, res, next) {
  const project = req.body.project;

  await Project.create({
    user_id: _.get(req, "currentUser.id"),
    title: project.title,
    brief: project.brief,
    start_month: project.start_month,
    start_year: project.start_year,
    end_month: project.end_month,
    end_year: project.end_year,
    bullets: project.bullets,
    tools_used: project.tools_used,
  })
    .then((created) => {
      req.response = created.dataValues;
    })
    .catch(next);

  return next();
}

/**
 * @description Present Projects
 * @param {Request} req HTTP Request
 * @param {Request} res HTTP Response
 * @returns {void} presents Projects to response
 */
async function present(req, res) {
  const omitFields = ["updatedAt", "deletedAt"];
  res.status(200);
  res.json(_.omit(req.response, omitFields));
}

module.exports = { create, present };
