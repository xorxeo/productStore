import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Context } from "../index";

export const AddFirstProductItem = observer(({ props }) => {
  const { basket } = useContext(Context);
  return (
    <div
      className="add-first-product-item-button flex items-center h-[30px] border-[1px] border-lime-600 w-content font-medium rounded-md hover:shadow-lg text-center place-content-center text-md cursor-default"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button
        id="btnId"
        className="flex w-full p-1 "
        onClick={() => {
          basket.addItem(props.id);
        }}
        button="button"
      >
        <span className="p-0">Add +</span>
      </button>
    </div>
  );
});
// box-border flex w-10 h-8 justify-center bg-red-400 rounded-md
