import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    deleteAllExpenses: () => {
      return [];
    }
  }
});

export const { addExpense, deleteAllExpenses } = expenseSlice.actions;
export default expenseSlice.reducer;