import React, { useState, useContext, setState } from "react";
import {
	StyledHeadder,
	StyledLogo,
	StyledMid,
	StyledLogin,
	ButtonBadge,
	StyledWebsiteLogo,
	StyleTittle,
} from "./style";
import { Link } from "react-router-dom";
import { ItensCarrinho } from "../../cartItemsContext";

import { FiLogIn } from 'react-icons/fi'
import { FiShoppingCart } from 'react-icons/fi'
import { FiDatabase } from 'react-icons/fi'
import './style.css'

const Header = (props) => {
	const [CartItems] = useContext(ItensCarrinho);
	const CountCartItems = CartItems.length;

	return (
		<StyledHeadder>
			<StyledLogo>
				<Link to="/">
					<StyledWebsiteLogo src="/assets/Logo_1.png" />
				</Link>
			</StyledLogo>
			<StyledMid>
				<StyleTittle>BANCO DE DADOS I</StyleTittle>
			</StyledMid>
			<StyledLogin>
				<Link to="/login">
					<FiLogIn className="header-icon"/>
				</Link>
				<Link to="/purchase">
					<FiShoppingCart className='header-icon'/>
					{""}
					{CountCartItems ? (
						<ButtonBadge>{CountCartItems}</ButtonBadge>
					) : (
						""
					)}
				</Link>
			</StyledLogin>
		</StyledHeadder>
	);
};

export default Header;
