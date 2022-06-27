import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";

export const Counter = observer(({props}) => {
//   const { filteredProductItem } = props;

  const { basket } = useContext(Context);
  const { product } = useContext(Context);

  return (
    <div
      className="increment-decrement-wrap flex flex-row  justify-center"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="flex w-10  mr-2 bg-slate-300">
        <button
          className="flex w-full h-full place-content-center pt-1 font-bold text-lg cursor-default"
          onClick={() => {
            basket.deleteItem(props.id);
            console.log(basket.goods);
            // basket.goods.delete(filteredProductItem.productName);
          }}
        >
          -
        </button>
      </div>
      <div className="flex-grow  p-2 mr-2  bg-slate-300">
        {basket.goods && (
          <span className="flex justify-center text-sm cursor-default">
            {basket.goods[props.id]}
          </span>
        )}
      </div>

      <div className="flex w-10  mr-2 bg-slate-300">
        <button
          className="flex w-full h-full place-content-center pt-1 font-bold text-lg cursor-default"
          onClick={() => {
            basket.addItem(props.id);
            // console.log(basket.goods);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
});
