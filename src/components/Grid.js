import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import ThumbUp from "@material-ui/icons/ThumbUp";

const styles = {
	card: {
		maxWidth: 185,
		minWidth: 185,
		border: "solid 1px darkgray",
		margin: 5,
		background: "lightgray"
	},
	media: {
		objectFit: "cover",
		width: "auto",
		margin: "auto"
	},
	name: {
		fontSize: "1.1rem",
		textAlign: "center"
	}
};

const Grid = ({
	classes,
	id,
	name,
	image,
	favorite = false,
	clickItem = () => {},
	handleToggle = () => {},
	displayLike = true
}) => (
	<Card className={classes.card}>
		<CardActionArea onClick={clickItem}>
			<CardMedia
				component="img"
				className={classes.media}
				height="180"
				image={image}
				alt={name}
				title={name}
			/>
			<CardContent style={{ paddingBottom: 0 }}>
				<Typography
					className={classes.name}
					gutterBottom
					variant="h5"
					component="h2"
				>
					{name}
				</Typography>
			</CardContent>
		</CardActionArea>
		<CardActions style={{ display: displayLike ? "" : "none" }}>
			<Tab
				onClick={() => handleToggle({ name, image, id, favorite })}
				icon={<ThumbUp color={favorite ? "primary" : "action"} />}
			/>
		</CardActions>
	</Card>
);

Grid.propTypes = {
	classes: PropTypes.shape({
		card: PropTypes.string,
		media: PropTypes.string
	}),

	item: PropTypes.object
};

export default withStyles(styles)(Grid);
