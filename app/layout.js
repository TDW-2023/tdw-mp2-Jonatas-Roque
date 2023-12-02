"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { store } from "./Redux/store";
import { charactersApi } from "./Redux/charactersSlice";


const inter = Inter({ subsets: ["latin"] });

/* export const metadata = {
  title: "Star Wars App",
  description: "Star wars app",
}; */

/* document.title = "Star Wars App" */

export default function RootLayout({ children }) {
  return (
<html lang="en">
    <Provider store={store}>
      <ApiProvider api={charactersApi}>    
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      </ApiProvider>
    </Provider>
    </html> 
  );
}
