import React from "react";
import "./login.styles.scss";

import FormInput from "../../components/form_input/formInput.component";
import CustomButton from "../../components/custom_button/custom_button.component";
import logo from "../../assets/google.svg";

// firebase
import { signInWithGoogle } from "../../firebase/firebase.utils";

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;

		return (
			<div className="login-page">
				<div className="container">
					<div className="bg-side"></div>
					<div className="content">
						<form className="form">
							<h3 className="heading__tertiary">Log InTo Your Account</h3>
							<FormInput type="email" name="email" value={email} handleChange={this.handleChange} label="Email Address" required />
							<FormInput type="password" name="password" value={password} handleChange={this.handleChange} label="Password" required />
							<CustomButton type="submit">Login</CustomButton>
							<div className="sign-up-with">
								<p>or sign up with</p>
								<div className="sign-with-button" onClick={signInWithGoogle}>
									<img src={logo} alt="sign-with-google-logo" />
									<span>Google</span>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginPage;
