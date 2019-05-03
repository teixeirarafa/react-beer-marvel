import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./Header";

class HeaderContainer extends Component {
	state = {
		query: ""
	};

	updateQuery = query => {
		this.setState(() => ({
			query: query.trimStart()
		}));
		if (query.trimStart().length !== 0) {
			this.props.searchItem(query);
		}
	};

	render() {
		const { query } = this.state;
		return <Header query={query} updateQuery={this.updateQuery} />;
	}
}

HeaderContainer.propTypes = {
	classes: PropTypes.object
};

export default HeaderContainer;
