import React from "react";
import { connect } from "react-redux";
import "../css/character.css";
import Header from "./Header";
import Footer from "./Footer";

const Character = ({ character }) => {
	const data = character[0];

	return (
		<div>
			<Header displaySearch={false} />
			<div style={{ backgroundColor: "lightgray" }}>
				<h2 className="profile_title">{data.name}</h2>
				<div className="flex">
					<div className="profile_image">
						<img
							src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
							alt={data.name}
							title={data.name}
							style={{ width: 355 }}
						/>
					</div>
					<div className="profile_content">
						<div className="profile_content_item">
							<h3> Description: </h3>
							{data.description || "No description provided"}
						</div>
						<div className="profile_content_item">
							<h3> Stats: </h3>
							<table className="profile_table">
								<thead>
									<tr>
										<th>Comics</th>
										<th>Series</th>
										<th>Stories</th>
										<th>Events</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{data.comics.available}</td>
										<td>{data.series.available}</td>
										<td>{data.stories.available}</td>
										<td>{data.events.available}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="profile_content_item">
							<h3>Comics</h3>
							<ul>
								{data.comics.items.length ? (
									data.comics.items.map((item, index) => (
										<li key={index}>{item.name}</li>
									))
								) : (
									<div>No data for this list</div>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

function mapStateToProps({ marvel }, ownProps) {
	const id = ownProps.match.params.id;
	return {
		character:
			marvel.characters &&
			marvel.characters.filter(item => {
				return item.id.toString().includes(id.toString());
			})
	};
}

export default connect(mapStateToProps)(Character);
