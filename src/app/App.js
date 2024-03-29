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
import shopPage from "../pages/shop/shop.component";
import AboutPage from "../pages/about/about.component";
import ContactPage from "../pages/contact/contact.component";
import LoginPage from "../pages/login/login.component";
import RegisterPage from "../pages/register/register.component";

// firebase
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
			if (user) {
				const userRef = await createUserProfileDocument(user);
				userRef.onSnapshot(snapShot => {
					// set current user
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}

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
					<Route exact path="/shop" component={shopPage} />
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
