const pool = require('../database/database');
const jwt = require('../utils/jwt');
//crear usuario

//loguear usuario

class UserService {

	create = async ({useremail, username, userpassword}) => {
		const existUser = await pool.query('SELECT * FROM users WHERE useremail = ?', [useremail]);
		if(existUser.length) //si status = 0 return el usuaii sino false 
			return false;
		const payload = { username, useremail, userpassword };
		payload.userpassword = jwt.token(payload.userpassword);
		await pool.query('INSERT INTO users set ?', [payload]);
		return payload.username;
	}


	login = async ({email, password}) => {
		const existUser = await pool.query('SELECT * FROM users WHERE useremail = ?', [email]);
		if(!existUser.length) return false;
		const payload = { email, password };
		const existPassword = existUser[0].userpassword;
		return jwt.decoded(existPassword).data === payload.password ? { "id": existUser[0].id, "email": payload.email, "name": existUser[0].username, "verify": existUser[0].verificated} : false;
	}

}

module.exports = UserService;