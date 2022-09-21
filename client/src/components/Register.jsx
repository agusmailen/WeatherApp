import React, { useEffect } from 'react';
import '../assets/styles/form.scss';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { RegisterUser }  from '../redux/actions/User.actions';



const Formulario = (props) => {

	const { registerUser, error } = props;

	useEffect(()=> {
		console.log(registerUser, error)
	},[registerUser, error])
	
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		props.RegisterUser(data);
	};
	

	return (
		<div className="form_container">
			<form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
				<h1>Registro</h1>
				<TextField  label="Nombre" variant="filled" name='name'{...register('username', { required: true })} />
				{errors.name?.type === 'required' && <p className='form-error' >Ingrese su Nombre</p>}
				<TextField  label="Email" variant="filled"name='email' {...register('useremail', { required: true })} />
				{errors.email?.type === 'required' && <p className='form-error'>Ingrese su email</p>}
				<TextField  label="Contraseña" type='password' variant="filled" name='password' {...register('userpassword', { required: true })} />
				{errors.password?.type === 'required' && <p className='form-error'>Ingrese una contraseña</p>}
				<Button variant="outlined" type='submit'>Registrarme</Button>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => ({
	registerUser: state.User.register,
	error: state.User.error,
});

export default connect(mapStateToProps, {
	RegisterUser,
})(Formulario);
