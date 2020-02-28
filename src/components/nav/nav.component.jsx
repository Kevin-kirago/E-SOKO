import React from "react";
import { Link } from "react-router-dom";

import "./nav.styles.scss";

const Navigation = () => {
	return (
		<div className="navigation">
			<Link className="logo" to="/">
				E-SOKO
			</Link>
			<ul className="navigation__list">
				<li className="navigation__item">
					<Link className="navigation__item--link" to="/">
						Home
					</Link>
				</li>
				<li className="navigation__item">
					<Link className="navigation__item--link" to="/products">
						Products
					</Link>
				</li>
				<li className="navigation__item">
					<Link className="navigation__item--link" to="/about">
						About
					</Link>
				</li>
				<li className="navigation__item">
					<Link className="navigation__item--link" to="/contact">
						Contact
					</Link>
				</li>
				<li className="navigation__item">
					<Link to="/cart" className="navigation__item--link">
						<i className="ion-android-cart"></i>&nbsp;[ 0 ]
					</Link>
				</li>
				<li className="navigation__item"></li>
				<li className="navigation__item">
					<Link to="/register" className="navigation__item--link">
						Register
					</Link>
				</li>
				<li className="navigation__item">
					<Link to="/login" className="navigation__item--link">
						Login
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
