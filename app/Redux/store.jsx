"use client";

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { charactersApi } from "./charactersSlice";
import { characterSlice } from "./charactersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import bountyReducer from "./bountySlice";
import { characterDetailApi } from "./characterDetail";

export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    [characterDetailApi.reducerPath]: characterDetailApi.reducer,
    bounty: bountyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware),
});

setupListeners(store.dispatch);
