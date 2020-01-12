import { Component, OnInit, DoCheck, Inject, Input } from '@angular/core';
import { ICoupon } from '../../coupon/ICoupon';
import { CustomerService } from '../customer.service';

@Component({
    selector: '[customer-coupons]',
    templateUrl: '../../coupon/coupon-list.component.html',
    styleUrls: ['../customer.component.css'],

})
export class CustomerCouponListComponent implements OnInit {


    pageTitle: string = 'My Coupons';
    userFilter: string;
    showImage: boolean = false;
    imageWidth: number = 40;
    imageMargin: number = 2;
    coupons: ICoupon[];
    differ: any;
    constructor(private customerSrv: CustomerService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.customerSrv.getCoupons().subscribe(coupons => {
            this.coupons = coupons;
        },
            err => {
                console.error(err.error.message);
            })
    }

}

