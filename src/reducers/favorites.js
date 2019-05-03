import {
	RECEIVE_FAVORITES,
	ADD_FAVORITE,
	REMOVE_FAVORITE
} from "../actions/favorites";

export default function favorites(state = [], action) {
	switch (action.type) {
		case RECEIVE_FAVORITES:
			return action.favorites;
		case ADD_FAVORITE:
			return state.concat([action.favorite]);
		case REMOVE_FAVORITE:
			return state.filter(favorite => favorite.id !== action.id);
		default:
			return state;
	}
}
