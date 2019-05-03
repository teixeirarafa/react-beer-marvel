import {
	RECEIVE_CHARACTERS,
	RECEIVE_COMICS,
	TOGGLE_CHARACTERS,
	TOGGLE_COMICS
} from "../actions/marvel";

const inicitalState = {
	characters: [],
	comics: []
};

export default function marvel(state = inicitalState, action) {
	switch (action.type) {
		case RECEIVE_CHARACTERS:
			return {
				...state,
				characters: action.characters.data.results.map(character => {
					return Object.assign({}, character, {
						favorite: false
					});
				})
			};

		case RECEIVE_COMICS:
			return {
				...state,
				comics: action.comics.data.results.map(comics => {
					return Object.assign({}, comics, {
						favorite: false
					});
				})
			};

		case TOGGLE_CHARACTERS:
			return {
				...state,
				characters: state.characters.map(character =>
					character.id !== action.id
						? character
						: Object.assign({}, character, { favorite: !character.favorite })
				)
			};

		case TOGGLE_COMICS:
			return {
				...state,
				comics: state.comics.map(comics =>
					comics.id !== action.id
						? comics
						: Object.assign({}, comics, { favorite: !comics.favorite })
				)
			};

		default:
			return state;
	}
}
