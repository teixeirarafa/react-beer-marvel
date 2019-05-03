import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { handleSearchCharacters, toggleCharacters } from "../actions/marvel";
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

class MarvelCharactersDashboard extends Component {
	constructor() {
		super();
		this.searchCharacters = debounce(700, this.searchCharacters);
	}

	searchCharacters = query => {
		this.props.dispatch(handleSearchCharacters(query));
	};

	handleAddFavorite = favorite => {
		this.props.dispatch(addFavorite(favorite));
	};

	handleRemoveFavorite = id => {
		this.props.dispatch(removeFavorite(id));
	};

	handleToggleCharacter = item => {
		let callback;
		item.favorite
			? (callback = this.handleRemoveFavorite(item.id))
			: (callback = this.handleAddFavorite(item));

		this.props.dispatch(toggleCharacters(item.id, () => callback));
	};

	render() {
		const characters = this.props.characters;

		return (
			<div>
				<LoadingBar />
				<HeaderContainer searchItem={this.searchCharacters} />
				<Tabs
					clickCharacters={() => this.props.history.push(`/marvel/characters`)}
					clickComics={() => this.props.history.push(`/marvel/comics`)}
					value={0}
				/>
				{characters.length === 0 && (
					<ItemNotFound>Item not found...</ItemNotFound>
				)}
				<Wrapper>
					{characters &&
						characters.map(item => (
							<Grid
								key={item.id}
								id={item.id}
								name={item.name}
								image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
								favorite={item.favorite}
								clickItem={() =>
									this.props.history.push(`/marvel/characters/${item.id}`)
								}
								handleToggle={this.handleToggleCharacter}
							/>
						))}
				</Wrapper>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps({ marvel, favorite }) {
	return {
		characters: marvel.characters,
		charactersLike: marvel.characters.map(character => {
			return Object.assign({}, character, {
				favorite: false
			});
		})
	};
}

MarvelCharactersDashboard.propTypes = {
	characters: PropTypes.array
};

export default connect(mapStateToProps)(MarvelCharactersDashboard);
