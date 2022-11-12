"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        validate: { notEmpty: true },
      },
      email: {
        type: DataTypes.STRING,
        validate: { notEmpty: true },
      },
      password: {
        type: DataTypes.STRING,
        validate: { notEmpty: true },
      },
      profile_picture_url: {
        type: DataTypes.STRING,
      },
      portfolio_url: {
        type: DataTypes.STRING,
      },
      active_resume: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
      freezeTableName: true,
    }
  );

  User.associate = (models) => {
    // associations can be defined here
  };

  return User;
};
