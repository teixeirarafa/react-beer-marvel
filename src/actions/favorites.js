export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export function reveiveFavorites(favorites) {
	return {
		type: RECEIVE_FAVORITES,
		favorites
	};
}

export function addFavorite(favorite) {
	return {
		type: ADD_FAVORITE,
		favorite
	};
}

export function removeFavorite(id) {
	return {
		type: REMOVE_FAVORITE,
		id
	};
}
