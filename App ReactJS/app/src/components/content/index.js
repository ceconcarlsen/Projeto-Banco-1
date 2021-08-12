import React, { useState, useContext } from "react";
import Produto from "./produto";
import data from "../../data/products";
import {
	StyledContent,
	StyledProductsList,
	StyledMainHeader,
	SelectDiv,
} from "./style";
import { ItensCarrinho } from "../../cartItemsContext";
import SearchBar from "material-ui-search-bar";
import Select from "react-select";
import { yellow } from "@material-ui/core/colors";

const Content = () => {
	const [CartItems, setCartItems] = useContext(ItensCarrinho);
	const [search, setSearch] = useState("");
	const [selectedOption, setSelectedOption] = useState("");

	const options = [
		{ value: "", label: "Todas Categorias" },
		{ value: "Acao e Aventura", label: "Ação e Aventura" },
		{ value: "Heroi", label: "Herói" },
		{ value: "Corrida", label: "Corrida" },
		{ value: "Indie", label: "Indie" },
		{ value: "Luta", label: "Luta" },
		{ value: "FPS", label: "FPS" },
		{ value: "Mundo Aberto", label: "Mundo Aberto" },
		{ value: "RPG", label: "RPG" },
	];

	const handleChange = (e) => {
		setSelectedOption(e.value);
	};

	const SelectCategory = () => (
		<Select
			className="basic-single"
			classNamePrefix="select"
			theme={(theme) => ({
				...theme,
				borderRadius: 7,
				colors: {
					...theme.colors,
					text: "orangered",
					primary25: "lightblue",
					primary: "black",
				},
			})}
			value={options.find((obj) => obj.value === selectedOption)}
			options={options}
			onChange={handleChange}
		/>
	);

	const handleAdd = (produto) => {
		const exist = CartItems.find((x) => x._id === produto._id);
		if (exist) {
			setCartItems(
				CartItems.map((x) =>
					x._id === produto._id ? { ...exist, qtd: exist.qtd + 1 } : x
				)
			);
		} else {
			setCartItems([...CartItems, { ...produto, qtd: 1 }]);
		}
	};

	return (
		<>
			<StyledContent>
				<StyledMainHeader>
					<SearchBar
						value={search}
						onChange={(newValue) => setSearch(newValue)}
					/>
					<SelectDiv>
						<SelectCategory />
					</SelectDiv>
				</StyledMainHeader>

				<StyledProductsList>
					{data.produtos
						.filter((val) => {
							if (search == "") {
								return val;
							} else if (
								val.nome
									.toLowerCase()
									.includes(search.toLowerCase())
							) {
								return val;
							} else if (
								val.categoria
									.toLowerCase()
									.includes(search.toLowerCase())
							) {
								return val;
							}
						})
						.filter((val) => {
							if (selectedOption == "") {
								return val;
							} else if (val.categoria.includes(selectedOption)) {
								return val;
							}
						})
						.map((produto) => (
							<Produto produto={produto} handleAdd={handleAdd} />
						))}
				</StyledProductsList>
			</StyledContent>
		</>
	);
};

export default Content;
