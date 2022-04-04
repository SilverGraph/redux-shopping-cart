import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
// eslint-disable-next-line
import Layout from "./components/Layout";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  // console.log(isLoggedIn);
  // const cartItems = useSelector(state => state.cart.itemsList)
  // console.log(cartItems);
  
  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
