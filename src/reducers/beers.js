import { RECEIVE_BEERS, TOGGLE_BEERS } from "../actions/beers";

export default function beers(state = [], action) {
	switch (action.type) {
		case RECEIVE_BEERS:
			return {
				...state,
				beers: action.beers.map(beers => {
					return Object.assign({}, beers, {
						favorite: false
					});
				})
			};

		case TOGGLE_BEERS:
			return {
				...state,
				beers: state.beers.map(beer =>
					beer.id !== action.id
						? beer
						: Object.assign({}, beer, { favorite: !beer.favorite })
				)
			};
		default:
			return state;
	}
}
