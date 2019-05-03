import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import Header from "../components/Header";
import imgMarvel from "../assets/marvel.jpg";
import imgBeer from "../assets/beer.jpg";
import { handleBeers } from "../actions/beers";
import { handleCharacters } from "../actions/marvel";
import { handleComics } from "../actions/marvel";

const Title = styled.h1`
	font-size: 1.5em;
	color: white;
	text-align: center;
	margin-top: 20px;
`;

const Wrapper = styled.section`
	margin-top: 50px
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Img = styled.img`
	border: 1px solid white;
	opacity: 0.7;
	:hover {
		opacity: 1;
	}
`;

const ImgBeer = styled(Img)`
	border: 1px solid white;
	height: 465px;
	width: 450px;
	margin-left: 20px;
`;

class Home extends Component {
	componentDidMount() {
		this.props.dispatch(handleCharacters());
		this.props.dispatch(handleBeers());
		this.props.dispatch(handleComics());
	}

	render() {
		return (
			<div>
				<Header displaySearch={false} />
				<Title>Get the best of both worlds</Title>
				<Wrapper>
					<Link to="/marvel/characters">
						<Img src={imgMarvel} alt="Marvel" />
					</Link>
					<Link to="/beers">
						<ImgBeer src={imgBeer} alt="Beers" />
					</Link>
				</Wrapper>
			</div>
		);
	}
}

export default connect()(Home);
