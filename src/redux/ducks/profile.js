import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    battleTag: "",
    profile: undefined,
  },
  reducers: {
    changeBattleTag: (state, action) => {
      state.battleTag = action.payload;
    },
    getProfile: () => {},
    setProfile: (state, action) => {
      const profile = action.payload;
      return { ...state, profile };
    },
  },
});

export const { changeBattleTag, getProfile, setProfile } = profileSlice.actions;

export default profileSlice.reducer;
