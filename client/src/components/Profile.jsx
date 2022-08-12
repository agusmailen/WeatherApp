import react from 'react';
import SearchCityForm from './SearchCityForm';
import '../assets/styles/profile.scss';

const Profile = () => {
	return (
		<div className='container-profile'>
			<div className='nav-container'>
				<p className='nav-item'>KlimWeather</p>
				<p className='nav-item'>Pronóstico del clima</p>
			</div>
			<SearchCityForm />
		</div>
	)
}

export default Profile;