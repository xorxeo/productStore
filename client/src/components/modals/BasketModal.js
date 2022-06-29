import { observer } from "mobx-react-lite";
import React from "react";
import { useState, useContext } from "react";
import { createCategory } from "../../http/categoryAPI";
import { BasketItem } from "../BasketItem";
import { Context } from "../../index";

export const BasketModal = ({ show, close }) => {
  const { basket } = useContext(Context);
  const { product } = useContext(Context);

  console.log(basket.UserStore);

  return (
    <div
      show={show}
      close={close}
      className="modal-background flex absolute right-10 top-10 p-10 bg-slate-100 "
      onClick={(e) => {
        e.stopPropagation();
        close(false);
      }}
    >
      <div>user</div>
      <div>
        {basket.goods && <BasketItem className=""/>}
      </div>
    </div>
  );
};
