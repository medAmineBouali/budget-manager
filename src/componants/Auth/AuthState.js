import { auth } from "../../firebase";
import {signOut } from "firebase/auth";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { displayName: "", isLoggedIn: false ,uid:'userUID'},
  reducers: {
    logout(state, action) {
      state.displayName = "";
      state.isLoggedIn = false;
      signOut(auth);
    },
    setUser(state, action) {
      state.displayName = action.payload.displayName;
      state.uid = action.payload.uid;
      state.isLoggedIn = true;
    },
  },
});


export const userActions = userSlice.actions;

export default userSlice;
