import { makeAutoObservable } from "mobx";

export class BasketStore {
  $userStore;
  $productStore;
  goods = {};

  constructor(UserStore, ProductStore) {
    this.UserStore = UserStore;
    this.ProductStore = ProductStore;

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
  }

  get countGoods() {
    return this.goods.length;
  }

}
