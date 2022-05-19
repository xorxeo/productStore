import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";

export const AppRouter = observer(() => {
  const { user } = useContext(Context);

  // console.log("AppRouter", user);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
      
    </Routes>
  );
});
