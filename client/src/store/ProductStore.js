import { makeAutoObservable } from "mobx";
import { CategoryProducts } from "../components/CategoryProducts";

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
    this._selectedCategoryId = 0;

    makeAutoObservable(this);
  }

  setCategoryProduct(categoryProduct) {
    // console.log("set category", categoryProduct);
    this._categoryProduct = categoryProduct;
  }
  setProductItem(productItem) {
    this._productItem = productItem;
  }
  setSelectedCategoryId(categoryId) {
    // console.log("set", categoryId);
    this._selectedCategoryId = categoryId;
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
    // console.log("_selectedCategoryId", this._selectedCategoryId);
    // console.log("_categoryProduct", this._categoryProduct );

    const qq = this._categoryProduct.find((elem) => {
      return elem.id === this._selectedCategoryId;
    });
    console.log("////", qq);
    return qq;
  }
  get selectedProductItem() {
    return this._selectedProductItem;
  }
  getCategoryByName(categoryName) {
    // console.log("get", categoryName);
    // console.log("get", this.categoryProduct);

    const qq = this._categoryProduct.find((elem) => {
      return elem.category === categoryName;
    });

    return qq;
  }
}
