import {createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { ExpenseFormOn: false, AddFormOn: false,IncomeFormOn:false },
  reducers: {
    ExpenseFormSwitch(state, action) {
        state.ExpenseFormOn = !state.ExpenseFormOn;
        console.log("switching")
    },
    AddFormSwitch(state, action) {
        state.AddFormOn = !state.AddFormOn;
    },
    IncomeFormSwitch(state, action) {
        state.IncomeFormOn = !state.IncomeFormOn;
    },
  },
});


export const uiActions = uiSlice.actions;

export default uiSlice;
