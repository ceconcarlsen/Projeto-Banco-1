import "./App.css";
import MainPage from "./pages/main";
import UserDataPage from "./pages/userData";
import PurchasePage from "./pages/purchase";
import TermoPage from "./pages/termo";
import PrivacyPage from './pages/privacy'
import LoginPage from './pages/login'
import ConfirmationPage from "./pages/confirmation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ItemsProvider } from "./cartItemsContext";

function App() {
	return (
		<Router>
			<ItemsProvider>
				<Switch>
					<Route exact path="/">
						<MainPage />
					</Route>
					<Route exact path="/purchase">
						<PurchasePage />
					</Route>
					<Route exact path="/userData">
						<UserDataPage />
					</Route>
					<Route exact path="/confirmation">
						<ConfirmationPage />
					</Route>
					<Route exact path="/term">
						<TermoPage />
					</Route>
					<Route exact path="/privacy">
						<PrivacyPage />
					</Route>
					<Route exact path="/login">
						<LoginPage />
					</Route>
				</Switch>
			</ItemsProvider>
		</Router>
	);
}

export default App;
