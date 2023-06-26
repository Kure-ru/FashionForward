import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";

import Homepage from "./views/Homepage";
import ShopItem from "./views/ShopItem";
import ErrorPage from "./views/error-page";

import { Shop } from "./views/Shop";
import Root from "./routes/root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./views/Cart";

import CartContext, { CartProvider } from "./context/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:id",
        element: <ShopItem />,
        action: ShopItem.action
      },
      {
        path: "cart",
        element: <Cart/>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
