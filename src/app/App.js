import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../redux/user/user.selectors";
import { setCurrentUser } from "../redux/user/user.actions";

import "./App.scss";

// components
import Navigation from "../components/nav/nav.component";
import Footer from "../components/footer/footer.component";

// pages
import HomePage from "../pages/home/home.component";
import ProductsPage from "../pages/products/products.component";
import AboutPage from "../pages/about/about.component";
import ContactPage from "../pages/contact/contact.component";
import LoginPage from "../pages/login/login.component";
import RegisterPage from "../pages/register/register.component";

// firebase
import { auth } from "../firebase/firebase.utils";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
			setCurrentUser(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="App">
				<Navigation />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/products" component={ProductsPage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/contact" component={ContactPage} />
					<Route exact path="/login" render={() => (this.props.currentUser ? <Redirect to="/" /> : <LoginPage />)} />
					<Route exact path="/register" render={() => (this.props.currentUser ? <Redirect to="/" /> : <RegisterPage />)} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

// pull data from redux state
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchStateToProps = dispatchEvent => {
	return {
		setCurrentUser: user => dispatchEvent(setCurrentUser(user))
	};
};

export default connect(mapStateToProps, mapDispatchStateToProps)(App);
