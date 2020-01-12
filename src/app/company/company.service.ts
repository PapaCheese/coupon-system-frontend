import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICompany } from './ICompany';
import { ICoupon } from '../coupon/ICoupon';

@Injectable()
export class CompanyService {
    private url = 'http://localhost:8085/secure/company/'
    constructor(private http: HttpClient) { }

    getCompany() {
        return this.http.get<ICompany>(this.url + 'get-company', { withCredentials: true });
    }

    getCoupons(){
        return this.http.get<ICoupon[]>(this.url + 'get-coupons', { withCredentials: true });
    }

    getCoupon(id: number){
        return this.http.get<ICoupon>(this.url + 'get-coupon/' + id, { withCredentials: true });
    }

    createCoupon(coupon: ICoupon) {
        return this.http.post<number>(this.url + 'create-coupon', coupon, { withCredentials: true });
    }

    updateCoupon(coupon: ICoupon) {
        return this.http.put<boolean>(this.url + 'update-coupon', coupon, { withCredentials: true });
    }

    removeCoupon(id: number) {
        return this.http.delete<boolean>(this.url + 'remove-coupon/'+ id, { withCredentials: true });
    }

}
