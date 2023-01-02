import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../assets/styles/form.scss';

const Login = ({ handleSubmit, register, errors }) => {

	return (
		<div className="form_container">
			<form onSubmit={handleSubmit} autoComplete='off'>
				<h1>Iniciar Sesion</h1>
				<TextField  label="Email" variant="filled" name='email' {...register('email', { required: true }, {pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/})} autoComplete='off'/>
				{errors.email?.type === 'required' && <p className='form-error'>Ingrese su email</p>}
				{errors.email?.type === 'pattern' && <p className='form-error'>Formato no válido</p>}
				<TextField  label="Contraseña" type='password' variant="filled" name='password' {...register('password', { required: true })} />
				{errors.password?.type === 'required' && <p className='form-error'>Ingrese una contraseña</p>}
				<Button variant="outlined" type='submit'>Comenzar</Button>
			</form>
		</div>
	)
};


export default Login;