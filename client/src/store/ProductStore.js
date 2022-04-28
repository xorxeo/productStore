import { makeAutoObservable } from "mobx";

export class ProductStore {
  constructor() {
    this._categoryProduct = [
      { id: 1, category: "Cofee", img: "img/cofee-logo.png" },
      { id: 2, category: "Tea", img: "img/tea-logo.png" },
      { id: 3, category: "Bread", img: "img/bread-logo.png" },
      { id: 4, category: "Cheese", img: "img/cheese-logo.png" },
      { id: 5, category: "Drinks", img: "img/drinks-logo.png" },
      { id: 6, category: "Pastry", img: "img/pastry-logo.png" },
    ];

    this._productItem = [
      { id: 1, category: "Cofee", product_name: "Lavazza", price: 2350, description: "Кофе в зернах Lavazza Qualita Oro (1 кг)", },
      { id: 2, category: "Cofee", product_name: "Bushido", price: 649, description: "Кофе растворимый в кристаллах Kodo 95г", },
      { id: 3, category: "Tea", product_name: "Azer-Chai", price: 449, },
    ];

    this._selectedCategory = {};

    makeAutoObservable(this);
  };

  setCategoryProduct(categoryProduct) {
    this._categoryProduct = categoryProduct;
  };
  setProductItem(productItem) {
    this._productItem = productItem;
  };
  setSelectedCategory(category) {
    this._selectedCategory = category;
  };

  get categoryProduct() {
    return this._categoryProduct;
  };
  get productItem() {
    return this._productItem;
  };
  get selectedCategory() {
    return this._selectedCategory;
  };


}
