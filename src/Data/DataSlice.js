import { createSlice } from "@reduxjs/toolkit";
import { fireStore } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";
import { auth } from "../firebase";

const dataSlice = createSlice({
  name: "data",
  initialState: { balance: 0, monthlyIncome: 0, expenses: [] },

  reducers: {
    addExpense(state, action) {
      state.expenses.push(action.payload);
      state.balance -= +action.payload.amount;
      console.log("adding");
      const userDocRef = doc(fireStore, "users", auth.currentUser.uid);
      updateDoc(userDocRef, {
        expenses: state.expenses,
        balance: state.balance,
      });
    },
    addDeposit(state, action) {
      state.balance += +action.payload;
      const userDocRef = doc(fireStore, "users", auth.currentUser.uid);
      updateDoc(userDocRef, {
        balance: state.balance,
      });
    },
    editMonthly(state, action) {
      state.monthlyIncome += +action.payload;
      const userDocRef = doc(fireStore, "users", auth.currentUser.uid);
      updateDoc(userDocRef, {
        monthlyIncome: state.monthlyIncome,
      });
    },
    initializeData(state, action) {
      return { ...action.payload };
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
