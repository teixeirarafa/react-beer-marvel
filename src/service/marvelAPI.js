import md5 from "md5";

const API = "https://gateway.marvel.com/v1/public";
const PUBLIC_KEY = "bbbef3c8a56ad9fbc7832c7d8840c5e6";
const PRIVATE_KEY = "65916c5b1bb395fdefac8ae5b2a4f4235262f354";
const TIMESTAMP = new Date().getTime();
const HASH = md5(TIMESTAMP + PRIVATE_KEY + PUBLIC_KEY);

export const fetchCharactersMarvel = () =>
	fetch(`${API}/characters?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
		.then(res => res.json())
		.then(data => data)
		.catch(() => console.log("There was an error. Try again."));

export const searchCharactersMarvel = val =>
	fetch(
		`${API}/characters?nameStartsWith=${val}&ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`
	)
		.then(res => res.json())
		.then(data => data)
		.catch(() => console.log("There was an error. Try again."));

export const fetchComicsMarvel = () =>
	fetch(`${API}/comics?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
		.then(res => res.json())
		.then(data => data)
		.catch(() => console.log("There was an error. Try again."));

export const searchComicsMarvel = val =>
	fetch(
		`${API}/comics?titleStartsWith=${val}&ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`
	)
		.then(res => res.json())
		.then(data => data)
		.catch(() => console.log("There was an error. Try again."));
