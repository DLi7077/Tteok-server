const _ = require("lodash");
const { Op } = require("sequelize");
const db = require("../../models");

const { User, ResumePost, ResumeComment } = db;

/**
 * Helper function to retrieve user assets, to simulate a table join
 * @param {number[]} userIds the array of userIds to search for
 * @returns {any[]} an object that maps to each user's public assets
 */
async function userDisplayAssets(userIds) {
  const userAssets = await User.findAll({
    where: {
      id: { [Op.in]: userIds },
    },
  }).then((users) =>
    _.reduce(
      users,
      (accumulator, user) => {
        accumulator[user.id] = _.pick(user, [
          "username",
          "profile_picture_url",
          "description",
        ]);

        return accumulator;
      },
      {}
    )
  );

  return userAssets;
}

/**
 * Retrieves a resume post with all associated comments
 * @param {number} activePostId
 * @returns {any} an object containing a post object and an array of comment objects
 */
async function retrieveResumePost(activePostId) {
  if (!activePostId) return null;

  const activePost = await ResumePost.findOne({
    where: { id: activePostId },
  }).then((post) => (post ? post.dataValues : null));

  // retrieve comments for a post
  const comments = await ResumeComment.findAll({
    where: { resume_post_id: activePostId },
  }).then(async (comments) => {
    // retrieve comment contents
    const cleanedComments = _.chain(comments)
      .map((comment) => {
        const content = _.pick(comment.dataValues, [
          "comment",
          "likes",
          "user_id",
          "createdAt",
        ]);

        return content;
      })
      //sort by descending date
      .orderBy(["createdAt"], ["desc"])
      .value();

    const uniqueCommentors = Array.from(
      _.reduce(
        comments,
        (accumulator, curr) => {
          const { user_id } = curr.dataValues;
          return accumulator.add(user_id);
        },
        new Set()
      )
    );

    // mapping user id to username and profile assets
    const userAssetMapping = await userDisplayAssets(uniqueCommentors);

    // populate every comment with user's assets
    const commentsWithUserAssets = _.map(cleanedComments, (comment) => {
      return {
        ...comment,
        ..._.get(userAssetMapping, comment.user_id),
      };
    });

    return commentsWithUserAssets;
  });

  return {
    post: activePost,
    comments: comments,
  };
}

module.exports = { retrieveResumePost };
