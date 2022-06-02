const UserService = require('../services/User.service');
const User = new UserService();

class UserController {

	create(req, res) {
		const payload = req.body;
		User.create(payload)
		.then( response => {
			if (!response) return res.json({
				status: 430,
				message: 'Ocurrió un error. El usuario no pudo ser registrado'
			});
			return res.json({
				status: 200,
				message: 'El usuario fue creado con exito'
			})
		})
		.catch(err => {
			return res.json ({ status: 400, error: err.message, message: 'Ocurrió un error. El usuario no pudo ser registrado'});
		});
	};

}

module.exports = UserController;