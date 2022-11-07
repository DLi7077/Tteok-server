const express = require("express");
const router = express.Router();

// Load each controller
const userController = require("./users");
const workExpController = require("./workExperiences");

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use("/users", userController);
router.use("/work-exp", workExpController);

module.exports = router;
