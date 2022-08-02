import React, { useState } from "react";
import Login from './Login';
import Register from './Register';
import '../assets/styles/home.scss';
import Button from '@mui/material/Button';


const Home = () => {

	const[state, setState] = useState(1);

	return (
		<div className="container-home">
			<div className="options">
				<h1>KlimWeather</h1>
				<div className="options-buttons">
					<div className="register">
						<h3>No tienes cuenta?</h3>
						<Button variant="outlined" type='submit' onClick={() => setState(1)}>Registrate</Button>
					</div>
					<div className="login">
						<h3>Consultar el clima</h3>
						<Button variant="outlined" type='submit'onClick={() => setState(0)}>Inicia Sesion</Button>
					</div>
				</div>
			</div>
			{
				state ? <Register /> : <Login/> 
			}
		</div>
	);
};

export default Home;