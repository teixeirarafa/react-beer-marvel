import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { handleSearchComics, toggleComics } from "../actions/marvel";
import { debounce } from "throttle-debounce";
import LoadingBar from "react-redux-loading-bar";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import Tabs from "../components/Tabs";
import { addFavorite, removeFavorite } from "../actions/favorites";

const ItemNotFound = styled.div`
	color: white;
	text-align: center;
	margin: 50px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-left: 50px;
`;

class MarvelComicsDashboard extends Component {
	constructor() {
		super();
		this.searchComics = debounce(700, this.searchComics);
	}

	searchComics = query => {
		this.props.dispatch(handleSearchComics(query));
	};

	handleAddFavorite = favorite => {
		this.props.dispatch(addFavorite(favorite));
	};

	handleRemoveFavorite = id => {
		this.props.dispatch(removeFavorite(id));
	};

	handleToggleComic = item => {
		let callback;
		item.favorite
			? (callback = this.handleRemoveFavorite(item.id))
			: (callback = this.handleAddFavorite(item));

		this.props.dispatch(toggleComics(item.id, () => callback));
	};

	render() {
		const comics = this.props.comics;
		return (
			<div>
				<LoadingBar />
				<HeaderContainer searchItem={this.searchComics} />
				<Tabs
					clickComics={() => this.props.history.push(`/marvel/comics`)}
					clickCharacters={() => this.props.history.push(`/marvel/characters`)}
					value={1}
				/>
				{comics.length === 0 && <ItemNotFound>Item not found...</ItemNotFound>}
				<Wrapper>
					{comics &&
						comics.map(item => (
							<Grid
								key={item.id}
								id={item.id}
								name={item.title}
								image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
								favorite={item.favorite}
								clickItem={() =>
									this.props.history.push(`/marvel/comics/${item.id}`)
								}
								handleToggle={this.handleToggleComic}
							/>
						))}
				</Wrapper>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps({ marvel }) {
	return {
		comics: marvel.comics
	};
}

MarvelComicsDashboard.propTypes = {
	characters: PropTypes.array
};

export default connect(mapStateToProps)(MarvelComicsDashboard);
