import react from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
	return (
		<>
			<h2 className='title-form'>Inicia sesion</h2>
			<form action=''>
				<TextField id="standard-basic" label="Contraseña" variant="standard" />
				<TextField id="standard-basic" label="Nombre" variant="standard" />
				<Button variant="contained">Comenzar</Button>
			</form>
		</>
	);
};

export default Login;