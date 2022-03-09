import React from "react";
import Login from './Login';
import Register from './Register';
import '../assets/styles/home.css';

const Home = () => {
	return (
		<div className="container-home">
				<div className="container-form">
					<Register />
				</div>
				<div className="line" />
				<div className="container-form">
					<Login />
				</div>
		</div>
	);
};

export default Home;