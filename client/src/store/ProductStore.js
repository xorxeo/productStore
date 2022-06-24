import { makeAutoObservable } from "mobx";

export class ProductStore {
  constructor() {
    this._categoryProduct = [
      // { id: 1, category: "Cofee", img: "../img/logo/cofee-logo.png" },
      // { id: 2, category: "Tea", img: "../img/logo/tea-logo.png" },
      // { id: 3, category: "Bread", img: "../img/logo/bread-logo.png" },
      // { id: 4, category: "Cheese", img: "../img/logo/cheese-logo.png" },
      // { id: 5, category: "Drinks", img: "../img/logo/drinks-logo.png" },
      // { id: 6, category: "Pastry", img: "../img/logo/pastry-logo.png" },
    ];

    this._productItem = [];

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
  setSelectedProductItem(productItem) {
    this._selectedProductItem = productItem;
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
    return this._selectedProductItem;
  }
}
