import React from "react";
import { useState } from "react";

import { ModalCreateProductCategory } from "../components/modals/CreateProductCategory";
import { ModalCreateProductItem } from "../components/modals/CreateProductItem";

export const Admin = () => {
  const [addProductCategoryVisible, setAddProductCategoryVisible] =
    useState(false);
  const [addProductItemVisible, setAddProductItemVisible] = useState(false);

  return (
    <div className="container-admin flex flex-col h-screen min-w-full pt-14 ">
      <div className="flex flex-col w-full p-2 items-center ">AdminPanel</div>
      <div className="flex flex-row p-2 space-x-4 justify-center ">
        <button
          className="p-1 border-2 rounded bg-slate-200 "
          onClick={() => {
            setAddProductCategoryVisible("true");
          }}
        >
          Add ProductCategory
        </button>
        <button
          className="p-1 border-2 rounded bg-slate-200 "
          onClick={() => {
            setAddProductItemVisible("true");
          }}
        >
          Add ProductItem
        </button>
      </div>
      {addProductCategoryVisible && (
        <ModalCreateProductCategory
          show={addProductCategoryVisible}
          close={setAddProductCategoryVisible}
        />
      )}
      {addProductItemVisible && (
        <ModalCreateProductItem
          show={addProductItemVisible}
          close={setAddProductItemVisible}
        />
      )}
    </div>
  );
};
