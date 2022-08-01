import React, { useContext, useState, useTransition } from "react";
import { Context } from "../index";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
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
import { Search } from "./search/Search";
import { useEffect } from "react";
import { toJS } from "mobx";

export const NavBar = observer(() => {
  const { user, basket, product } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === REGISTRATION_ROUTE;
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("sessionCart");
    localStorage.removeItem("token");
    console.log(localStorage.getItem("sessionCart"));
    console.log(basket.goods);
  };

  useEffect(() => {
    product.getProductItemsBySearchValue(
      searchValue,
      product._selectedCategory
    );
  }, [searchValue, product._selectedCategory]);

  return (
    <div className="navbar flex absolute flex-row w-screen h-fit pr-10 text-l z-10 bg-gray-300 rounded-b-md ease-in-out 1s">
      <NavLink to={SHOP_ROUTE} className="ml-3">
        <button
          className="pr-3 pl-3 pb-1 pt-1   rounded-md font-supernettCnLight text-3xl font-bold text-lime-600 hover:scale-110 ease-in-out before:text-pink-700"
          button="shop"
        >
          SHOP
        </button>
      </NavLink>

      <Search
        value={searchValue}
        onInputValueHandler={setSearchValue}
        className=""
      />

      {user.isAuth && user?.role === "USER" && (
        <div className="cart-logout-wrapper flex relative ">
          <div className="group count  flex absolute left-7 -top-1 w-6 h-6 justify-center items-center  border-2 border-lime-600 rounded-full font-supernettCnLight text-xl font-bold text-lime-600 z-10 cursor-default">
            <ProductItemsCounter />
            <div className="hidden group-hover:flex absolute top-5 -right-36 ">
              {<BasketModal />}
            </div>
          </div>
          <NavLink to={BASKET_ROUTE}>
            <button className=" basket-wrapper relative pt-2 m-auto">
              <img className="w-h-7 h-7" src="../img/shopping-cart.png"></img>
            </button>
          </NavLink>

          <div className="logout-wrapper flex ml-9">
            <NavLink to={SHOP_ROUTE}>
              <button
                className="flex pr-3 pl-3 pb-1 pt-1 shadow-sm rounded-md font-supernettCnLight text-3xl font-bold text-lime-600 "
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
            <button className="pr-3 pl-3 pb-1 pt-1  shadow-sm  rounded-md font-supernettCnLight text-3xl font-bold text-lime-600 hover:scale-110 ease-in-out">
              ADMINPANEL
            </button>
          </NavLink>
          <button
            className="pr-3 pl-3 pb-1 pt-1  shadow-sm  rounded-md font-supernettCnLight text-3xl font-bold text-lime-600 hover:scale-110 ease-in-out"
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
            <button className="pr-3 pl-3 pb-1 pt-1  shadow-sm border rounded-md font-sans text-l text-lime-600 text-lg font-semibold  hover:scale-110 ease-in-out">
              LOGIN/SIGNIN
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
});
