const User = require("../models/user");
const express = require("express");
const User = require("../controllers/user");
const matchedToken = require("../controllers/auth");
const router = express.Router();

router.get("/user", User.getUser);

module.exports = router;
