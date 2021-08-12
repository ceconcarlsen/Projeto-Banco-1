import React from "react";
import Header from "../../components/header";
import { GridContainer } from "../pagesStyle";
import Footer from "../../components/footer";

import './style.css'

const LoginPage = () => {
    return (
		<GridContainer>
			<Header />
			<div className="center">
				<h2>Login</h2>
			</div>
			<Footer />
		</GridContainer>
	);
};

export default LoginPage;
