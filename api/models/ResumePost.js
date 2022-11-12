"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ResumePost extends Model {}

  ResumePost.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: true },
      },
      resume_url: {
        type: DataTypes.STRING,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "ResumePost",
      freezeTableName: true,
    }
  );

  ResumePost.associate = (models) => {
    // associations can be defined here
  };

  return ResumePost;
};
