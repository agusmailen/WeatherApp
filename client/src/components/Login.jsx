import react from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";

const Login = () => {

	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			<h2 className='title-form'>Inicia sesion</h2>
			<form action='' onSubmit={handleSubmit(onSubmit)}>
				<TextField id='standard-basic' label='Email' variant="standard" mane='email' {...register('email', { required: true })}/>
				{errors.email?.type === 'required' && <p className='form-error'>Ingrese su email</p>}
				<TextField id='standard-basic' label='Contraseña' variant="standard" mane='nombre' {...register('password', { required: true })}/>
				{errors.password?.type === 'required' && <p className='form-error'>Ingrese una contraseña</p>}
				<Button variant="contained" type='submit'>Comenzar</Button>
			</form>
		</>
	);
};

export default Login;