import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "../../index";

export const ModalAddProductItem = ({ show, close }) => {
  const { product } = useContext(Context);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // console.log(selectedCategory);

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
        <div className="title flex text-center mt-3">Add Product Item</div>
        <div className="body">
          <select
            onChange={(e) => {
              // setSelectedCategory(e.target.value);
              console.log(e.target.value);
              // console.log(selectedCategory);
            }}
            defaultValue="Выберете категорию продукта"
            className="w-52"
          >
            <option disabled>Выберете категорию продукта</option>
            {product &&
              product.categoryProduct.map((p) => (
                <option key={p.id} value={p.category}>
                  {p.category}
                </option>
              ))}
          </select>
          <input
            className="flex "
            placeholder="Введите название продукта"
            onClick={(e) => e.stopPropagation()}
          />
          <input
            className="flex "
            placeholder="Введите цену продукта"
            onClick={(e) => e.stopPropagation()}
          />
          <input
            className="flex "
            placeholder="Введите описание продукта"
            onClick={(e) => e.stopPropagation()}
          />
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
