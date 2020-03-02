import React from "react";
import "./register.styles.scss";

import FormInput from "../../components/form_input/formInput.component";
import CustomButton from "../../components/custom_button/custom_button.component";

import { createUserProfileDocument, auth } from "../../firebase/firebase.utils";

class RegisterPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirm_password: ""
		};
	}

	handleSubmit = async e => {
		e.preventDefault();

		const { email, displayName, password, confirm_password } = this.state;

		//password validation
		if (password !== confirm_password) {
			alert("Password do not match");
			return;
		}

		try {
			// create a new user associated with the email and password
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: ""
			});
		} catch (e) {
			console.log("Unsuccessful sign up", e);
		}
	};

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		const { email, displayName, password, confirm_password } = this.state;

		return (
			<div className="register-page">
				<div className="container">
					<div className="bg-side"></div>
					<div className="content">
						<form className="form" onSubmit={this.handleSubmit}>
							<h3 className="heading__tertiary">Create an Account with</h3>
							<FormInput
								type="text"
								name="displayName"
								value={displayName}
								handleChange={this.handleChange}
								label="Full Name"
								required
							/>
							<FormInput type="email" name="email" value={email} handleChange={this.handleChange} label="Email Address" required />
							<FormInput type="password" name="password" value={password} handleChange={this.handleChange} label="Password" required />
							<FormInput
								type="password"
								name="confirm_password"
								value={confirm_password}
								handleChange={this.handleChange}
								label="Confirm Password"
								required
							/>
							<CustomButton type="submit">Register</CustomButton>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default RegisterPage;
