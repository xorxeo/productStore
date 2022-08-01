import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";

export const Counter = observer(({ props }) => {
  const { basket } = useContext(Context);
  const { product } = useContext(Context);

  return (
    <div
      className="increment-decrement-wrapper flex justify-center  w-full "
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button
        className="flex w-10 h-[30px] items-center hover:shadow-lg hover:shadow-slate-400 hover:rounded-md p-0 text-center place-content-center font-supernettCnLight text-3xl font-bold text-lime-600 cursor-default"
        onClick={() => {
          basket.deleteItem(props.id);
          if (Object.keys(basket.goods).length === 0) {
            localStorage.removeItem("sessionCart");
          }
        }}
      >
       -
      </button>

      <div className="flex h-[30px] flex-grow justify-center  font-medium p-0 text-center">
        {basket.goods && (
          <span className="flex font-supernettCnLight text-xl font-bold text-lime-600 cursor-default">
            {basket.goods[props.id]}
          </span>
        )}
      </div>

      <button
        className="flex w-10 h-[30px] items-center hover:shadow-lg hover:shadow-slate-400 hover:rounded-md p-0 text-center place-content-center font-supernettCnLight text-3xl font-bold text-lime-600 cursor-default"
        onClick={() => {
          basket.addItem(props.id);
          // console.log("", product.productItems);
        }}
      >
        +
      </button>
    </div>
  );
});
