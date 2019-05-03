const API = "https://api.punkapi.com/v2/beers";

export const fetchBeers = () =>
	fetch(API)
		.then(res => res.json())
		.then(data => data)
		.catch(() => console.log("There was an error. Try again."));

export const searchBeers = val =>
	fetch(`${API}?beer_name=${val}`)
		.then(res => res.json())
		.then(data => data)
		.catch(() => console.log("There was an error. Try again."));
