import React from "react";
import Header from "../../components/header";
import { GridContainer } from "../pagesStyle";
import Footer from "../../components/footer";
import OrderInfo from "../../components/orderInfo";

const MainPage = () => {
	return (
		<GridContainer>
			<Header />
			<OrderInfo />
			<Footer />
		</GridContainer>
	);
};

export default MainPage;
