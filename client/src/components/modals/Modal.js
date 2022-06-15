import React from "react";
import { useState } from "react";

export const Modal = ({ show, close }) => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div show={show} close={close} className="modal-background flex w-screen h-screen fixed justify-center items-center bg-slate-100">
      <div className="modal-container flex flex-col w-96 h-96 rounded bg-slate-200 shadow-lg p-6">
        <div className="title flex text-center mt-3">Add Product Category</div>
        <div className="body">
          <input
            className="flex "
            placeholder="Введите название категории"
          />
          <input
            className="flex "
            placeholder="Загрузите изображение"
          />
        </div>
        <div className="footer">
          <button onClick={() => {close(false)}}>Cancel</button>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};
