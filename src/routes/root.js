import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { useState, useContext } from "react";
import { CartProvider } from "../context/CartContext"

export default function Root() {
  
  return (
    <CartProvider>
    <Nav/>
      <div id="detail">
        <Outlet/>
      </div>
    </CartProvider>
  );
}

