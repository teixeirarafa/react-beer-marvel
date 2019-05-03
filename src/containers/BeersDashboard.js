import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { debounce } from "throttle-debounce";
import { handleSearchBeers, toggleBeers } from "../actions/beers";
import LoadingBar from "react-redux-loading-bar";
import Grid from "../components/Grid";
import Footer from "./../components/Footer";
import HeaderContainer from "./../components/HeaderContainer";
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

class BeersDashboard extends Component {
	constructor() {
		super();
		this.searchBeer = debounce(700, this.searchBeer);
	}

	searchBeer = query => {
		this.props.dispatch(handleSearchBeers(query));
	};

	handleAddFavorite = favorite => {
		this.props.dispatch(addFavorite(favorite));
	};

	handleRemoveFavorite = id => {
		this.props.dispatch(removeFavorite(id));
	};

	handleToggleBeer = item => {
		let callback;
		item.favorite
			? (callback = this.handleRemoveFavorite(item.id))
			: (callback = this.handleAddFavorite(item));

		this.props.dispatch(toggleBeers(item.id, () => callback));
	};

	render() {
		const beers = this.props.beers;

		return (
			<div>
				<LoadingBar />
				<HeaderContainer searchItem={this.searchBeer} />
				{beers.length === 0 && <ItemNotFound>Item not found...</ItemNotFound>}
				<Wrapper>
					{beers &&
						beers.map((item, index) => (
							<Grid
								key={index}
								id={item.id}
								name={item.name}
								image={item.image_url}
								favorite={item.favorite}
								clickItem={() => this.props.history.push(`/beers/${item.id}`)}
								handleToggle={this.handleToggleBeer}
							/>
						))}
				</Wrapper>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps({ beers }) {
	return {
		beers: beers.beers
	};
}

BeersDashboard.propTypes = {
	beers: PropTypes.array
};

export default connect(mapStateToProps)(BeersDashboard);
