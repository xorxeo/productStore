import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { Context } from "../index";
import { fetchCategory } from "../http/categoryAPI";
import { checkAuth } from "../http/userAPI";

export const CommonDataContainer = observer((props) => {
  const { product, user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategory().then((data) => product.setCategoryProducts(data));
  }, []);

  // useEffect(() => {
  //   checkAuth({ user })
  //     .then((data) => {
  //       user.setEmailFromLogin(data.email);
  //       user.setIsAuth(true);
  //       user.setRole(data.role);

  //       console.log(user);
  //     })
  //     .finally(() => setLoading(false));
  // }, [user.user.id]);

   useEffect(() => {
     if (localStorage.getItem('token')) {
       user.setUserParameters(user, checkAuth);
       console.log('auth useEffect done');
     } else {
       console.log('401 user is not authorized');
     }
   }, [user.user.id]);

  if (product.categoryProducts.length === 0) {
    return null;
  }

  return <>{props.children}</>;
});
