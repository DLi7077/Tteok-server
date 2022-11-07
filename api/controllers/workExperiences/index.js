const express = require("express");
const router = express.Router();
const resources = require("./resources");

const { findAll, presentAll } = resources;

router.get("/all", findAll, presentAll);

module.exports = router;
