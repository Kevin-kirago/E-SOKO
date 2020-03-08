import React from "react";
import { Link } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

import "./home.styles.scss";

const HomePage = () => {
	const bgstyles = {
		backgroundImage: `url("https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center"
	};

	return (
		<div className="home">
			<div className="header">
				<div className="header__img" style={bgstyles}></div>
				<div className="header__content">
					<div className="content">
						<h1 className="heading__primary">
							Catch your Own <br /> Stylish Look
						</h1>
						<p className="paragraph">
							E-SOKO evolves arounds customer needs, always watching out for new technologies, social movements and the latest artistic
							and musical trends. All in which can be used to reflect our designs and store.
						</p>
						<Link to="/products" className="btn">
							Shop now
						</Link>
					</div>
				</div>
			</div>

			<section className="main">
				<h1 className="heading__primary">Collections</h1>
				<Directory />
			</section>
		</div>
	);
};

export default HomePage;
