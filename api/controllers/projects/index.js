const express = require("express");
const router = express.Router();
const resources = require("./resources");

const { create, present } = resources;

router.post("/create", create, present);

module.exports = router;
