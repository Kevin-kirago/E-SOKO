import React from "react";
import "./home.styles.scss";

const HomePage = () => {
	return (
		<div className="home">
			<div className="header">
				<div className="video-container">
					<video className="video-bg" autoPlay loop>
						<source src="https://storage.coverr.co/videos/coverr-fashion-shopping--1563961262936?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTgzMjI4ODY2fQ.Qoq3IjeDqWb0eXu-98ZDnEtL_kFj-0mZpwCJ6GvR40U" />
					</video>
				</div>
				<div className="content"></div>
			</div>
		</div>
	);
};

export default HomePage;
