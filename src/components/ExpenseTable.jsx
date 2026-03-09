{/*import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TableContainer,
} from "@mui/material";

const ExpenseTable = ({ expenses, friends, setExpenses }) => {
  const [open, setOpen] = useState(false);

  const friendMap={};
  friends.forEach((f)=>{
    friendMap[f.id] = f.name;
  });

  const handleDeleteAll = () => {
    setExpenses([]);
    setOpen(false);
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">All Expenses</Typography>

        {expenses.length > 0 && (
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpen(true)}
          >
            Delete All
          </Button>
        )}
      </Box>

      {expenses.length === 0 ? (
        <Typography color="text.secondary">
          No expenses added yet.
        </Typography>
      ) : (
        <TableContainer sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell><strong>Category</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Paid By</strong></TableCell>
              <TableCell><strong>Amount</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
              <TableCell>{expense.category}</TableCell>
                <TableCell>{expense.description}</TableCell>
                <TableCell>{friendMap[expense.paidBy]}</TableCell>
                <TableCell>₹{expense.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
      )}

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delete All Expenses?</DialogTitle>
        <DialogContent>
          This action cannot be undone.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button color="error" onClick={handleDeleteAll}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ExpenseTable; */
}



import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TableContainer,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllExpenses } from "../store/expenseSlice";

const ExpenseTable = () => {
  const friends = useSelector((state)=>state.friends) || []
  const expenses = useSelector((state)=>state.expenses) || []
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false);

  const friendMap={};
  friends.forEach((f)=>{
    friendMap[f.id] = f.name;
  });

  const handleDeleteAll = () => {
    dispatch(deleteAllExpenses())
    setOpen(false);
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">All Expenses</Typography>

        {expenses.length > 0 && (
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpen(true)}
          >
            Delete All
          </Button>
        )}
      </Box>

      {expenses.length === 0 ? (
        <Typography color="text.secondary">
          No expenses added yet.
        </Typography>
      ) : (
        <TableContainer sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell><strong>Category</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Paid By</strong></TableCell>
              <TableCell><strong>Amount</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
              <TableCell>{expense.category}</TableCell>
                <TableCell>{expense.description}</TableCell>
                <TableCell>{friendMap[expense.paidBy]}</TableCell>
                <TableCell>₹{expense.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
      )}

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delete All Expenses?</DialogTitle>
        <DialogContent>
          This action cannot be undone.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button color="error" onClick={handleDeleteAll}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ExpenseTable;