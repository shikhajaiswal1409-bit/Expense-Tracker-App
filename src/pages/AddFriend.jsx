// import { Box } from "@mui/material";
// import AddFriendForm from "../components/AddFriendForm";

// const AddFriend = ({ friends, setFriends }) => {
//   return (
//     <Box mt={4}>
//       <AddFriendForm friends={friends} setFriends={setFriends} />
//     </Box>
//   );
// };

// export default AddFriend;


import React, { useState } from 'react'
import {
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

import { useDispatch, useSelector } from 'react-redux'
import { addFriend, deleteFriend, editFriend } from '../store/friendSlice';

const AddFriend = () => {
  const[name, setName] = useState("")
  const[editingId, setEditingId] = useState("")
  const[editingName, setEditingName] = useState("")

  const friends = useSelector((state)=>state.friends);
  const dispatch = useDispatch();

  const handleAdd = ()=>{
    if(!name.trim()) return;

    const newFriend={
      id: Date.now(),
      name: name.trim(),
      createdAt: new Date().toISOString()
    };

    dispatch(addFriend(newFriend));
    setName("")
  }

  const handleDelete=(id)=>{
    dispatch(deleteFriend(id))
  }

  const handleEdit=(id)=>{
    console.log(id, "id")
    setEditingId(id)
    setEditingName(name)

  }

  const handleSave=(id)=>{
    dispatch(editFriend({id, name: editingName}))
        setEditingId(null)
    setEditingName("")
  }

  return (
    <>
<Paper sx={{ p:4, borderRadius:3}}>
<Typography sx={{
    fontSize: {
      xs: "1.6rem",
      sm: "2rem",
      md: "2.2rem",
    },
    fontWeight: 600
  }} gutterBottom>
        Add Friend
      </Typography>

      <Box display="flex"   flexDirection={{ xs: "column", sm: "row" }}
 gap={2} mb={4}>
        <TextField
          label="Friend Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Typography variant="h6" gutterBottom>
        Friend List
      </Typography>

      {friends.length === 0? (
        <Typography color='text.secondary'>No Friends added yet.</Typography>
      ):(
        <List>
          {friends.map((friend)=>(
            <ListItem
            key={friend.id}
            secondaryAction={
                <>
                  {editingId === friend.id ? (
                    <IconButton
                      color="success"
                      onClick={() => handleSave(friend.id)}
                    >
                      <SaveIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(friend.id)}
                    >
                      <EditIcon />
                    </IconButton>
                  )}

                  <IconButton
                    color="error"
                    onClick={() => handleDelete(friend.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              {editingId === friend.id ? (
                <TextField
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  size="small"
                />
              ) : (
                <ListItemText primary={friend.name} />
              )}
            </ListItem>
          ))}
        </List>
      )}
</Paper>
    </>
  )
}

export default AddFriend;
