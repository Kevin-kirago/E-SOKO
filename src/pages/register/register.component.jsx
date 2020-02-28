import React from "react";
import "./register.styles.scss";

import FormInput from "../../components/form_input/formInput.component";
import CustomButton from "../../components/custom_button/custom_button.component";

class RegisterPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			password: ""
		};
	}

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		const { email, name, password } = this.state;

		return (
			<div className="register-page">
				<div className="container">
					<div className="bg-side"></div>
					<div className="content">
						<form className="form">
							<h3 className="heading__tertiary">Create an Account with</h3>
							<FormInput type="text" name="name" value={name} handleChange={this.handleChange} label="Full Name" required />
							<FormInput type="email" name="email" value={email} handleChange={this.handleChange} label="Email Address" required />
							<FormInput type="password" name="password" value={password} handleChange={this.handleChange} label="Password" required />
							<FormInput
								type="password"
								name="confirm_password"
								value={password}
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
