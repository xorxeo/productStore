import React from "react";
import { useState } from "react";

export const Modal = ({ show, close }) => {


  return (
    <div
      show={show}
      close={close}
      className="modal-background flex w-screen h-screen fixed justify-center items-center bg-slate-100"
      onClick={() => close(false)}
    >
      <div className="modal-container flex flex-col w-96 h-96 rounded bg-slate-200 shadow-lg p-6" onClick={(e) => e.stopPropagation()}>
        <div className="title flex text-center mt-3">Add Product Category</div>
        <div className="body">
          <input className="flex " placeholder="Введите название категории" onClick={(e) => e.stopPropagation()} />
          <input type="file" className="flex " placeholder="Загрузите изображение" onClick={(e) => e.stopPropagation()}/>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              close(false);
            }}
          >
            Cancel
          </button>
          <button onClick={(e) => e.stopPropagation()}>Add</button>
        </div>
      </div>
    </div>
  );
};
