import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";

export const Counter = observer(({props}) => {
//   const { filteredProductItem } = props;

  const { basket } = useContext(Context);
  const { product } = useContext(Context);

  return (
    <div
      className="increment-decrement-wrap flex flex-row justify-center"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
     
        <button
          className="flex w-10 font-medium hover:shadow-lg hover:shadow-slate-400 hover:rounded-md bg-slate-300 text-center place-content-center  text-lg cursor-default"
          onClick={() => {
            basket.deleteItem(props.id);
            console.log(basket.goods);
            // basket.goods.delete(filteredProductItem.productName);
          }}
        >
          -
        </button>
      
      <div className="flex-grow w-10 font-medium bg-slate-300 text-center">
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
            console.log(basket.countGoods);
          }}
        >
          +
        </button>
     
    </div>
  );
});
