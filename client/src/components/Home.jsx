import React, { useState } from "react";
import Login from './Login';
import Register from './Register';
import { useForm } from "react-hook-form";
import '../assets/styles/home.scss';
import Button from '@mui/material/Button';
import axios from 'axios';
import config from '../config/config';
import { useNavigate } from 'react-router-dom';


const Home = () => {

	const[state, setState] = useState(1);

	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmitCreate = (data) => {
		axios.post('http://localhost:3001/user/createUser', data, {
            headers: {
                tokenKey: config.key,
            },
        })
		.then((response) => {
			console.log(response)
            
        })
        .catch((error) => {
			alert(error)
        })
	};

	const OnSubmitLogin = (data) => {
		axios.post('http://localhost:3001/user/loginUser', data, {
            headers: {
                tokenKey: config.key,
            },
        })
		.then((response) => {
            
			if(response.status != 200 || response.data.status != 200) {
				alert(response.data.message);
			} 
			else {
				console.log(response)
			}
           	
			
        })
        .catch((error) => {
           console.log(error)
        })
	}

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
				state ? 
				<Register 
					handleSubmit={handleSubmit(onSubmitCreate)}
					register={register}
					errors={errors}
				/> 
				: 
				<Login
					handleSubmit={handleSubmit(OnSubmitLogin)}
					register={register}
					errors={errors}
				/> 
			}
		</div>
	);
};

export default Home;