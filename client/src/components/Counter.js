import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";

export const Counter = observer(({ props }) => {
  const { basket } = useContext(Context);
  const { product } = useContext(Context);

  return (
   <div className="counter-wrapper flex ">
     <div
      className="increment-decrement-wrapper flex w-full pl-2 pr-2 "
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button
        className="flex w-10 font-medium hover:shadow-lg hover:shadow-slate-400 hover:rounded-md bg-slate-300 text-center place-content-center  text-lg cursor-default"
        onClick={() => {
          basket.deleteItem(props.id);
        }}
      >
        -
      </button>

      <div className="flex flex-grow  font-medium bg-slate-300 text-center">
        {basket.goods && (
          <span className="flex justify-center  cursor-default">
            {basket.goods[props.id]}
          </span>
        )}
      </div>

      <button
        className="flex w-10 font-medium hover:shadow-lg hover:shadow-slate-400 hover:rounded-md bg-slate-300 text-center place-content-center  text-lg cursor-default"
        onClick={() => {
          basket.addItem(props.id);
        }}
      >
        +
      </button>
    </div>
   </div>
  );
});
