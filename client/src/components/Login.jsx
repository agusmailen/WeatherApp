import react from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import '../assets/styles/form.scss';

const Login = () => {

	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};
	

	return (
		<div className="form_container">
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Iniciar Sesion</h1>
				<TextField  label="Email" variant="filled"name='email' {...register('email', { required: true })} />
				{errors.email?.type === 'required' && <p className='form-error'>Ingrese su email</p>}
				<TextField  label="Contraseña" type='password' variant="filled" name='password' {...register('password', { required: true })} />
				{errors.password?.type === 'required' && <p className='form-error'>Ingrese una contraseña</p>}
				<Button variant="outlined" type='submit'>Comenzar</Button>
			</form>
		</div>
	)
};

export default Login;