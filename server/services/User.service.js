const pool = require('../database/database');
//crear usuario

//loguear usuario

class UserService {

	create = async ({useremail, username, userpassword}) => {
		const existUser = await pool.query('SELECT * FROM users WHERE useremail = ?', [useremail]);
		if(existUser.length) return false;
		const payload = { username, useremail, userpassword };
		await pool.query('INSERT INTO users set ?', [payload]);
		return payload;
	}

}

module.exports = UserService;