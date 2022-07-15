import React from "react";
import { useContext } from "react";
import { Context } from "../index";

export const AddFirstProductItem = (props) => {
  const { basket } = useContext(Context);
  return (
    <div className="add-first-product-item-button box-border flex w-10 h-8 justify-center bg-red-400 rounded-md">
      <button 
        onClick={() => {basket.addItem(props.id)}}>
        +
      </button>
    </div>
  );
};
