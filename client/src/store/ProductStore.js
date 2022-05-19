import { makeAutoObservable } from "mobx";

export class ProductStore {
  constructor() {
    this._categoryProduct = [
      { id: 1, category: "Cofee", img: "../img/logo/cofee-logo.png" },
      { id: 2, category: "Tea", img: "../img/logo/tea-logo.png" },
      { id: 3, category: "Bread", img: "../img/logo/bread-logo.png" },
      { id: 4, category: "Cheese", img: "../img/logo/cheese-logo.png" },
      { id: 5, category: "Drinks", img: "../img/logo/drinks-logo.png" },
      { id: 6, category: "Pastry", img: "../img/logo/pastry-logo.png" },
    ];

    this._productItem = [
      {
        id: 1,
        category: "Cofee",
        product_name: "Lavazza",
        price: 2350,
        description: "Кофе в зернах Lavazza Qualita Oro 1кг",
        img: "../img/product/cofee-lavazza.jpg",
      },
      {
        id: 2,
        category: "Cofee",
        product_name: "Bushido",
        price: 649,
        description: "Кофе растворимый в кристаллах Kodo 95г",
        img: "../img/product/cofee-bushido.jpg",
      },
      {
        id: 3,
        category: "Tea",
        product_name: "Azer-Chai",
        price: 449,
        img: "",
      },
    ];

    this._selectedCategory = {};
    this._selectedProductItem = {};

    makeAutoObservable(this);
  }

  setCategoryProduct(categoryProduct) {
    this._categoryProduct = categoryProduct;
  }
  setProductItem(productItem) {
    this._productItem = productItem;
  }
  setSelectedCategory(category) {
    this._selectedCategory = category;
  }
  setSelectedProductItem(id) {
    this._selectedProductItem = id;
  }

  get categoryProduct() {
    return this._categoryProduct;
  }
  get productItem() {
    return this._productItem;
  }
  get selectedCategory() {
    return this._selectedCategory;
  }
  get selectedProductItem() {
    return this._selectedProductItem
  }
}
