import {
  makeAutoObservable,
  runInAction,
  reaction,
  observable,
  action,
} from "mobx";

export class BasketStore {
  $userStore;
  $productStore;
  goods = new Map();


  constructor(UserStore, ProductStore) {
    makeAutoObservable(this);

    this.UserStore = UserStore;
    this.ProductStore = ProductStore;
  }
}
