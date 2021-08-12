import React from "react";
import {
	StyledFooter,
	SyledHR,
	StyledSocialMediaDiv,
	StyledCopyrightDiv,
	StyledH3,
	StyledH4,
} from "./style";

import './style.css'

import { Link } from "react-router-dom";

import { IoLogoDiscord } from 'react-icons/io5'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitch } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaYoutubeSquare } from 'react-icons/fa'


const Footer = () => {
	return (
		<StyledFooter>
			<StyledSocialMediaDiv>
				<StyledH3>Social Media</StyledH3>
				<a href="https://www.discord.com" target="_blank" rel="noreferrer">
				<IoLogoDiscord color="#7289da" className="footer-icon-special"/>
				</a>
				<a href="https://www.facebook.com" target="_blank" rel="noreferrer">
					<FaFacebookSquare color="#4267B2" className="footer-icon"/>
				</a>
				<a href="https://www.twitch.com" target="_blank" rel="noreferrer">
					<FaTwitch color="#6441a5" className="footer-icon-special"/>
				</a>
				<a href="https://www.twitter.com" target="_blank" rel="noreferrer">
					<FaTwitterSquare color="#1DA1F2" className="footer-icon"/>
				</a>
				<a href="https://www.youtube.com" target="_blank" rel="noreferrer">
					<FaYoutubeSquare color="#FF0000" className="footer-icon"/>
				</a>
			</StyledSocialMediaDiv>
			<SyledHR />
			<StyledCopyrightDiv>
				<Link to="/term">
					<StyledH4>Termos de Uso</StyledH4>
				</Link>
				<Link to="/privacy">
					<StyledH4>Política de Privacidade</StyledH4>
				</Link>
				<Link to="/">
					<StyledH4>Copyright © DPG Games 2021</StyledH4>
				</Link>
			</StyledCopyrightDiv>
		</StyledFooter>
	);
};

export default Footer;
