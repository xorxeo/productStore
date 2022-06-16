import "./index.css";
import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { UserStore } from "./store/UserStore";
import { ProductStore } from "./store/ProductStore";
import { CounterStore } from "./store/CounterStore";
// require("dotenv").config();



export const Context = createContext(null);
// console.log(process.env.REACT_APP_API_URL)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      product: new ProductStore(),
      basket: [
        {product_item_id: 2, name: "Bushido", price: 649, quantity: 2},
        {product_item_id: 3, name: "Azer-Chai", price: 449, quantity: 3},
      ]
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
