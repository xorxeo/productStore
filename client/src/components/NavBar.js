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
import { Basket } from "../pages/Basket";
import { check } from "../http/userAPI"
 
export const NavBar = observer(() => {
  const { user } = useContext(Context);
  const { basket } = useContext(Context);

  const location = useLocation();
  const isLogin = location.pathname === REGISTRATION_ROUTE;
  const navigate = useNavigate();
  // const [basketModalVisible, setBasketModalVisible] = useState(true);

  // show={basketModalVisible} close={setBasketModalVisible}

  // basketModalVisible &&

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
  };

  user.role = "USER";
  // user.role = "ADMIN";
  return (
    <div className="navbar flex absolute flex-row w-screen h-fit pr-10 text-l  shadow-slate-500 rounded-b-md  bg-slate-400 hover:shadow-xl ease-in-out 1s">
      <NavLink to={SHOP_ROUTE}>
        <button className="pr-3 pl-3 pb-1 pt-1 ml-3 shadow-lg border rounded-md font-sans text-l text-white hover:scale-110 ease-in-out before:text-pink-700">
          SHOP
        </button>
      </NavLink>

      {user.isAuth && user.role === "USER" && (
        <div className="  flex space-x-3 ml-auto ">

          <div className="group flex">
            {/* <div className="flex">7</div> */}
            <NavLink to={BASKET_ROUTE}>
              <button className=" basket-wrapper grid pl-4 pr-5 transition ease-in-out duration-1000 ">
                <img className="w-8 h-8" src="../img/basket.webp"></img>
              </button>
            </NavLink>
            <div className="hidden group-hover:flex ">{<BasketModal />}</div>
          </div>



          <div>
            <NavLink to={SHOP_ROUTE}>
              <button
                className="pr-3 pl-3 pb-1 pt-1  shadow-sm border rounded-md font-sans text-l text-white "
                onClick={() => logOut()}
              >
                LOGOUT
              </button>
            </NavLink>
          </div>
        </div>
      )}

      {user?.role === "ADMIN" && (
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
            <button
              className="pr-3 pl-3 pb-1 pt-1  shadow-sm border rounded-md font-sans text-l text-white hover:scale-110 ease-in-out"
              // onClick={() => (user.role = "USER")}
              // onClick={() => {
              //     // user.setRole()
              //     check();
              //     (console.log(user))
              //   }
              // }
            >
              LOGIN/SIGNIN
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
});
