import { createSlice } from "@reduxjs/toolkit";

const bountySlice = createSlice({
  name: 'bounty',
  initialState: {
    characters:[]
  }
  ,
  reducers: {
    addBounty: (state, action) => {
      console.log('Action Payload:', action.payload);
      state.characters.push({name: action.payload.name, id:action.payload.id});
      console.log('Updated State:', state);
    },
  },
});

export const { addBounty } = bountySlice.actions;
export default bountySlice.reducer;