const User = require("../models/user");


exports.getUser = async (req, res) => {
	const decodId = req.userId;
	console.log("getuser is Running");
	const user = await User.findById(decodId).exec((err, info) => {
		if (err || !info) {
			return res.status(400).json({
				error: "User is not Authorized",
			});
		} else {
			return res.send(info.email);
		}
	});
};
