import React from "react";
import "./menuItem.styles.scss";

const MenuItem = ({ id, title, imageUrl }) => {
	return (
		<div className={`menu-item menu-item-${id}`}>
			<div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
			<div className="content">{title}</div>
		</div>
	);
};

export default MenuItem;
