import {makeAutoObservable} from 'mobx';

export class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._emailFromLogin = null;
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }
    setUser(user) {
        this._user = user;
    }

    setEmailFromLogin(email) {
        this._emailFromLogin = email;
    }

    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user;
    }
    get emailFromLogin() {
        return this._emailFromLogin;
    }
}