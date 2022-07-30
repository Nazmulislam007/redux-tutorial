import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: { logedInState: false },
  reducers: {
    login(state) {
      state.logedInState = true;
    },
    logout(state) {
      state.logedInState = false;
    },
  },
});

export const actionAuth = authSlice.actions;
