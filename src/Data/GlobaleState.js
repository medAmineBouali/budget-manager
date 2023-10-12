import userSlice from "../componants/Auth/AuthState";
import dataSlice from "./DataSlice";
import uiSlice from "../componants/UI/UIState";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
   reducer:{
   user: userSlice.reducer,data: dataSlice.reducer,ui: uiSlice.reducer}
  });

  export default store;