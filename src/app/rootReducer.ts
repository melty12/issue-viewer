import { combineReducers } from "redux";
import issuesDisplaySlice from "../features/issuesDisplay/issuesDisplaySlice";

const rootReducer = combineReducers({
  issueDisplay: issuesDisplaySlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
