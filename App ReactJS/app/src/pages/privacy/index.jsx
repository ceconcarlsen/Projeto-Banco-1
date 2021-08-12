import React from "react";
import Header from "../../components/header";
import { GridContainer } from "../pagesStyle";
import Footer from "../../components/footer";
import Info from '../../components/info';

const PrivacyPage = () => {
    return (
		<GridContainer>
			<Header />
			<Info name="Política de Privacidade"/>
			<Footer />
		</GridContainer>
	);
};

export default PrivacyPage;
