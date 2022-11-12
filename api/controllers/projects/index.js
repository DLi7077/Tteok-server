const express = require("express");
const router = express.Router();
const resources = require("./resources");

const { authenticateToken } = require("../users/resources");
const { create, present } = resources;

router.post("/create", create, authenticateToken, present);

module.exports = router;
