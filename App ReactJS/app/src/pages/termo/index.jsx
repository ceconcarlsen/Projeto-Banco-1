import React from "react";
import Header from "../../components/header";
import { GridContainer } from "../pagesStyle";
import Footer from "../../components/footer";
import Info from '../../components/info';

const TermoPage = () => {
    return (
		<GridContainer>
			<Header />
			<Info name="Termos de Uso"/>
			<Footer />
		</GridContainer>
	);
};


export default TermoPage;
