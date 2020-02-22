import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

// pages
import { HomePage } from "../pages/home/home.component";
import { LoginPage } from "../pages/login/login.component";
import { SignInPage } from "../pages/signin/sign.component";

class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path to="/" component={HomePage} />
				<Route exact path to="/login" component={LoginPage} />
				<Route exact path to="/signin" component={SignInPage} />
			</Switch>
		);
	}
}

export default App;
