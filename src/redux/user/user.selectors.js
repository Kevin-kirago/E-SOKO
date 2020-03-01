import { createSelector } from "reselect";

// pull in the user object from our state
const selectUser = state => state.user;

// export the current user
export const selectCurrentUser = createSelector([selectUser], user => user.currentUser);
