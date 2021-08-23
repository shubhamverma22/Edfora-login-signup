const User = require("../models/user");
const express = require("express");
const { getUser } = require("../controllers/user");
const { matchedToken } = require("../controllers/auth");
const router = express.Router();

router.get("/profile", matchedToken, getUser);

module.exports = router;
