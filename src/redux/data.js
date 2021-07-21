import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    platform: "pc",
    region: "us",
    battleTag: "", // "powerglide#11738",
    profile: undefined,
  },
  reducers: {
    changePlatform: (state, action) => {
      state.platform = action.payload;
    },
    changeRegion: (state, action) => {
      state.region = action.payload;
    },
    changeBattleTag: (state, action) => {
      state.battleTag = action.payload;
    },
    changeProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { changePlatform, changeRegion, changeBattleTag, changeProfile } =
  dataSlice.actions;

export default dataSlice.reducer;
