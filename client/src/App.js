import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { NavBar } from "./components/NavBar";
import { CommonDataContainer } from "./container/CommonDataContainer";
import { check } from "./http/userAPI";
import { Context } from "./index";

export const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(true);
        user.setIsAuth(true);
        // console.log("user.isAuth in check()", user.isAuth);
        // console.log("user.isAuth in check()", user);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <BrowserRouter>
      <CommonDataContainer >
        <NavBar />
        <AppRouter />
      </CommonDataContainer>
    </BrowserRouter>
  );
});
