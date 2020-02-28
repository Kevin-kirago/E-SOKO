import React from "react";
import "./formInput.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
	return (
		<div className="form__group">
			<label className="form__input--label">{label}</label>
			<input className="form__input" onChange={handleChange} {...otherProps} placeholder={label} />
		</div>
	);
};

export default FormInput;
