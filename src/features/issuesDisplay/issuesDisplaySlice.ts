import { createSlice, PayloadAction } from "redux-starter-kit";

type CurrentDisplay = {
  displayType: "issues" | "comments";
  issueId: number | null;
};

type CurrentDisplayPayload = {
  displayType: "issues" | "comments";
  issueId?: number;
};

type CurrentRepo = {
  org: string;
  repo: string;
};

type CurrentDisplayState = {
  page: number;
} & CurrentDisplay &
  CurrentRepo;

let initialState: CurrentDisplayState = {
  org: "rails",
  repo: "rails",
  page: 1,
  displayType: "issues",
  issueId: null
};

const issuesDisplaySlice = createSlice({
  name: "issueDisplay",
  initialState,
  reducers: {
    displayRepo(state, action: PayloadAction<CurrentRepo>) {
      const { org, repo } = action.payload;
      state.org = org;
      state.repo = repo;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setCurrentDisplayType(state, action: PayloadAction<CurrentDisplayPayload>) {
      const { displayType, issueId = null } = action.payload;
      state.displayType = displayType;
      state.issueId = issueId;
    }
  }
});

export const {
  displayRepo,
  setCurrentPage,
  setCurrentDisplayType
} = issuesDisplaySlice.actions;

export default issuesDisplaySlice.reducer;
