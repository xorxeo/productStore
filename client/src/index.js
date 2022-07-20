import "./index.css";
import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { globalStore } from "./store/GlobalStore";


export const Context = createContext(null);
// console.log(process.env.REACT_APP_API_URL)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Context.Provider
    value={{
      user: globalStore.userStore,
      product: globalStore.productStore,
      basket: globalStore.basketStore,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
