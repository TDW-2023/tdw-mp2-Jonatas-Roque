"use client";


import { Provider } from "react-redux";
import { store } from "../Redux/store";
import React from "react";
import CharactersPage from "../components/characters";



export default function Characters() {

  document.title = "Characters"

  return (
    <>
          <CharactersPage />
    </>
  );
}
