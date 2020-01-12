import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICoupon } from '../coupon/ICoupon';
import { ICustomer } from './ICustomer';

@Injectable()
export class CustomerService {
    private url = 'http://localhost:8085/secure/customer/'
    constructor(private http: HttpClient) { }

    getCustomer() {
        return this.http.get<ICustomer>(this.url + 'get-customer', { withCredentials: true });
    }

    getCoupons() {
        return this.http.get<ICoupon[]>(this.url + 'get-coupons', { withCredentials: true });
    }

    purchaseCoupon(id: number) {
        return this.http.get<boolean>(this.url + 'purchase-coupon/' + id, { withCredentials: true });
    }

    removeCustCoupon(id: number) {
        return this.http.delete<boolean>(this.url + 'remove-coupon/' + id, { withCredentials: true });
    }

    removeCustCoupons() {
        return this.http.delete<boolean>(this.url + 'remove-all-coupons', { withCredentials: true });
    }
}