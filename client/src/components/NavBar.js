import React, { useContext, useState, useTransition } from "react";
import { Context } from "../index";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  ADMIN_ROUTE,
  SHOP_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  BASKET_ROUTE,
} from "../utils/consts";
import { observer } from "mobx-react-lite";
import { BasketModal } from "./modals/BasketModal";
import { ProductItemsCounter } from "./ProductItemsCounter";

export const NavBar = observer(() => {
  const { user, basket } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === REGISTRATION_ROUTE;
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("sessionCart");
    localStorage.removeItem("token");
    console.log(localStorage.getItem("sessionCart"));
    console.log(basket.goods);
  };

  return (
    <div className="navbar flex absolute flex-row w-screen h-fit pr-10 text-l  shadow-slate-500 rounded-b-md  bg-slate-400 hover:shadow-xl ease-in-out 1s">
      <NavLink to={SHOP_ROUTE}>
        <button className="pr-3 pl-3 pb-1 pt-1 ml-3 shadow-lg border rounded-md font-sans text-l text-white hover:scale-110 ease-in-out before:text-pink-700">
          SHOP
        </button>
      </NavLink>

      {user.isAuth && user?.role === "USER" && (
        <div className="  flex space-x-3 ml-auto ">
          <div className="group flex relative">
            <div className="count flex absolute left-12 -top-1 w-7 h-5 justify-center items-center text-base text-cyan-50 bg-red-500 rounded-xl z-10">
              <ProductItemsCounter />
            </div>
            {/* transition ease-in-out duration-1000   before:content-['5']  -top-3 -right-3*/}
            <NavLink to={BASKET_ROUTE}>
              <button className=" basket-wrapper relative pl-5 pr-5 ">
                <img className="w-8 h-8" src="../img/basket.webp"></img>
              </button>
            </NavLink>
            <div className="hidden group-hover:flex ">{<BasketModal />}</div>
          </div>
          <div>
            <NavLink to={SHOP_ROUTE}>
              <button
                className="pr-3 pl-3 pb-1 pt-1  shadow-sm border rounded-md font-sans text-l text-white "
                onClick={() => {
                  logOut();
                }}
              >
                LOGOUT
              </button>
            </NavLink>
          </div>
        </div>
      )}

      {user?.role === "ADMIN" && user.isAuth && (
        <div className="flex space-x-3 ml-auto ">
          <NavLink to={ADMIN_ROUTE}>
            <button className="pr-3 pl-3 pb-1 pt-1  shadow-sm border rounded-md font-sans text-l text-white hover:scale-110 ease-in-out">
              ADMINPANEL
            </button>
          </NavLink>
          <button
            className="pr-3 pl-3 pb-1 pt-1  shadow-sm border rounded-md font-sans text-l text-white hover:scale-110 ease-in-out"
            onClick={() => {
              user.setIsAuth(false);
              navigate(SHOP_ROUTE);
              localStorage.removeItem("token");
              console.log(localStorage);
              console.log(
                "exit from admin panel, user.isAuth >>>",
                user.isAuth
              );
            }}
          >
            QUIT
          </button>
        </div>
      )}

      {!user.isAuth && (
        <div className="ml-auto">
          <NavLink to={LOGIN_ROUTE}>
            <button className="pr-3 pl-3 pb-1 pt-1  shadow-sm border rounded-md font-sans text-l text-white hover:scale-110 ease-in-out">
              LOGIN/SIGNIN
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
});
