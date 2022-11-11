"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class WorkExperience extends Model {}

  WorkExperience.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: true },
      },
      company: {
        type: DataTypes.STRING,
        validate: { notEmpty: true },
      },
      job_title: {
        type: DataTypes.STRING,
        validate: { notEmpty: true },
      },
      start_month: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: true, min: 1, max: 12 },
      },
      start_year: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: true },
      },
      end_month: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 12 },
      },
      end_year: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: true },
      },
      bullets: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      tools_used: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      sequelize,
      modelName: "WorkExperience",
      freezeTableName: true,
    }
  );

  WorkExperience.associate = (models) => {
    // associations can be defined here
  };

  return WorkExperience;
};
