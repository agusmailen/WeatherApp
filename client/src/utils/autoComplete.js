const autocomplete = (city) => {
    console.log(city)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '15b2e011edmsh4362458ce43817fp16e96fjsn4b2d4d452729',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };
    
    fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=${city}`, options)
    .then(response => response.json())
    // .then(response => {
    //     console.log(response)
    //     return  response;
    // })
    // .catch(err => {
    //     return err;
    // });
}	

export default autocomplete();