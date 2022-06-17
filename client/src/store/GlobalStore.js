import { UserStore } from "./UserStore";
import { ProductStore } from "./ProductStore";
import { BasketStore } from "./BasketStore";

 class GlobalStore {
    userStore;
    productStore;
    basketStore;
    constructor() {
       this.userStore = new UserStore(); 
       this.productStore = new ProductStore();
       this.basketStore = new BasketStore(this.userStore, this.productStore);
    }
}

export const globalStore = new GlobalStore();