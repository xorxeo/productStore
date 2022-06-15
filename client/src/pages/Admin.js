import React from "react";
import { AddProductCategory } from "../components/modals/AddProductCategory";
import { AddProductItem } from "../components/modals/AddProductItem";
import { Modal } from "../components/modals/Modal";
import { useState } from "react";

export const Admin = () => {
  const [addProductCategoryVisible, setAddProductCategoryVisible] = useState(false);
  return (
    <div className="container-admin flex flex-col h-screen min-w-full pt-14 ">
      <div className="flex flex-col w-full p-2 items-center ">AdminPanel</div>
      <div className="flex flex-row p-2 space-x-4 justify-center ">
        <button className="p-1 border-2 rounded bg-slate-200 " onClick={() => {setAddProductCategoryVisible("true")}}>Add ProductCategory</button>
        <button className="p-1 border-2 rounded bg-slate-200 ">Add ProductItem</button>
      </div>
     {addProductCategoryVisible && <Modal show={addProductCategoryVisible} close={setAddProductCategoryVisible}/>}
    </div>
  );
};
