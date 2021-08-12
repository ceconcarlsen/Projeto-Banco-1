import React, { useContext } from "react";
import { ItensCarrinho } from "../../cartItemsContext";
import { StyledOrderContainer, OrderContainer, Data } from "./style";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const OrderInfo = () => {
	const [CartItems, setCartItems] = useContext(ItensCarrinho);
	const itemsPrice = CartItems.reduce((a, c) => a + c.preco * c.qtd, 0);
	const shippingPrice = itemsPrice > 2000 ? 0 : 50;
	const totalPrice = itemsPrice + shippingPrice;

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const handleDelAll = () => {
		setCartItems([]);
	};

	return (
		<StyledOrderContainer>
			<OrderContainer>
				<h1>Pedido número #{getRandomIntInclusive(999, 9999)}</h1>
				<Data>
					{CartItems.map((item) => (
						<div key={item._id}>
							<div>
								<div>{item.nome}</div>

								<div>
									{item.qtd} x R${item.preco.toFixed(2)}
								</div>
							</div>
						</div>
					))}
					<div>Valor total do pedido: R${totalPrice.toFixed(2)}</div>
				</Data>

				<Link to="/">
					<Button
						variant="contained"
						color="primary"
						onClick={() => handleDelAll()}
					>
						Confirmar compra
					</Button>
				</Link>
			</OrderContainer>
		</StyledOrderContainer>
	);
};

export default OrderInfo;
