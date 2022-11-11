const express = require("express");
const router = express.Router();

// Load each controller
const userController = require("./users");
const workExpController = require("./workExperiences");
const ProjectController = require("./projects");

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use("/users", userController);
router.use("/work-exp", workExpController);
router.use("/projects", ProjectController);

module.exports = router;
 