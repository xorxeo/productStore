import {makeAutoObservable} from 'mobx';

export class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._emailFromLogin = null;
        this._role = null;
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
    setRole(role) {
        this._role = role;
    }

    setUserParameters(user, callback) {
        callback({ user })
            .then((response) => {
                user.setIsAuth(true);
                user.setEmailFromLogin(response.email);
                user.setRole(response.role);

                console.log(user);
            })
            // .finally(() = )
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
    get role() {
        return this._role
    }
    
}