const UserService = require('../services/User.service');
const User = new UserService();

class UserController {

	create(req, res) {
		const payload = req.body;
		User.create(payload)
		.then( user => {
			// console.log('desde controlador', user)
			if (user) return res.json({
				status: 200,
				payload: user
			});
			else return res.json({
				status: 403,
				message: 'comiste pija'
			})
		})
		.catch(err => {
			return res.json ({ status: 400, error: err.message, message: 'Ocurrió un error. El usuario no pudo ser registrado'});
		});
	};

}

module.exports = UserController;