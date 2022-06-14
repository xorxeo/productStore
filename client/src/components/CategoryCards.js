import { createBrowserHistory } from "history";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../index";
import { CATEGORY_ROUTE } from "../utils/consts";

export const CategoryCards = observer(() => {
  const { product } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  
  // console.log(product.categoryProduct)
  
  return (
    <div className="grid grid-cols-5 grid-rows-4 gap-4 w-full h-full p-4 items-center">
      {product.categoryProduct.map((categoryProductItem) => (
        <div
          className="flex flex-col w-full h-full justify-center items-center rounded-xl bg-slate-300"
          key={categoryProductItem.id}
          onClick={() => {
              navigate(CATEGORY_ROUTE + "/" + categoryProductItem.category)
              product.setSelectedCategory(categoryProductItem)
              // console.log(p)
              // console.log(location.pathname)
          }}
        >
          <img className="w-24 h-24" src={categoryProductItem.img}></img>
          {categoryProductItem.category}
        </div>
      ))}
    </div>
  );
});
