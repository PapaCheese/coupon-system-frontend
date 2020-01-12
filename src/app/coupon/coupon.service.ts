import { Injectable } from '@angular/core';
import { ICoupon } from './ICoupon'
import { Observable, throwError } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'

@Injectable()
export class CouponService {

    private url = 'http://localhost:8085/coupon/get-all'
    constructor(private http: HttpClient) { }


    getCoupons(): Observable<ICoupon[]> {
        return this.http.get<ICoupon[]>(this.url).pipe(
            catchError(
                (error: HttpErrorResponse) => {
                    console.log(error)
                    return throwError(error);
                }
            )
        )
    }

    getCouponById(id: number): Observable<ICoupon> {
        return this.getCoupons().pipe(
            map((coupons: ICoupon[]) => coupons.find(p => p.id === id))
        )
    }
}
