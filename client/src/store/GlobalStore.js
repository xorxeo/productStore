import { UserStore } from "./UserStore";
import { ProductStore } from "./ProductStore";
import { BasketStore } from "./BasketStore";
import { makeAutoObservable } from "mobx";

 class GlobalStore {
    userStore;
    productStore;
    basketStore;
    constructor() {
      makeAutoObservable(this);
      
       this.userStore = new UserStore(); 
       this.productStore = new ProductStore();
       this.basketStore = new BasketStore(this.userStore, this.productStore);
    }
}

export const globalStore = new GlobalStore();