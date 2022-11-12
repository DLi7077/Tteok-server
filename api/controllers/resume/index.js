const express = require("express");
const router = express.Router();

const { authenticateToken } = require("../users/resources");
const { createPost, createComment, present } = require("./resources");

router.post("/create-post", authenticateToken, createPost, present);
router.post("/create-comment", authenticateToken, createComment, present);

module.exports = router;
