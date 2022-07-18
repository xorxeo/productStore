import { makeAutoObservable } from "mobx";

export class BasketStore {
  $userStore;
  $productStore;
  goods = {};

  constructor(UserStore, ProductStore) {
    this.$userStore = UserStore;
    this.$productStore = ProductStore;

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
      // console.log(this.goods)
    }
  }
}
