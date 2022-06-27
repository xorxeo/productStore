import { observer } from "mobx-react-lite";
import React from "react";
import { useState, useContext } from "react";
import { createCategory } from "../../http/categoryAPI";
import { BasketItem } from "../BasketItem";
import { Context } from "../../index";

export const BasketModal = ({ show, close }) => {
  // const { basket } = useContext(Context);
  // const { product } = useContext(Context);
  

  return (
    <div
      show={show}
      close={close}
      className="modal-background flex w-screen h-screen fixed justify-center items-center bg-slate-100"
      onClick={() => close(false)}
    >
      <div
        className="modal-container flex flex-col w-96 h-96 rounded bg-slate-200 shadow-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="title flex text-center mt-3">
          Basket List
        </div>
        {/* <div>{<BasketItem products={product} basket={basket}/>}</div> */}
       

        <button
          onClick={() => {
            close(false);
          }}
        >
          Cancel
        </button>
        <button type="submit" >
          Add
        </button>
      </div>
    </div>
  );
};
