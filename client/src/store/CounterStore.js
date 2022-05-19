import {
  makeAutoObservable,
  runInAction,
  reaction,
  observable,
  action,
} from "mobx";

export class CounterStore {
  UserStore;
  ProductStore;
  todos = [];
  isLoading = true;
  value = 0;

  constructor(UserStore, ProductStore, value) {
    makeAutoObservable(this, {
      value: observable,
      increment: action,
      decrement: action,
    });
    this.UserStore = UserStore;
    this.ProductStore = ProductStore;
  }

  increment() {
      this.value++;
  }
  decrement() {
      this.value--;
  }
}
