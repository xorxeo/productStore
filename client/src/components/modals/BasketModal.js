import { observer } from "mobx-react-lite";
import React from "react";
import { useState, useContext } from "react";
import { createCategory } from "../../http/categoryAPI";
import { BasketItem } from "../BasketItem";
import { Context } from "../../index";

export const BasketModal = observer(() => {
  const { user } = useContext(Context);
 

  return (
    <div
      className="modal-background flex flex-col  lg:p-10  bg-slate-100 rounded-md z-10"
    >
      <div className="flex flex-col w-fit ">
        <p className="text-lg font-medium">Hello, {user.emailFromLogin}!</p>
      </div>
      <div>{<BasketItem />}</div>
    </div>
  );
}
)
