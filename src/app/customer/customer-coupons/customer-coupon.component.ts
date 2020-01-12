import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CouponService } from "../../coupon/coupon.service";
import { ICoupon } from "../../coupon/ICoupon";
import { Location } from '@angular/common';
import { CustomerService } from "../customer.service";
import { CustomerComponent } from "../customer.component";


@Component({
    templateUrl: './customer-coupon.component.html',
    styleUrls: ['../customer.component.css'],
})
export class CustomerCouponComponent implements OnInit {
    constructor(
        private _location: Location, private _route: ActivatedRoute,
        private couponServ: CouponService,
        private custService: CustomerService) { }
    pageTitle: string = 'Coupon Detail';
    purchaseStatus: string;
    coupon: ICoupon;
    id: number;


    ngOnInit(): void {
        this.id = +this._route.snapshot.paramMap.get('id')
        this.couponServ.getCouponById(this.id).subscribe(
            data => this.coupon = data,
            err => {
                console.error(err.error.message);
            }
        )
    }

    onBack(): void {
        this._location.back();
    }

    onPurchase(): void {
        this.custService.purchaseCoupon(this.id).subscribe(boo => {
            if (boo) {
                this.purchaseStatus = "Coupon was successfuly purchased!";
            }
        },
            err => {
                console.error(err.error.message);
                this.purchaseStatus = err.error.message;
            }
        )
    }
}