import { makeAutoObservable, toJS } from "mobx";

export class BasketStore {
  $userCart;
  $productStore;
  goods = {};

  constructor(UserStore, ProductStore) {
    this.$userStore = UserStore;
    this.$productStore = ProductStore;
    this.goods = {};
    this.goodsForCart = [];

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
      for (let key in this.goodsForCart) {
        if (this.goodsForCart[key].id === id) {
          delete this.goodsForCart[key];
        }
      }
    }
  }

  setSessionCartToLocalStorage(goods) {
    localStorage.setItem("sessionCart", JSON.stringify(this.goods));
  }

  setGoodsFromLocalStorage(storage) {
    this.goods = JSON.parse(storage);
  }

  setProductItemsForCartFromGoods() {
    this.goodsForCart = this.$productStore.getProductByIds(
      Object.keys(this.goods)
    );
  }
}
