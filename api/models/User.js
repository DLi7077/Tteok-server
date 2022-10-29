"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
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
