import { UserActionTypes } from "./user.types";

// define the initial state
const initial_state = {
	currentUser: null
};

const userReducer = (state = initial_state, action) => {
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			};
		// if action type is undefined return the initial state
		default:
			return state;
	}
};

export default userReducer;
