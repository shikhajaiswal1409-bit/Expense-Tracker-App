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