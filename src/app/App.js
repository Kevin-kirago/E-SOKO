import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

// components
import Navigation from "../components/nav/nav.component";

// pages
import HomePage from "../pages/home/home.component";
import ProductsPage from "../pages/products/products.component";
import AboutPage from "../pages/about/about.component";
import ContactPage from "../pages/contact/contact.component";
import LoginPage from "../pages/login/login.component";
import RegisterPage from "../pages/register/register.component";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/products" component={ProductsPage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/contact" component={ContactPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/register" component={RegisterPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
