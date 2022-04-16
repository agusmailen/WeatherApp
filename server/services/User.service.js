const { parseUrl } = require('mysql/lib/ConnectionConfig');
const pool = require('../database/database');
//crear usuario

//loguear usuario

class UserService {

	create = async ({useremail, username, userpassword}) => {
		const links = await pool.query('SELECT * FROM users WHERE useremail = ?', [useremail]);
		console.log('links', links);
		const payload = { username, useremail, userpassword };
		await pool.query('INSERT INTO users set ?', [payload]);
		return payload;
	}


	findOne = async ({ useremail }) => pool.query('SELECT * FROM users Where useremail = ?');
}

module.exports = UserService;