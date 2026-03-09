import { configureStore } from "@reduxjs/toolkit";
import friendsReducer from "./friendSlice";
import expenseReducer from "./expenseSlice"

const loadState = () => {
  try {
    const friends = localStorage.getItem("friends");
    const expenses = localStorage.getItem("expenses");

    return {
      friends: friends ? JSON.parse(friends) : [],
      expenses: expenses ? JSON.parse(expenses) : [],
    };
  } catch (err) {
    console.log(err, "err")
    return {
      friends: [],
      expenses: [],
    };
  }
};

export const store = configureStore({
  reducer: {
    friends: friendsReducer,
    expenses: expenseReducer
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem("friends", JSON.stringify(state.friends));
  localStorage.setItem("expenses", JSON.stringify(state.expenses));
});


// Component
//    ↓
// dispatch(addFriend())
//    ↓
// Redux Store
//    ↓
// friendReducer
//    ↓
// state.friends updated