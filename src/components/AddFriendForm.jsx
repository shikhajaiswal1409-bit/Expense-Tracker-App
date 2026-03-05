import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const AddFriendForm = ({ friends, setFriends }) => {
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");

  const handleAdd = () => {
    if (!name.trim()) return;

    const newFriend = {
      id: Date.now(),
      name: name.trim(),
      createdAt: new Date().toISOString(),
    };

    setFriends([...friends, newFriend]);
    setName("");
  };

  const handleDelete = (id) => {
    const updated = friends.filter((friend) => friend.id !== id);
    setFriends(updated);
  };

  const handleEdit = (friend) => {
    setEditingId(friend.id);
    setEditingName(friend.name);
  };

  const handleSave = (id) => {
    const updated = friends.map((friend) =>
      friend.id === id ? { ...friend, name: editingName } : friend
    );

    setFriends(updated);
    setEditingId(null);
    setEditingName("");
  };

  return (
    <Paper sx={{ p: 4, borderRadius: 3 }}>
      <Typography variant="h4" gutterBottom>
        Add Friend
      </Typography>

      {/* Add Friend Input */}
      <Box display="flex" gap={2} mb={4}>
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

      {friends.length === 0 ? (
        <Typography color="text.secondary">
          No friends added yet.
        </Typography>
      ) : (
        <List>
          {friends.map((friend) => (
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
                      onClick={() => handleEdit(friend)}
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
  );
};

export default AddFriendForm;