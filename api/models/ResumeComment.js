"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ResumeComment extends Model {}

  ResumeComment.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: true },
      },
      resume_post_id: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: true },
      },
      comment: {
        type: DataTypes.STRING,
        validate: { notEmpty: true },
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      reply_to: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "ResumeComment",
      freezeTableName: true,
    }
  );

  ResumeComment.associate = (models) => {
    // associations can be defined here
  };

  return ResumeComment;
};
