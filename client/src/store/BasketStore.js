import { makeAutoObservable } from "mobx";

export class BasketStore {
  $userStore;
  $productStore;
  goods = {};
  

  constructor(UserStore, ProductStore) {
    this.$userStore = UserStore;
    this.$productStore = ProductStore;
    this.goods = {};
    
    makeAutoObservable(this);
  }

  addItem(id) {
    if (this.goods[id]) {
      this.goods[id] += 1;
    } else {
      this.goods[id] = 1;
    }
  }

  deleteItem(id) {
    if (this.goods[id]) {
      this.goods[id] -= 1;
    }
    if (this.goods[id] === 0) {
      delete this.goods[id];
    }
  }

  setSessionBasketToLocalStorage(goods) {
    localStorage.setItem("sessionCart", JSON.stringify(this.goods));
  }

  setGoodsFromSessionCart(storage) {
    this.goods = JSON.parse(storage);
  }
}
