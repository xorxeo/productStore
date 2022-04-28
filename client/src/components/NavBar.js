import React, { useContext, useTransition } from "react";
import { Context } from "../index";
import { NavLink, useLocation } from "react-router-dom";
import { Shop } from "../pages/Shop";
import { Auth } from "../pages/Auth";
import { Admin } from "../pages/Admin";
import { ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

export const NavBar = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === REGISTRATION_ROUTE;
  return (
    <div className="navbar flex absolute flex-row w-screen h-fit pr-10 text-l  shadow-slate-500 rounded-b-md  bg-slate-400 hover:shadow-xl ease-in-out 1s">
      <NavLink to={SHOP_ROUTE}>
        <button className="pr-3 pl-3 pb-1 pt-1 ml-3 shadow-lg border rounded-md font-sans text-l text-white hover:scale-110 ease-in-out before:text-pink-700">
          SHOP
        </button>
      </NavLink>

      {user.isAuth && (
        <div className="flex space-x-3 ml-auto ">
          <NavLink to={ADMIN_ROUTE}>
            <button className="pr-3 pl-3 pb-1 pt-1  shadow-sm border rounded-md font-sans text-l text-white hover:scale-110 ease-in-out">
              ADMINPANEL
            </button>
          </NavLink>

          <NavLink to={SHOP_ROUTE}>
            <button
              className="pr-3 pl-3 pb-1 pt-1  shadow-sm border rounded-md font-sans text-l text-white hover:scale-110 ease-in-out"
              onClick={() => user.setIsAuth(false)}
            >
              LOGOUT
            </button>
          </NavLink>
        </div>
      )}

      {!user.isAuth && (
        <div className="ml-auto">
          <NavLink to={LOGIN_ROUTE}>
            <button className="pr-3 pl-3 pb-1 pt-1  shadow-sm border rounded-md font-sans text-l text-white hover:scale-110 ease-in-out" onClick={() => user.setIsAuth(true)}>
              LOGIN/SIGNIN
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
});
