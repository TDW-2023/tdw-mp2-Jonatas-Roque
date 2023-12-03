import { configureStore } from "@reduxjs/toolkit";
import bountySlice from "./bountySlice";
import { charactersApi } from "./charactersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { characterDetailApi } from "./characterDetail";

export const store = configureStore({
  reducer: {
    bounty: bountySlice,
    [charactersApi.reducerPath]: charactersApi.reducer,
    [characterDetailApi.reducerPath]: characterDetailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      charactersApi.middleware,
      characterDetailApi.middleware,
    ),
});

setupListeners(store.dispatch);
