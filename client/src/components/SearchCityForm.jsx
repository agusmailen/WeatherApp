import React, { useState } from 'react';
import moment from 'moment';
import '../utils/moment';


const SearchCityForm = () => {

	const [city, setCity] = useState("");

	const handleCity = (e) => {
		setCity(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		city ? console.log({city}) : alert("Debe ingresar una ciudad");

		
	};

	//change language of the date.
	moment.locale('es');

	return (
		<form className='form-search-city' onSubmit={handleSubmit}>
			<div className='date-container'>
				<h1 className='date-title'>{moment().format('dddd', 'es')}, {moment().format('Do MMMM  YYYY', 'es')}</h1>
			</div>
			<div className="input-container">
				<input className='search-city-input' placeholder='Ciudad...' value={city} name='city' autoComplete='off' onChange={handleCity}/>
				<button type='submit'>Consultar</button>
			</div>
		</form>
	)
}

export default SearchCityForm;