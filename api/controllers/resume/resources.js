const db = require("../../models");
const _ = require("lodash");
const { User, ResumePost, ResumeComment } = db;

/**
 * @description Creates a resume post
 * @param {Request} req HTTP Request
 * @param {Request} res HTTP Response
 * @param {NextFunction} next The next function to call
 * @returns {Promise<void>} callback to next function
 */
async function createPost(req, res, next) {
  // create resume post, then update user's active resume
  await ResumePost.create({
    user_id: _.get(req, "currentUser.id"),
    resume_url: req.body.resume_url,
  })
    .then(async (post) => {
      await User.update(
        { active_resume: post.dataValues.id },
        { where: { id: _.get(req, "currentUser.id") } }
      )
        .then(() => {
          req.response = post.dataValues;
        })
        .catch(next);
    })
    .catch(next);

  return next();
}

/**
 * @description Creates a resume post
 * @param {Request} req HTTP Request
 * @param {Request} res HTTP Response
 * @param {NextFunction} next The next function to call
 * @returns {Promise<void>} callback to next function
 */
async function createComment(req, res, next) {
  await ResumeComment.create({
    user_id: _.get(req, "currentUser.id"),
    resume_post_id: req.body.resume_post_id,
    comment: req.body.comment,
  })
    .then((post) => {
      req.response = post.dataValues;
    })
    .catch(next);

  return next();
}

/**
 * @description Presents Resume Post
 * @param {Request} req HTTP Request
 * @param {Request} res HTTP Response
 * @returns {void} presents Resume Post to response
 */
async function present(req, res) {
  const omitFields = ["updatedAt", "deletedAt"];
  res.status(200);
  res.json(_.omit(req.response, omitFields));
}

module.exports = {
  createPost,
  createComment,
  present,
};
