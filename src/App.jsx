import {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Navbar from "./components/Navbar";

// Pages (create empty files first)
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import AddFriend from "./pages/AddFriend";
import Balances from "./pages/Balances";

function App() {
  const [friends, setFriends] = useState(() =>
  JSON.parse(localStorage.getItem("friends")) || []
);

const [expenses, setExpenses] = useState(() =>
  JSON.parse(localStorage.getItem("expenses")) || []
);
  
  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("friends", JSON.stringify(friends));
  }, [friends]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <>
      <Navbar />

      <Container maxWidth="lg">
        <Box mt={4}>
          <Routes>
            <Route
              path="/"
              element={<Dashboard friends={friends} expenses={expenses} setExpenses={setExpenses} />}
            />
            
            
          <Route
              path="/balances"
              element={<Balances 
              friends={friends} 
             expenses={expenses} setExpenses={setExpenses}
              />
              }
            />

            <Route
              path="/add-expense"
              element={
                <AddExpense
                  friends={friends}
                  expenses={expenses}
                  setExpenses={setExpenses}
                />
              }
            />

            <Route
              path="/add-friend"
              element={<AddFriend friends={friends} setFriends={setFriends} />}
            />
          </Routes>
        </Box>
      </Container>
    </>
  );
}

export default App;