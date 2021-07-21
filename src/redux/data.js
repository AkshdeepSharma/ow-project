import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    platform: "pc",
    region: "us",
    battleTag: "",
  },
  reducers: {
    changePlatform: (state, action) => {
      state.platform = action.payload;
    },
    changeRegion: (state, action) => {
      state.region = action.payload;
    },
    changeBattleTag: (state, action) => {
      state.battleTag = action.battleTag;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changePlatform, changeRegion, changeBattleTag } =
  dataSlice.actions;

export default dataSlice.reducer;
