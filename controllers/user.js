const User = require("../models/user");

exports.getUser = (req, res) => {
	res.send("Hello from Redis middleware");
};
