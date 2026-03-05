import React, { useState } from "react";
import {
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Button,
  Divider,
  Alert
} from "@mui/material";

const Balances = ({ friends, expenses, setExpenses }) => {
  const [settled, setSettled] = useState(false);

  const totalExpense = expenses.reduce(
    (acc, expense) => acc + Number(expense.amount),
    0
  );

  const perPersonShare =
    friends.length > 0 ? totalExpense / friends.length : 0;

const spendingMap = {};

friends.forEach((friend) => {
  spendingMap[friend.id] = 0;
});

expenses.forEach((expense) => {
  if (spendingMap[expense.paidBy] !== undefined) {
    spendingMap[expense.paidBy] += Number(expense.amount);
  }
});

  const balances = friends.map((friend) => {
    const spent = spendingMap[friend.id] || 0;
    const balance = spent - perPersonShare;

    return {
      id: friend.id,
      name: friend.name,
      spent,
      shouldPay: perPersonShare,
      balance: Number(balance.toFixed(2)),
    };
  });
const balanceCopy = balances.map((b)=> ({...b}));
const creditors = balanceCopy.filter((b) => b.balance > 0).sort((a,b)=>b.balance-a.balance);
  const debtors = balanceCopy.filter((b) => b.balance < 0).sort((a,b)=>a.balance-b.balance);

  const settlements = [];

  let i = 0;
  let j = 0;

  while (i < creditors.length && j < debtors.length) {
    const credit = creditors[i];
    const debt = debtors[j];

    const amount = Math.min(
      credit.balance,
      Math.abs(debt.balance)
    );

    const roundedAmount = Number(amount.toFixed(2));

  settlements.push({
    from: debt.name,
    to: credit.name,
    amount: roundedAmount,
  });

  credit.balance -= roundedAmount;
  debt.balance += roundedAmount;

  credit.balance = Number(credit.balance.toFixed(2));
  debt.balance = Number(debt.balance.toFixed(2));

  if (credit.balance === 0) i++;
  if (debt.balance === 0) j++;

  }

  const handleMarkAsSettled = () => {
    setExpenses([]); // clear all expenses
    setSettled(true);
  };

  if (friends.length === 0) {
  return (
    <Typography mt={4}>
      No friends added yet.
    </Typography>
  );
}

  return (
    <Box mt={4}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Settlement Overview
      </Typography>

      

      {/* Balance Table */}
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3, mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Friend</strong></TableCell>
              <TableCell><strong>Spent</strong></TableCell>
              <TableCell><strong>Should Pay</strong></TableCell>
              <TableCell><strong>Balance</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {balances.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>₹{Number(row.spent || 0).toFixed(2)}</TableCell>
                <TableCell>₹{Number(row.shouldPay).toFixed(2)}</TableCell>
      <TableCell
  sx={{
    fontWeight: 600,
    color:
      row.balance > 0
        ? "success.main"
        : row.balance < 0
        ? "error.main"
        : "text.primary",
  }}
>
  {row.balance > 0
    ? `+₹${row.balance.toFixed(2)}`
    : row.balance < 0
    ? `-₹${Math.abs(row.balance).toFixed(2)}`
    : `₹0.00`}
</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Final Settlement Instructions */}
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3, mt: 4 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Final Settlement
        </Typography>

        <Divider sx={{ mb: 2 }} />

        {settlements.length === 0 ? (
          <Typography>Everything is already balanced 🎉</Typography>
        ) : (
          settlements.map((s, index) => (
            <Typography key={index} sx={{ mb: 1 }}>
              {s.from} → Pay {s.to} ₹{s.amount}
            </Typography>
          ))
        )}

        {settlements.length > 0 && (
          <Button
            variant="contained"
            color="success"
            sx={{ mt: 3 }}
            onClick={handleMarkAsSettled}
          >
            Mark as Settled
          </Button>
        )}
      </Paper>

      {settled && (
        <Alert severity="success" sx={{ mt: 3 }}>
          All balances settled successfully!
        </Alert>
      )}
    </Box>
  );
};

export default Balances;