const express = require("express");
const router = express.Router();
const resources = require("./resources");

const { authenticateToken } = require("../users/resources");
const { create, present } = resources;

router.post("/create", authenticateToken, create, present);

module.exports = router;
