const User = require("../models/user");

exports.getUser = async (req, res, decodId) => {
	const user = await User.findOne({ decodId }, (err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error: "User is not Authorized",
			});
		} else {
			return res.send(user.email);
		}
	});
};
