import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { NavBar } from "./components/NavBar";
import { CommonDataContainer } from "./container/CommonDataContainer";
import { check } from "./http/userAPI";
import { Context } from "./index";

export const App = observer(() => {
 
  return (
    <BrowserRouter>
      <CommonDataContainer >
        <NavBar />
        <AppRouter />
      </CommonDataContainer>
    </BrowserRouter>
  );
});
