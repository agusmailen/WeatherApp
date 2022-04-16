const existUser = (req, res, next) => {
	const { username, useremail, userpassword } = req.body;

	if (!(username && useremail && userpassword)) return res.json({ status: 403, message: "Faltan completar campos" });
	return next();
};

module.exports = existUser;