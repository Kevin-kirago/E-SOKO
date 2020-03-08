import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selector";
import "./directory.styles.scss";

import MenuItem from "../menu_item/menuItem.component";

const Directory = ({ section }) => {
	return (
		<div className="directory">
			{section.map(item => {
				return <MenuItem key={item.id} {...item} />;
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	section: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
