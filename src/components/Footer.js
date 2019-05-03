import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
	background-color: black;
	color: white;
	flex-shrink: 0;
	padding: 20px;
	text-align: center
	font-size: 14px
`;

const Footer = () => {
	return (
		<FooterStyled>
			<span>
				Developed by Rafael Teixeira &middot; Data provided by Marvel. &copy;
				2019 Marvel &middot; Data provided by PUNK API - Brewdog Beers
			</span>
		</FooterStyled>
	);
};

export default Footer;
