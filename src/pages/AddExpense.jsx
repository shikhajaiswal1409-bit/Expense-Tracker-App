import { Box, Button, MenuItem, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const AddExpense = ({friends, expenses, setExpenses}) => {
  const[amount, setAmount] = useState("")
  const[paidBy, setPaidBy] = useState("")
  const[description, setDescription] = useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(!amount || !paidBy) return

    const newExpense = {
      id: Date.now(),
      amount: Number(amount),
      description,
      paidBy: Number(paidBy),
    }

    setExpenses([...expenses, newExpense])

    setAmount("")
    setPaidBy("")
    setDescription("")
  }
  return (
    <>
    <Paper>
    <Typography variant="h4" gutterBottom>
      Add Expense Page
    </Typography>

    <Box component="form" display='flex' flexDirection='column' gap={4} onSubmit={handleSubmit}>
      <TextField id='amount' label="Amount" type='number' value={amount} onChange={(e)=> setAmount(e.target.value)} required />
      <TextField 
      select
      id='paidBy'
       label="Paid By"
        value={paidBy}
        onChange={(e)=> setPaidBy(e.target.value)}
        required
        >
        {friends.map((friend)=>(
        <MenuItem key={friend.id} value={friend.id}>{friend.name}</MenuItem>
        ))}

        </TextField>

        <TextField id='id' label="Description" value={description} onChange={(e)=> setDescription(e.target.value)} />

        <Button variant="contained" type="submit">Add Expense</Button>
    </Box>
    </Paper>
    </>
  )
}

export default AddExpense
