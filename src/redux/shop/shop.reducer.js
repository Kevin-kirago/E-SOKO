import SHOP_DATA from "./shop.data";

const initial_state = {
	collection: SHOP_DATA
};

const shopReducer = (state = initial_state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default shopReducer;
