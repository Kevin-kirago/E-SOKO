import { UserActionTypes } from "./user.types";

// defines how we set current user based on the type of action or event fired and the data passed
export const setCurrentUser = user => {
	return {
		type: UserActionTypes.SET_CURRENT_USER,
		payload: user
	};
};
