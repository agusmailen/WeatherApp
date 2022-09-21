const UserService = require('../services/User.service');
const User = new UserService();

class UserController {

	create(req, res) {
		const payload = req.body;
		User.create(payload)
		.then( response => {
			if (!response) return res.json({
				status: 430,
				message: 'Ocurrió un error. Ya existe un usuario con este email'
			});
			return res.json({
				status: 200,
				message: 'El usuario fue creado con exito',
				response
			})
		})
		.catch(err => {
			return res.json ({ status: 400, error: err.message, message: 'Ocurrió un error. El usuario no pudo ser registrado'});
		});
	};


	login(req, res) {
		const payload = req.body;
		console.log('desde constrolador', payload)
		User.login(payload)
		.then( response => {
			if (!response) return res.json({
				status: 430,
				message: 'Ocurrió un error. Credenciales incorrectas'
			});
			return res.json({
				status: 200,
				message: 'Logueo Exitoso',
				response
			})
		})
		.catch(err => {
			return res.json ({ status: 400, error: err.message, message: 'Ocurrió un error. El usuario no pudo ser logueado'});
		})
	}

}

module.exports = UserController;