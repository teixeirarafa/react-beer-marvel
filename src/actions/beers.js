import { fetchBeers, searchBeers } from "./../service/punkAPI";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_BEERS = "RECEIVE_BEERS";
export const TOGGLE_BEERS = "TOGGLE_BEERS";

// criadores de açao síncronos
function receiveBeers(beers) {
	return {
		type: RECEIVE_BEERS,
		beers
	};
}

export function toggleBeers(id) {
	return {
		type: TOGGLE_BEERS,
		id
	};
}

// criadores de açao assíncronos
export function handleBeers() {
	return dispatch => {
		return fetchBeers().then(beers => {
			dispatch(receiveBeers(beers));
		});
	};
}

export function handleSearchBeers(val) {
	return dispatch => {
		dispatch(showLoading());
		return searchBeers(val).then(beers => {
			dispatch(receiveBeers(beers));
			dispatch(hideLoading());
		});
	};
}
