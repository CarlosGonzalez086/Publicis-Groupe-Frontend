import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { User } from '../Models/User';


@Injectable()
export class UserService {
    public url: string;
    public identity: any;
    public token: any;
    constructor(
        public _http: HttpClient
    ) {
        this.url = global.url;
    }
    test() {
        return "Hola Mundo";
    }

    register(user: any): Observable<any> {
        let json = JSON.stringify(user);

        let params = "json=" + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url + 'register', params, { headers: headers });
    }

    signup(user: any, gettoken: any = null): Observable<any> {
        if (gettoken != null) {
            user.gettoken = 'true';
        }
        let json = JSON.stringify(user);
        let params = "json=" + json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'login', params, { headers: headers });
    }

    update(token: any, user: any): Observable<any>{
        let json = JSON.stringify(user);
        let params = "json=" + json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
        return this._http.put(this.url + 'user/update', params, { headers: headers });
    }

    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity') || '{}');
        if (identity && identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    }

    getToken() {
        let token = localStorage.getItem('token');
        if (token && token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    }

    getUserMiMusicas(id: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'mimusica/user/' + id, { headers: headers });
    }

    getUser(id: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'mimusica/detail/' + id, { headers: headers });
    }
    getUseremail(email: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'user/' + email, { headers: headers });
    }
    delete(token: any, email: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
        return this._http.delete(this.url + 'user/' + email, { headers: headers });
    }

}