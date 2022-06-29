import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { Context } from "../index";
import { UserStore } from "../store/UserStore";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";

export const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (isLogin) {
        const response = await login(email, password);
        console.log("isLogin");
        
      } else {
        const response = await registration(email, password);
        console.log("in click() registration", response);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);

      console.log("in click() login", user);
      user.setEmailFromLogin(email);
      console.log("from userStore >>>>>>>",user.emailFromLogin);
      
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <div className="container flex h-screen min-w-full justify-center items-center bg-slate-200 pt-16 pb-16 mx-0 ">
      <div className="flex  flex-col h-fit w-fit pt-16 pb-16 pl-8 pr-8 items-center justify-center bg-slate-300 rounded-lg shadow-xl">
        <div className="flex  justify-center pb-3 bg-slate-300">
          <h2 className="shadow-inner rounded-md pr-5 pl-5 pb-3 text-center text-2xl text-gray-500">
            {isLogin ? "Sign in to your account" : "Registration"}
          </h2>
        </div>

        <div className="form flex w-full justify-center mx-0 ">
          <form className="max-w-md w-full space-y-8 " action="#" method="POST">
            <div className=" rounded shadow justify-center space-y-px">
              <div>
                <input
                  className="appearance-none  rounded-none block w-full px-3 py-2 bg-slate-200 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-slate-500 focus:border-slate-500 focus:z-10 sm:text-sm"
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <input
                  className="appearance-none rounded-none block w-full px-3 py-2 bg-slate-200 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-slate-500 focus:border-slate-500 focus:z-10  sm:text-sm"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {
                <div className="flex justify-center space-x-10 mt-3 font-light ">
                  <div>{isLogin ? "No account?" : "Have account?"}</div>

                  {isLogin ? (
                    <NavLink to={REGISTRATION_ROUTE}>
                      <div>Register!</div>
                    </NavLink>
                  ) : (
                    <NavLink to={LOGIN_ROUTE}
                   >
                      <div>Sign in</div>
                    </NavLink>
                  )}
                </div>
              }

              {
                <div className="flex h-full items-center justify-center py-6 px-4">
                  <button
                    className="group w-full flex justify-content-center py-2 px-4 rounded-md shadow-md bg-slate-400 text-white font-medium hover:scale-105 "
                    onClick={handleLogin}
                  >
                    {isLogin ? "Sign in" : "Register"}
                  </button>
                </div>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});
