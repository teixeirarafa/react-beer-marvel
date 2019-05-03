import React from "react";
import { connect } from "react-redux";
import "../css/character.css";
import Header from "./Header";
import Footer from "./Footer";

const Beer = ({ beer }) => {
	const data = beer[0];

	return (
		<div>
			<Header displaySearch={false} />
			<div style={{ backgroundColor: "lightgray" }}>
				<h2 className="profile_title">{data.name}</h2>
				<div className="flex">
					<div className="profile_image">
						<img
							src={data.image_url}
							alt={data.name}
							title={data.name}
							style={{ height: 500, padding: "auto" }}
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
										<th>ABV</th>
										<th>IBU</th>
										<th>PH</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{data.abv || "-"}</td>
										<td>{data.ibu || "-"}</td>
										<td>{data.ph || "-"}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="profile_content_item">
							<h3>Food pairing</h3>
							<ul>
								{data.food_pairing ? (
									data.food_pairing.map((item, index) => (
										<li key={index}>{item}</li>
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

function mapStateToProps({ beers }, ownProps) {
	const id = ownProps.match.params.id;
	return {
		beer:
			beers.beers &&
			beers.beers.filter(item => {
				return item.id.toString().includes(id.toString());
			})
	};
}

export default connect(mapStateToProps)(Beer);
