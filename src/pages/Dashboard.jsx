{
// import { Box, Paper, Typography } from '@mui/material'
// import { Grid } from "@mui/material";
// import React from 'react'
// import ExpenseTable from '../components/ExpenseTable';

// const Dashboard = ({friends, expenses, setExpenses}) => {
//   const totalExpense = expenses.reduce(
//     (acc, expense) => acc+expense.amount,
//     0
//   );

//   const perPersonShare = friends.length>0 ? totalExpense/friends.length : 0;
//   console.log("Per Person Share: ", perPersonShare)


//   return (
//     <>
//     {/* <Box display="flex" gap={5} sx={{justifyContent: "center"}}> */}
//     <Grid container spacing={3} justifyContent="center">
//   <Grid size={{xs:12, sm:4}}>


//     <Paper sx={{padding: "30px"}}>
// <Typography>Total Friends</Typography>
// <Typography variant='h6'>{friends.length}</Typography>
// </Paper>
// </Grid>


//   <Grid size={{xs:12, sm:4}}>

// <Paper sx={{padding: "30px"}}>
//   <Typography>Total Expense</Typography>
//   <Typography variant='h6'>Rs: {totalExpense.toFixed(2)}</Typography>
// </Paper>
// </Grid>
//   <Grid size={{ xs: 12, sm: 6 }}
// >

// <Paper sx={{padding: "30px"}}>
//   <Typography>Per Person Share</Typography>
//   <Typography variant='h6'>Rs: {perPersonShare.toFixed(2)}</Typography>
// </Paper>
// </Grid>
// </Grid>
// <Box mt={4}><ExpenseTable expenses={expenses} friends={friends} setExpenses={setExpenses} /></Box>

//    </>
//   );
// };

// export default Dashboard
}


import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import ExpenseTable from '../components/ExpenseTable'

const Dashboard = () => {
  const friends = useSelector((state)=>state.friends) || []
  const expenses = useSelector((state)=>state.expenses) || [];

 const totalExpense = expenses.reduce(
(acc, expense) => acc+expense.amount,
0
);

  const perPersonShare=friends.length>0 ? totalExpense/friends.length : 0

  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        <Grid size={{xs:12, sm:4}}>
          <Paper sx={{padding: "30px"}}>
            <Typography>Total Friends</Typography>
            <Typography variant='h6'>{friends.length}</Typography>
          </Paper>
        </Grid>
        <Grid size={{xs:12, sm:4}}>
          <Paper sx={{padding: "30px"}}>
            <Typography>Total Expense</Typography>
            <Typography variant='h6'>Rs: {totalExpense.toFixed(2)}</Typography>
          </Paper>
        </Grid>

        <Grid  size={{xs:12, sm:4}}>
          <Paper sx={{padding: "30px"}}>
            <Typography>Per Person Share</Typography>
            <Typography variant='h6'>Rs: {perPersonShare.toFixed(2)}</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box mt={4}><ExpenseTable /></Box>

      
    </>
  )
}

export default Dashboard

