import { combineReducers } from "redux";

// TODO . ADD persistor and storage for local storage data persistance

// Object reducers
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
	user: userReducer
});

export default rootReducer;
