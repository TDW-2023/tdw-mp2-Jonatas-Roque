"use client";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import React from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { characterDetailApi } from "../Redux/characterDetail";
import Teste from "../components/teste";

export default function CharacterDetails() {
  return (
        <Teste />
  );
}
