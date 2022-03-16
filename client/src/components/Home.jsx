import React from "react";
import Login from './Login';
import Register from './Register';
import '../assets/styles/home.scss';

const Home = () => {
	return (
		<div className="container-home">
			<div className="container-title">
				<h1>KLIMAT</h1>
				<h6>The Weather Channel</h6>	
			</div>
			<div className="container-forms">
				<div className="container-form register-form">
					<Register />
				</div>
				<div className="container-form login-form">
					<Login />
				</div>
			</div>
		</div>
	);
};

export default Home;