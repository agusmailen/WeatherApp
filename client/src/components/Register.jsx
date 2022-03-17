import react from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";

const Register = () => {

	const { register, handleSubmit, formState: { errors } } = useForm();
	
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			<h2 className='title-form'>Registrate</h2>
			<form action='' onSubmit={handleSubmit(onSubmit)}>
				<TextField id='standard-basic' label='Nombre' variant='standard' {...register('name', { required: true })}/>
				{errors.name?.type === 'required' && <p className='form-error'>Ingrese su nombre</p>}
				<TextField id='standard-basic' label='email' variant='standard' {...register('email', { required: true, pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ })}/>
				{errors.email?.type === 'required' && <p className='form-error'>Ingrese su nombre</p>}
				{errors.email?.type === 'pattern' && <p className='form-error'>Ingrese un correo válido example@xxxx.com</p>}
				<TextField id='standard-basic' label='constraseña' variant='standard' {...register('password', { required: true })}/>
				{errors.password?.type === 'required' && <p className='form-error'>Ingrese una contraseña</p>}
				<Button variant='contained' type='submit'>Registrarme</Button>
			</form>
		</>
	);
};

export default Register;