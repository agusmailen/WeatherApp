import React, { useState } from 'react';
import cityList from '../assets/static/city.list.json';

const SearchCityForm = () => {

	const [city, setCity] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		city ? console.log({city}) : alert("Debe ingresar una ciudad");
	}

	return (
		<form className='form-search-city' onSubmit={handleSubmit}>
			<div className="input-container">
				<input className='search-city-input' placeholder='Ciudad...' name='city' autoComplete='off' onChange={(e) => setCity(e.target.value)}/>
				<button type='submit'>Consultar</button>
			</div>
			<div className="data-container">
				<h4>jejeej</h4>
			</div>
		</form>
	)
}

export default SearchCityForm;