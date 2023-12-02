"use client";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import React from "react";
import { charactersApi } from "../Redux/charactersSlice";
//import { CharacterProviders } from "../Redux/charactersProvider";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import CharactersPage from "../components/characters";



export default function Characters() {

  document.title = "Characters"
  
  return (
    <>
      {/* <Provider store={store}> */}
        {/* <ApiProvider api={charactersApi}> */}
          <CharactersPage />
        {/* </ApiProvider> */}
      {/* </Provider> */}
    </>
  );
}
