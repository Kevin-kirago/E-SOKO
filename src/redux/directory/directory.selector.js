import { createSelector } from "reselect";

// grab the directory object from the state
const selectDirectory = state => state.directory;

// get the sections from selectDirectory
export const selectDirectorySection = createSelector([selectDirectory], directory => directory.section);
