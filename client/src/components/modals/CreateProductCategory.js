import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { createCategory } from "../../http/categoryAPI";

export const ModalCreateProductCategory = ({ show, close }) => {
  const [category, setCategory] = useState("");
  const [img, setImg] = useState(null);

  const selectImg = (e) => {
    setImg(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const addProductCategory = async (event) => {
    // console.log("event from addProductCategory", event);
    event.preventDefault();

    try {
      let data;
      const formData = new FormData();

      formData.append("category", category);
      formData.append("img", img);

      const response = await createCategory(formData).then((data) => {
        setCategory("");
        setImg(null);
        close();
      });
    } catch (e) {
      alert(e.response.data.message);
    }
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
        <form className="form-body">
          <input
            className="flex "
            placeholder="Введите название категории"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          Изображение{" "}
          <input
            type="file"
            accept="image/*"
            className="flex "
            placeholder="Загрузите изображение"
            onChange={selectImg}
          />
        </form>

        <button
          onClick={() => {
            close(false);
          }}
        >
          Cancel
        </button>
        <button type="submit" onClick={addProductCategory}>
          Add
        </button>
      </div>
    </div>
  );
};
