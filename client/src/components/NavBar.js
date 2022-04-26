import React, { useContext, useTransition } from "react";
import { Context } from "../index";
import { NavLink } from "react-router-dom";
import { Shop } from "../pages/Shop";
import { Auth } from "../pages/Auth";
import { Admin } from "../pages/Admin";
import { ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

export const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <div
      className="navbar h-12 
                 border
                 border-solid
                 rounded
               border-gray-500
                "
    >
      <NavLink to={SHOP_ROUTE}>
        <button className="pl-10 ">Shop</button>
      </NavLink>

      {user.isAuth && (
        <div className="ml-auto">
          <NavLink to={ADMIN_ROUTE}>
            <button className="pr-10 ">AdminPanel</button>
          </NavLink>

          <NavLink to={SHOP_ROUTE}>
            <button className="pr-10 " onClick={() => user.setIsAuth(false)}>
              LogOut
            </button>
          </NavLink>
        </div>
      )}

      {!user.isAuth && (
        <div className="ml-auto">
          <NavLink to={LOGIN_ROUTE}>
            <button className="pr-10" onClick={() => user.setIsAuth(true)}>
              Login
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
});
