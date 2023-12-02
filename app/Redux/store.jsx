"use client";

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { charactersApi } from "./charactersSlice";
import { characterSlice } from "./charactersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import bountySlice from "./bountySlice";
import { characterDetailApi } from "./characterDetail";



export const store = configureStore({
  reducer: {
    bounty: bountySlice, 
  },
  /* middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware), */
});
/* 
setupListeners(store.dispatch); */
