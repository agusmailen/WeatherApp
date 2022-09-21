import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../utils/moment';
import { getCurrentWeather } from '../redux/actions/CurrentWeather.action';
import { connect } from 'react-redux';
import CurrentWeatherCard from './WeatherCurrentCard';
import ErrorCard from './WeatherError';
import CircularProgress from '@mui/material/CircularProgress';

const SearchCityForm = (props) => {

	const { currentWeather, error } = props;
	const [city, setCity] = useState("");
	const [autocomplete, setAutocomplete] = useState(null);
	const [loader, setLoader] = useState(null);

	useEffect(() => {
		setLoader(null);
	}, [props]);

	const handleCity = (e) => {
		setCity(e.target.value);

		if(!e.target.value.length) {
			setAutocomplete(null)
		} else {
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '15b2e011edmsh4362458ce43817fp16e96fjsn4b2d4d452729',
					'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
				}
			};
			
			fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=${city}`, options)
			.then(response => response.json())
			.then(response => {if(!response.message) setAutocomplete(response)})
			.catch(err => console.error(err));

		}
			
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setAutocomplete(null);
		setCity("")
		setLoader(true);
		city ? props.getCurrentWeather(city)  : alert("Debe ingresar una ciudad");
	};

	const handleAutocompleteClick = (e) => {
		e.preventDefault();
		setCity(e.target.id);
		setAutocomplete(null);
	}

	//change language of the date.
	moment.locale('es');

	return (
		<>
			<form className='form-search-city' onSubmit={handleSubmit}>
				<div className='date-container'>
					<h1 className='date-title'>{moment().format('dddd', 'es')}, {moment().format('Do MMMM  YYYY', 'es')}</h1>
				</div>
				<div className="input-container">
					<input className='search-city-input' placeholder='Ciudad...' value={city} name='city' autoComplete='off' onChange={handleCity} />
					<button type='submit'>Consultar</button>
				</div>
				{
					autocomplete ? 
					autocomplete.data.map((item)=> {
						return (
							<div className="city_autocomplete-container" >
								<img  src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/>
								<div id={item.city}  key={item.city} onClick={handleAutocompleteClick}>{item.city}</div>
							</div>
						)
					})
					: 
					null
				}
			</form>
			{
				loader?
				<div className="loader-weatherRequest">
					<CircularProgress color="inherit" />
				</div>
				:
				null
			}
			{
				error ?
					<ErrorCard data={error} />
					:
					Object.keys(currentWeather).length != 0 ? (<CurrentWeatherCard data={currentWeather} />) : null

			}
		</>
	)
}

const mapStateToProps = (state) => ({
	currentWeather: state.Weather.currentWeather,
	error: state.Weather.error,
});

export default connect(mapStateToProps, {
	getCurrentWeather,
})(SearchCityForm);