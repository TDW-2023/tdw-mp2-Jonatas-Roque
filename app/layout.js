"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata = {
  title: "Star Wars App",
  description: "Star wars app",
}; */

document.title = "Star Wars App"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
