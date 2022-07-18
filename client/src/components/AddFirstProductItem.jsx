import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Context } from "../index";

export const AddFirstProductItem = observer(({ props }) => {
  const { basket } = useContext(Context);
  return (
    <div
      className="add-first-product-item-button flex w-10 font-medium hover:shadow-lg hover:shadow-slate-400 hover:rounded-md bg-slate-300 text-center place-content-center  text-lg cursor-default"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button className="flex box-border w-full justify-center"
        onClick={() => {
          basket.addItem(props.id);
        }}
      >
        +
      </button>
    </div>
  );
});
// box-border flex w-10 h-8 justify-center bg-red-400 rounded-md
