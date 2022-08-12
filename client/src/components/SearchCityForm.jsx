import React, { useState } from 'react';
import moment from 'moment';
import '../utils/moment';
import { getCurrentWeather } from '../redux/actions/CurrentWeather.action';
import { connect } from 'react-redux';

const SearchCityForm = (props) => {
	const { currentWeather } = props;

	const [city, setCity] = useState("");

	const handleCity = (e) => {
		setCity(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(city)
		city ? props.getCurrentWeather(city) : alert("Debe ingresar una ciudad");

		
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

const mapStateToProps = (state) => ({
	currentWeather: state.currentWeather.currentWeather,
});

export default connect(mapStateToProps, {
	getCurrentWeather,
})(SearchCityForm);