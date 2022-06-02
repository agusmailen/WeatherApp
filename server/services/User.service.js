const { parseUrl } = require('mysql/lib/ConnectionConfig');
const pool = require('../database/database');
//crear usuario

//loguear usuario

class UserService {

	create = async ({useremail, username, userpassword}) => {
		const existUser = await pool.query('SELECT * FROM users WHERE useremail = ?', [useremail]);
		if (existUser) return false;
		const payload = { username, useremail, userpassword };
		//payload.password = jwt.token(payload.passrword)
		await pool.query('INSERT INTO users set ?', [payload]);
		return payload;
	}


	//findOne = async ({ useremail }) => pool.query('SELECT * FROM users Where useremail = ?');
}

module.exports = UserService;