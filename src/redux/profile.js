import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
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
  profileSlice.actions;

export default profileSlice.reducer;
