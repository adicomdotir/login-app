import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticationService {

    constructor(public http: Http) { }

    public isLoggedIn(username: string, password: string): Observable<boolean> {
        let headers = new Headers({'Content-Type': 'X-custom'});
        let option = new RequestOptions({headers: headers});
        return this.http.get('./assets/login.json', option)
            .map((res: Response) => {
                return res.json().username === username && res.json().password === password;
            }).catch((error: any) => {
                return Observable.throw(error.statusText);
            });
    }
}
