const pool = require('../database/database');
//crear usuario

//loguear usuario

class UserService {

	async create(payload) {
		let { name, email, password } = payload;
		payload = { name, lastName, phone, email, password };
		//if (!payload.name || !payload.lastName || !password) return false;
		await pool.query('INSERT INTO users (username) (?)' [payload.name]);
		return(payload);
	}

}

module.exports = UserService;