import react from 'react';
import '../assets/styles/profile.scss';

const Profile = () => {
	return (
		<div className='container-profile'>
			<form className='form-search-city'>
				<input className='search-city-input' placeholder='Ciudad...'>
				</input>
				<button>Consultar</button>
			</form>
		</div>
	)
}

export default Profile;