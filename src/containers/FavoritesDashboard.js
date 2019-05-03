import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import Grid from "../components/Grid";
import Footer from "./../components/Footer";
import Header from "./../components/Header";

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

class FavoritesDashboard extends Component {
	render() {
		const favorites = this.props.favorites;

		return (
			<div>
				<LoadingBar />
				<Header displaySearch={false} />
				{favorites.length === 0 && <ItemNotFound>no items...</ItemNotFound>}
				<Wrapper>
					{favorites &&
						favorites.map((item, index) => (
							<Grid
								key={index}
								id={item.id}
								name={item.name}
								image={item.image}
								favorite={item.favorite}
								displayLike={false}
							/>
						))}
				</Wrapper>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps({ favorites }) {
	return {
		favorites
	};
}

FavoritesDashboard.propTypes = {
	beers: PropTypes.array
};

export default connect(mapStateToProps)(FavoritesDashboard);
