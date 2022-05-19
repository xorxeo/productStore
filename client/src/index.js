import "./index.css";
import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { UserStore } from "./store/UserStore";
import { ProductStore } from "./store/ProductStore";
import { CounterStore } from "./store/CounterStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      product: new ProductStore(),
      counter: new CounterStore(),
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
