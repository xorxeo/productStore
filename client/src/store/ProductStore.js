import { makeAutoObservable } from "mobx";

export class ProductStore {
  constructor() {
    this._categoryProducts = [
      // { id: 1, category: "Cofee", img: "../img/logo/cofee-logo.png" },
      // { id: 2, category: "Tea", img: "../img/logo/tea-logo.png" },
      // { id: 3, category: "Bread", img: "../img/logo/bread-logo.png" },
      // { id: 4, category: "Cheese", img: "../img/logo/cheese-logo.png" },
      // { id: 5, category: "Drinks", img: "../img/logo/drinks-logo.png" },
      // { id: 6, category: "Pastry", img: "../img/logo/pastry-logo.png" },
    ];

    this._productItems = {};

    this._productItemIdsByCategoryName = {};

    this._selectedCategory = {};
    this._selectedProductItem = {};

    this._selectedCategoryId = 0;

    makeAutoObservable(this);
  }

  setCategoryProducts(categoryProducts) {
    this._categoryProducts = categoryProducts;
  }
  setProductItems(productItems, categoryName) {
    const ids = productItems.map(({ id }) => id);
    this._productItemIdsByCategoryName[categoryName] = ids;
    productItems.forEach((item) => {
      this._productItems[item.id] = item;
    });
  }
  setSelectedCategoryId(categoryId) {
    this._selectedCategoryId = categoryId;
  }
  setSelectedProductItem(productItem) {
    this._selectedProductItem = productItem;
  }

  get categoryProducts() {
    return this._categoryProducts;
  }
  get productItems() {
    return this._productItems;
  }
  get selectedCategory() {
    const qq = this._categoryProducts.find((elem) => {
      return elem.id === this._selectedCategoryId;
    });
    return qq;
  }
  get selectedProductItem() {
    return this._selectedProductItem;
  }
  getCategoryByName(categoryName) {
    const qq = this._categoryProducts.find((elem) => {
      return elem.category === categoryName;
    });
    return qq;
  }
  getProductByCategoryName(categoryName) {
    const ids = this._productItemIdsByCategoryName[categoryName] ?? [];
    return this.getProductByIds(ids);
  }
  getProductByIds(ids) {
    const res = [];
    for (let id of ids) {
      res.push(this._productItems[id]);
    }
    return res;
  }
}
