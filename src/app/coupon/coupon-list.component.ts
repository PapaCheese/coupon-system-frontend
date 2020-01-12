import { Component, OnInit, DoCheck } from '@angular/core';
import { ICoupon } from './ICoupon';
import { CouponService } from './coupon.service';
@Component({
    selector: 'pm-coupon',
    templateUrl: './coupon-list.component.html',
    styleUrls: ['./coupon-list.component.css']

})
export class CouponListComponent implements OnInit, DoCheck {

    pageTitle: string = 'Coupon list';
    userFilter: string;
    showImage: boolean = false;
    imageWidth: number = 40;
    imageMargin: number = 2;
    coupons: ICoupon[];
    differ: any;
    constructor(private couponSrv: CouponService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.couponSrv.getCoupons().subscribe(
            data => this.coupons = data,
            err => {
                console.error('Something went wrong in list component', err.message);},
        )
    }
    ngDoCheck(): void {
    }

}

