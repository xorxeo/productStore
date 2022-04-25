import {makeAutoObservable} from 'mobx';

export class ProductStore {
    constructor() {
        this._categoryProduct = [
            {id: 1, category_name: 'Cofee'},
            {id: 2, category_name: 'Tea'},
        ]
        this._productItem = [
            {id: 1, product_name: 'Lavazza', price: 2350, description: 'Кофе в зернах Lavazza Qualita Oro (1 кг)'},
            {id: 2, product_name: 'Bushido', price: 649, description: 'Кофе растворимый в кристаллах Kodo 95г'},
            {id: 3, name: 'Azer-Chai'},
        ]
        makeAutoObservable(this);
    }

    setCategoryProduct(categoryProduct) {
        this._categoryProduct = categoryProduct;
    }
    setProductItem(productItem) {
        this._productItem = productItem;
    }

    get categoryProduct() {
        return this._categoryProduct;
    }
    get productItem() {
        return this._productItem;
    }
}