// import React, { useState } from "react";
// import { Typography, TextField, Button, Box } from "@mui/material";

// const AddFriend = ({ friends, setFriends }) => {
//   const [name, setName] = useState("");

//   const handleAdd = () => {
//     if (!name.trim()) return;

//     const newFriend={
//       id: Date.now(),
//       name: name.trim(),
//       createdAt: new Date().toISOString(),
//     };

//     setFriends([...friends, newFriend]);
//     setName("");
//   };

//   return (
//     <>
//       <Typography variant="h4" gutterBottom>
//         Add Friend
//       </Typography>

//       <Box display="flex" gap={2}>
//         <TextField
//           label="Friend Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <Button variant="contained" onClick={handleAdd}>
//           Add
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default AddFriend;

import React from "react";
import { Box } from "@mui/material";
import AddFriendForm from "../components/AddFriendForm";

const AddFriend = ({ friends, setFriends }) => {
  return (
    <Box mt={4}>
      <AddFriendForm friends={friends} setFriends={setFriends} />
    </Box>
  );
};

export default AddFriend;