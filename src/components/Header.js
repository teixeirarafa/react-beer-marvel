import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = theme => ({
	link: {
		color: "white",
		textDecoration: "none"
	},
	root: {
		width: "100%"
	},
	grow: {
		flexGrow: 0,
		marginRight: 130
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing.unit,
			width: "auto"
		}
	},
	searchIcon: {
		width: theme.spacing.unit * 9,
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "inherit",
		width: "100%"
	},
	inputInput: {
		paddingTop: theme.spacing.unit * 1.5,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit * 1.5,
		paddingLeft: theme.spacing.unit * 10,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: 300,
			"&:focus": {
				width: 380
			}
		}
	}
});

function SearchAppBar(props) {
	const { classes, query = "", updateQuery = {}, displaySearch = true } = props;
	return (
		<div className={classes.root}>
			<AppBar position="static" style={{ backgroundColor: "black" }}>
				<Toolbar>
					<Link to="/" className={classes.link}>
						<Button size="large" color="inherit">
							Home
						</Button>
					</Link>
					<Link to="/marvel/characters" className={classes.link}>
						<Button size="large" color="inherit" style={{ marginLeft: 10 }}>
							Marvel
						</Button>
					</Link>
					<Link to="/beers" className={classes.link}>
						<Button size="large" color="inherit" style={{ marginLeft: 10 }}>
							Beers
						</Button>
					</Link>
					<Link to="/favorites" className={classes.link}>
						<Button size="large" color="inherit" style={{ marginLeft: 10 }}>
							Favorites
						</Button>
					</Link>
					<div className={classes.grow} />
					<div
						className={classes.search}
						style={{ display: displaySearch ? "" : "none" }}
					>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							value={query}
							onChange={event => updateQuery(event.target.value)}
							placeholder="Search ..."
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

SearchAppBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchAppBar);
