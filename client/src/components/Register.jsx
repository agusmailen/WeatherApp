import React from 'react';
import '../assets/styles/form.scss';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';



const Formulario = ({label }) => {

	
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};
	

	return (
		<div className="form_container">
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Registro</h1>
				<TextField  label="Nombre" variant="filled" name='name'{...register('name', { required: true })} />
				{errors.name?.type === 'required' && <p className='form-error' >Ingrese su Nombre</p>}
				<TextField  label="Email" variant="filled"name='email' {...register('email', { required: true })} />
				{errors.email?.type === 'required' && <p className='form-error'>Ingrese su email</p>}
				<TextField  label="Contraseña" type='password' variant="filled" name='password' {...register('password', { required: true })} />
				{errors.password?.type === 'required' && <p className='form-error'>Ingrese una contraseña</p>}
				<Button variant="outlined" type='submit'>Registrarme</Button>
			</form>
		</div>
	)
}

export default Formulario;