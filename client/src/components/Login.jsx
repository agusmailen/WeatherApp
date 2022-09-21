import react, { useEffect }from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { LoginUser }  from '../redux/actions/User.actions';
import '../assets/styles/form.scss';

const Login = (props) => {

	const {user, error} = props;

	useEffect(()=> {
		console.log(user, error)
	},[user, error])

	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		props.LoginUser(data);
		console.log(user);
		console.log(error)
	};
	

	return (
		<div className="form_container">
			<form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
				<h1>Iniciar Sesion</h1>
				<TextField  label="Email" variant="filled" name='email' {...register('email', { required: true })} autoComplete='off'/>
				{errors.email?.type === 'required' && <p className='form-error'>Ingrese su email</p>}
				<TextField  label="Contraseña" type='password' variant="filled" name='password' {...register('password', { required: true })} />
				{errors.password?.type === 'required' && <p className='form-error'>Ingrese una contraseña</p>}
				<Button variant="outlined" type='submit'>Comenzar</Button>
			</form>
		</div>
	)
};

const mapStateToProps = (state) => ({
	user: state.User.user,
	error: state.User.error,
});

export default connect(mapStateToProps, {
	LoginUser,
})(Login);