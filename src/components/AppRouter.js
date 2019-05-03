import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";
import Home from "../containers/Home";
import MarvelCharactersDashboard from "../containers/MarvelCharactersDashboard";
import BeersDashboard from "../containers/BeersDashboard";
import Character from "./Character";
import MarvelComicsDashboard from "../containers/MarvelComicsDashboard";
import Comic from "./Comic";
import Beer from "./Beer";
import FavoritesDashboard from "./../containers/FavoritesDashboard";

function AppRouter() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/marvel/characters/:id" component={Character} />
					<Route
						path="/marvel/characters"
						component={MarvelCharactersDashboard}
					/>
					<Route path="/marvel/comics/:id" component={Comic} />
					<Route path="/marvel/comics" component={MarvelComicsDashboard} />
					<Route path="/beers/:id" component={Beer} />
					<Route path="/beers" component={BeersDashboard} />
					<Route path="/favorites" component={FavoritesDashboard} />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default AppRouter;
