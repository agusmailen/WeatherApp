import react from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Register = () => {
	return (
		<>
			<h2 className='title-form'>Registrate</h2>
			<form action=''>
				<TextField id="standard-basic" label="Nombre" variant="standard" />
				<TextField id="standard-basic" label="email" variant="standard" />
				<TextField id="standard-basic" label="constraseña" variant="standard" />
				<Button variant="contained">Registrarme</Button>
			</form>
		</>
	);
};

export default Register;