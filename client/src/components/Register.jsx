import React, { useEffect } from 'react';
import '../assets/styles/form.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Formulario = ({ handleSubmit, register, errors }) => {

	return (
		<div className="form_container">
			<form onSubmit={handleSubmit} autoComplete="false">
				<h1>Registro</h1>
				<TextField  label="Nombre" variant="filled" name='name'{...register('username', { required: true }, {pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/})} />
				{errors.name?.type === 'required' && <p className='form-error' >Ingrese su Nombre</p>}
				{errors.email?.type === 'pattern' && <p className='text-error'>Formato no válido</p>}
				<TextField  label="Email" variant="filled"name='email' {...register('useremail', { required: true })} />
				{errors.email?.type === 'required' && <p className='form-error'>Ingrese su email</p>}
				<TextField  label="Contraseña" type='password' variant="filled" name='password' {...register('userpassword', { required: true })} />
				{errors.password?.type === 'required' && <p className='form-error'>Ingrese una contraseña</p>}
				<Button variant="outlined" type='submit'>Registrarme</Button>
			</form>
		</div>
	)
}

export default Formulario;
