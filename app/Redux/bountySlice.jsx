import { createSlice } from '@reduxjs/toolkit';

const bountySlice = createSlice({
  name: 'bounty',
  initialState: [],
  reducers: {
    addBounty: (state, action) => {
        return [...state, action.payload];
    },
  },
});

export const { addBounty } = bountySlice.actions;
export default bountySlice.reducer;