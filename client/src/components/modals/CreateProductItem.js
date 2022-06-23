import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useState } from "react";
import { createProductItem } from "../../http/categoryAPI";
import { Context } from "../../index";

export const ModalCreateProductItem = observer(({ show, close }) => {
  const { product } = useContext(Context);

  const [category, setCategory] = useState("");
  const [img, setImg] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const selectImg = (e) => {
    setImg(e.target.files[0]);
    // console.log(e.target.files[0]);
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  console.log(category);


  const addProductItem = async (event) => {
    event.preventDefault();

    try {

      const formData = new FormData();

      console.log("try", category);

      if (category) {
        formData.append("category", category);
        formData.append("img", img);
        formData.append("productName", name);
        formData.append("price", price);
        formData.append("description", description);

        const response = await createProductItem(formData).then((data) => {
          close();
          console.log(category);
        });

      } else {
        console.log("oh, no");
      };

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
        <div className="title flex text-center mt-3">Add Product Item</div>
        <div className="body">
        
          <select
            className="w-52"
            value={category}
            onChange={handleChange}
          >
            <option disabled value="">Выберете категорию продукта</option>
            {product &&
              product.categoryProduct.map((elem) => (
                <option
                  key={elem.id}
                  value={elem.category}
                >
                  {elem.category}
                </option>
              ))}
          </select>
          Изображение
          <input
            type="file"
            accept="image/*"
            className="flex "
            placeholder="Загрузите изображение"
            onChange={selectImg}
          />
          <input
            className="flex "
            placeholder="Введите название продукта"
            onChange={(e) => {
              e.stopPropagation();
              setName(e.target.value);
              console.log(e.target.value);
              // console.log(category)
            }}
          />
          <input
            className="flex "
            placeholder="Введите цену продукта"
            onChange={(e) => {
              e.stopPropagation();
              setPrice(e.target.value);
              // console.log(e.target.value);
            }}
          />
          <input
            className="flex "
            placeholder="Введите описание продукта"
            onChange={(e) => {
              e.stopPropagation();
              setDescription(e.target.value);
              // console.log(e.target.value);
            }}
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
          <button onClick={addProductItem}>Add</button>
        </div>
      </div>
    </div>
  );
});
