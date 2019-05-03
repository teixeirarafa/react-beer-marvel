import {
	fetchCharactersMarvel,
	searchCharactersMarvel,
	fetchComicsMarvel,
	searchComicsMarvel
} from "../service/marvelAPI";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_CHARACTERS = "RECEIVE_CHARACTERS";
export const TOGGLE_CHARACTERS = "TOGGLE_CHARACTERS";
export const RECEIVE_COMICS = "RECEIVE_COMICS";
export const TOGGLE_COMICS = "TOGGLE_COMICS";

// criadores de açao síncronos
function receiveCharacters(characters) {
	return {
		type: RECEIVE_CHARACTERS,
		characters
	};
}

export function toggleCharacters(id) {
	return {
		type: TOGGLE_CHARACTERS,
		id
	};
}

function receiveComics(comics) {
	return {
		type: RECEIVE_COMICS,
		comics
	};
}

export function toggleComics(id) {
	return {
		type: TOGGLE_COMICS,
		id
	};
}

// criadores de açao assíncronos
export function handleCharacters() {
	return dispatch => {
		return fetchCharactersMarvel().then(characters => {
			dispatch(receiveCharacters(characters));
		});
	};
}

export function handleSearchCharacters(val) {
	return dispatch => {
		dispatch(showLoading());
		return searchCharactersMarvel(val).then(characters => {
			dispatch(receiveCharacters(characters));
			dispatch(hideLoading());
		});
	};
}

export function handleComics() {
	return dispatch => {
		return fetchComicsMarvel().then(comics => {
			dispatch(receiveComics(comics));
		});
	};
}

export function handleSearchComics(val) {
	return dispatch => {
		dispatch(showLoading());
		return searchComicsMarvel(val).then(comics => {
			dispatch(receiveComics(comics));
			dispatch(hideLoading());
		});
	};
}
