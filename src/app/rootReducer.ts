import { combineReducers } from "redux";
import issuesDisplaySlice from "../features/issuesDisplay/issuesDisplaySlice";
import repoDetailsReducer from "../features/repoSearch/repoDetailsSlice";

const rootReducer = combineReducers({
  issueDisplay: issuesDisplaySlice,
  repoDetails: repoDetailsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
