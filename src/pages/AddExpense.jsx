// import { Box, Button, MenuItem, Paper, TextField, Typography } from '@mui/material'
// import React, { useState } from 'react'

// const AddExpense = ({friends, expenses, setExpenses}) => {
//   const[amount, setAmount] = useState("")
//   const[paidBy, setPaidBy] = useState("")
//   const[description, setDescription] = useState("")

//   const handleSubmit=(e)=>{
//     e.preventDefault()

//     if(!amount || !paidBy) return

//     const newExpense = {
//       id: Date.now(),
//       amount: Number(amount),
//       description,
//       paidBy: Number(paidBy),
//     }

//     setExpenses([...expenses, newExpense])

//     setAmount("")
//     setPaidBy("")
//     setDescription("")
//   }
//   return (
//     <>
//     <Paper sx={{p: {xs:2, sm:3, md:4}}}>
//     <Typography gutterBottom sx={{
//     fontSize: {
//       xs: "1.6rem",
//       sm: "2rem",
//       md: "2.2rem",
//     },
//     fontWeight: 600
//   }}>
//       Add Expense Page
//     </Typography>

//     <Box component="form" display='flex' flexDirection='column'   gap={{ xs: 2, sm: 3, md: 4 }}
//  onSubmit={handleSubmit}>
//       <TextField id='amount' label="Amount" type='number' value={amount} onChange={(e)=> setAmount(e.target.value)} required />
//       <TextField 
//       select
//       id='paidBy'
//        label="Paid By"
//         value={paidBy}
//         onChange={(e)=> setPaidBy(e.target.value)}
//         required
//         >
//         {friends.map((friend)=>(
//         <MenuItem key={friend.id} value={friend.id}>{friend.name}</MenuItem>
//         ))}

//         </TextField>

//         <TextField id='id' label="Description" value={description} onChange={(e)=> setDescription(e.target.value)} />

//         <Button variant="contained"   sx={{ width: { xs: "100%", sm: "auto" } }}
//  type="submit">Add Expense</Button>
//     </Box>
//     </Paper>
//     </>
//   )
// }

// export default AddExpense

import { Box, Button, MenuItem, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const categories = [
  { value: "food", label: "Food", icon: "🍔" },
  { value: "cab", label: "Cab", icon: "🚕" },
  { value: "grocery", label: "Grocery", icon: "🛒" },
  { value: "cloth", label: "Cloth", icon: "👕" },
  { value: "rent", label: "Rent", icon: "🏠" },
];

const AddExpense = ({ friends, expenses, setExpenses }) => {
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !paidBy || !category) return;

    const newExpense = {
      id: Date.now(),
      amount: Number(amount),
      description,
      paidBy: Number(paidBy),
      category, // store category key
    };

    setExpenses([...expenses, newExpense]);

    setAmount("");
    setPaidBy("");
    setDescription("");
    setCategory("");
  };

  return (
    <Paper sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      <Typography
        gutterBottom
        sx={{
          fontSize: {
            xs: "1.6rem",
            sm: "2rem",
            md: "2.2rem",
          },
          fontWeight: 600,
        }}
      >
        Add Expense
      </Typography>

      <Box
        component="form"
        display="flex"
        flexDirection="column"
        gap={{ xs: 2, sm: 3, md: 4 }}
        onSubmit={handleSubmit}
      >
        {/* Amount */}
        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        {/* Paid By */}
        <TextField
          select
          label="Paid By"
          value={paidBy}
          onChange={(e) => setPaidBy(e.target.value)}
          required
        >
          {friends.map((friend) => (
            <MenuItem key={friend.id} value={friend.id}>
              {friend.name}
            </MenuItem>
          ))}
        </TextField>

        {/* Category with icons */}
        <TextField
          select
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <MenuItem key={cat.value} value={cat.value}>
              {cat.icon} {cat.label}
            </MenuItem>
          ))}
        </TextField>

        {/* Description */}
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Submit */}
        <Button
          variant="contained"
          sx={{ width: { xs: "100%", sm: "auto" } }}
          type="submit"
        >
          Add Expense
        </Button>
      </Box>
    </Paper>
  );
};

export default AddExpense;
