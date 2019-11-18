import { combineReducers } from "redux";
import issuesDisplaySlice from "../features/issuesDisplay/issuesDisplaySlice";
import repoDetailsReducer from "../features/repoSearch/repoDetailsSlice";
import issuesReducer from "../features/issuesList/issuesSlice";

const rootReducer = combineReducers({
  issueDisplay: issuesDisplaySlice,
  repoDetails: repoDetailsReducer,
  issues: issuesReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
