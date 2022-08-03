import { makeAutoObservable, toJS } from "mobx";
import { fetchProductItemsByCategory } from "../http/categoryAPI";
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
    this._productItemsFromStorage = {};
    this._productItemsBySearchValue = [];
    this._searchValue = "";
    this._productItemsForRender = [];
    this._productItemsForCategoryProductsRendering = [];

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
  setSelectedCategory(categoryName) {
    return (this._selectedCategory = categoryName);
  }

  setProductItemsFromStorage(key, data) {
    return (this._productItems[key] = data);
  }

  setProductItemsData(categoryName) {
    fetchProductItemsByCategory(categoryName).then((productItems) => {
      this.setProductItems(productItems, categoryName);
      this.setSelectedCategory(categoryName);
    });
  }

  setSelectedCategoryIdByCategoryName(categoryName) {
    const category = this.getCategoryByName(categoryName);
    if (category?.id) {
      this.setSelectedCategoryId(category.id);
    }
  }

  setProductItemsForRender(categoryName) {
    if (this._productItemsBySearchValue.length > 0) {
      this._productItems = this._productItemsBySearchValue;
    } else {
      this._productItems = this.getProductByCategoryName(categoryName);
    }
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

  getProductItemsBySearchValue(searchValue, categoryName) {
    this._searchValue = searchValue;

    if (searchValue.length !== 0) {
      this._productItemsBySearchValue = Object.values(
        this._productItems
      ).filter(
        (item) =>
          item.productName.toLowerCase().includes(searchValue.toLowerCase()) &&
          item.category === categoryName
      );
      return this._productItemsBySearchValue;
    }
    if (searchValue === "") {
      this._productItemsBySearchValue = {};
    }
  }

  getProductItemsForCategoryProductsRendering(categoryName) {
    if (this._productItemsBySearchValue.length > 0) {
      console.log("?????", this._productItemsBySearchValue);
      this._productItemsForCategoryProductsRendering =
        this._productItemsBySearchValue;
    } else {
      console.log("!!!!!!!!", this._productItemsBySearchValue);
      this._productItemsForCategoryProductsRendering =
        this.getProductByCategoryName(categoryName);
    }
  }
}
