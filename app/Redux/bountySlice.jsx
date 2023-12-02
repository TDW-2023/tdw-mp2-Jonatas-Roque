import { createSlice } from "@reduxjs/toolkit";

const bountySlice = createSlice({
  name: 'bounty',
  initialState: {
    characters:[]
  }
  ,
  reducers: {
    addBounty: (state, action) => {
      //state.characters.push({name: action.payload.name, id:action.payload.id});
      const { name, id } = action.payload;

      // verificar se o personagem está na store
      const existingCharacter = state.characters.find((character) => character.id === id);

      if (!existingCharacter) {
        // Adiciona o personagem caso nao esteja na store
        state.characters.push({ name, id });
      }
    },
    removeBounty: (state, action) => {
      // Filter out the character with the specified id
      state.characters = state.characters.filter(
        (character) => character.id !== action.payload
      );
    },
  },
});

export const { addBounty, removeBounty } = bountySlice.actions;
export default bountySlice.reducer;