import { combineReducers } from "redux";

// TODO . ADD persistor and storage for local storage data persistance

// Object reducers
import userReducer from "./user/user.reducer";
import directoryReducer from "./directory/directory.reducer";

const rootReducer = combineReducers({
	user: userReducer,
	directory: directoryReducer
});

export default rootReducer;
