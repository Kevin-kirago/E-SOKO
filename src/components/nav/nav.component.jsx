import React from "react";

import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { Link, NavLink } from "react-router-dom";

import "./nav.styles.scss";

const Navigation = ({ currentUser }) => {
	return (
		<div className="navigation">
			<Link className="logo" to="/">
				E-SOKO
			</Link>
			<ul className="navigation__list">
				<li className="navigation__item">
					<NavLink className="navigation__item--link" exact to="/" activeClassName="active">
						Home
					</NavLink>
				</li>
				<li className="navigation__item">
					<NavLink className="navigation__item--link" to="/products" activeClassName="active">
						Products
					</NavLink>
				</li>
				<li className="navigation__item">
					<NavLink className="navigation__item--link" to="/about" activeClassName="active">
						Checkout
					</NavLink>
				</li>
				<li className="navigation__item">
					<NavLink className="navigation__item--link" to="/contact">
						Contact
					</NavLink>
				</li>
				<li className="navigation__item">
					<Link to="/cart" className="navigation__item--link">
						<i className="ion-android-cart"></i>&nbsp;[ 0 ]
					</Link>
				</li>
				<li className="navigation__item"></li>
				{currentUser ? (
					<li className="navigation__item">
						<div className="log-out" onClick={() => auth.signOut()}>
							Log Out
						</div>
					</li>
				) : (
					[
						<li key="0" className="navigation__item">
							<NavLink to="/register" className="navigation__item--link" activeClassName="active">
								Register
							</NavLink>
						</li>,
						<li key="1" className="navigation__item">
							<NavLink to="/login" className="navigation__item--link" activeClassName="active">
								Login
							</NavLink>
						</li>
					].map(item => item)
				)}
			</ul>
		</div>
	);
};

// pull state.user from redux
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Navigation);
