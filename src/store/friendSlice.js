import { createSlice } from "@reduxjs/toolkit";

const friendSlice = createSlice({
    name: "friends", // this is the name of the slice
    initialState: [], // default state of the slice
    reducers:{        // reducers are functions that change the state: state can only change through reducers: Each reducer corresponds to an action
        addFriend: (state, action)=>{   // this is the reducer function: state-> current redux state: state=[{id"1, name:"A"}, {id:2, name:"B"}] , action-> Every redux update sends an action object: dispatch(addFriend(newFriend)), redux internally creates {type: "friends/addFriend", payload: newFriend} so action.payload = newFriend
            state.push(action.payload);
        },

        deleteFriend: (state, action)=>{
            return state.filter(f=> f.id !== action.payload)
        },
        editFriend: (state, action)=>{
            const{id, name} = action.payload;
            console.log(name)
            const friend = state.find(f=>f.id === id)

            if(friend){
                friend.name = name
            }
        }
    }
});

export const {addFriend, deleteFriend, editFriend} = friendSlice.actions;
export default friendSlice.reducer;


// friendSlice
//    │
//    ├─ state → friends array
//    │
//    ├─ actions
//    │     addFriend()
//    │     deleteFriend()
//    │     editFriend()
//    │
//    └─ reducer → updates state