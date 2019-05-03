import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import marvel from "./marvel";
import beers from "./beers";
import favorites from "./favorites";

export default combineReducers({
	marvel,
	beers,
	favorites,
	loadingBar: loadingBarReducer
});
