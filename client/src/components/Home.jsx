import React from "react";
import Login from './Login';
import Register from './Register';
import '../assets/styles/home.scss';

const Home = () => {
	return (
		<div className="container-home">
			<div className="container-form register-form">
				<Register />
			</div>
			<div className="container-form login-form">
				<Login />
			</div>
		</div>
	);
};

export default Home;