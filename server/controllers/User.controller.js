const UserService = require('../services/User.service');
const User = new UserService();

class UserController {

	create(req, res) {
		const payload = req.body;
		console.log(payload);
		User.create(payload)
		.then( user => {
			if(!(payload && payload.name)) return res.json({ status: 400, message: 'Todos los campos son obligatorios' });
			//if (!user) return res.json({ status: 400, message: 'El usuario ya existe' });
			return res.json({
				status: 200,
				payload: user
			})
		})
		.catch(err => {
			return res.json ({ status: 400, error: err });
		});
	}

}

module.exports = UserController;