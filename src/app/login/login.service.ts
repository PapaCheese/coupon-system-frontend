import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string, clientType: string) {
        let httpParams = new HttpParams()
            .append('username', username)
            .append('password', password)
        return this.http.post<boolean>('http://localhost:8085/couponsystem/login/' + clientType, httpParams, { withCredentials: true });
    }

    logout(){
        return this.http.get('http://localhost:8085/couponsystem/logout' , { withCredentials: true });
    }
}
