const express = require("express");
const router = express.Router();
const resources = require("./resources");

const {
  createUser,
  findAll,
  userProfile,
  presentUser,
  presentAll,
  presentProfile,
} = resources;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /api/micro_posts
//    POST   /api/micro_posts
//    GET    /api/micro_posts/:id
//    PUT    /api/micro_posts/:id
//    DELETE /api/micro_posts/:id
//
// The full URL's for these routes are composed by combining the
// prefixes used to load the controller files.
//    /api comes from the file ../app.js
//    /micro_posts comes from the file ./Users.js

router.get("/all", findAll, presentAll);
router.get("/profile", userProfile, presentProfile);

router.post("/create", createUser, presentUser);

module.exports = router;
