import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../index";
import { CATEGORY_ROUTE } from "../utils/consts";

export const CategoryCards = observer(() => {
  const { product } = useContext(Context);
  const navigate = useNavigate();
  //   console.log(navigate);
  return (
    <div className="grid grid-cols-5 grid-rows-4 gap-4 w-full h-full p-4 items-center ">
      {product.categoryProduct.map((p) => (
        <div
          className="flex flex-col w-full h-full justify-center items-center rounded-xl bg-slate-300"
          key={p.id}
          onClick={() => (
              navigate(CATEGORY_ROUTE + "/" + p.category),
              product.setSelectedCategory(p)
              )}
        >
          <img className="w-24 h-24" src={p.img}></img>
          {p.category}
        </div>
      ))}
    </div>
  );
});
