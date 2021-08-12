import styled from "styled-components";

export const StyledOrderContainer = styled.main`
	grid-area: main;
	max-width: 1080px;
	margin: 0 auto;
	background-color: #151d27;
	color: #ffffff;
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	flex-wrap: wrap;
	flex-direction: column;
	padding: 0.5rem;
	a {
		text-decoration: none;
	}
`;

export const OrderContainer = styled.main`
	padding: 20px;
	border-radius: 10px;
	border: 1px solid white;
`;

export const ButtonS = styled.button`
	font-size: 0.8rem;
	padding: 0.2rem;
	margin: 0.1rem;
	border-radius: 0.5rem;
	border: 0.1rem #404040 solid;
	background-color: #f0c040;
	width: 100%;
	cursor: pointer;
`;

export const Data = styled.div`
	margin: 5px 0 15px;
`;
