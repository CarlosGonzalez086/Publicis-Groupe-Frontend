import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { Category } from '../Models/Category';
import { Mimusica} from '../Models/Mimusica';

@Injectable()
export class MimusicaService {
    public url: string;
    public identity: any;
    public token: any;
    constructor(
        private _http: HttpClient
    ) {
        this.url = global.url;
    }

    pruebas() {
        return "Hola desde el servicio de POST";
    }
    create(token: any, mimusica: any): Observable<any> {
        let json = JSON.stringify(mimusica)
        let params = "json=" + json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
        return this._http.post(this.url + 'mimusica', params, { headers: headers });
    }

    getMimusicas(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url + 'mimusica', { headers: headers });
    }

    getMimusica(id: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url + 'mimusica/' + id, { headers: headers });
    }

    update(token: any, mimusica: any, id: any): Observable<any> {
        let json = JSON.stringify(mimusica)
        let params = "json=" + json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
        return this._http.put(this.url + 'mimusica/' + id, params, { headers: headers });
    }
    delete(token: any, id: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
        return this._http.delete(this.url + 'mimusica/' + id, { headers: headers });
    }

}