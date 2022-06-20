import React from "react";
import { useState } from "react";
import { createCategory } from "../../http/categoryAPI";

export const ModalCreateProductCategory = ({ show, close }) => {
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    console.log("console.log(file) >>>>>>", file);
    // console.log("console.log(value) >>>>>>", value);
  };

  const addProductCategory = (value, file) => {
    const formData = new FormData();

    formData.append("category", value);
    formData.append("img", file);

    createCategory(formData).then((data) => {
      console.log(formData);
      setValue("");
      console.log("console.log(file after ADD BUTTON) >>>>>>", file)
      // console.log("console.log(value) >>>>>>", value)
      close();
    });
  };

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
        <div className="title flex text-center mt-3">Add Product Category</div>
        <div className="body">
          <input
            className="flex "
            placeholder="Введите название категории"
            // onClick={(e) => {
            //   e.stopPropagation();
            // }}
            onChange={(e) => {
              setValue(e.target.value);
              console.log(value);
            }}
          />
          <input
            type="file"
            className="flex "
            placeholder="Загрузите изображение"
            // onClick={(e) =>{
            //    e.stopPropagation();

            //    }}
            onChange={selectFile}
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
          <button
            onClick={(e) => {
              e.stopPropagation();
              addProductCategory();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
