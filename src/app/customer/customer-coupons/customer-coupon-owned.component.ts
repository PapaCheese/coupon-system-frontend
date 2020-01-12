import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CouponService } from "../../coupon/coupon.service";
import { ICoupon } from "../../coupon/ICoupon";
import { Location } from '@angular/common';
import { CustomerService } from "../customer.service";
import { CustomerComponent } from "../customer.component";


@Component({
    templateUrl: './customer-coupon-owned.component.html',
    styleUrls: ['../customer.component.css'],
})
export class CustomerCouponOwnedComponent implements OnInit {
    constructor(
        private _location: Location, private _route: ActivatedRoute,
        private couponServ: CouponService,
        private custService: CustomerService,
        private custComponent: CustomerComponent) { }
    pageTitle: string = 'Coupon Detail';
    removeStatus: string;
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

    onRemove(): void {
        console.log('remove clicked');
        let id = this.custComponent.getId();
        this.custService.removeCustCoupon(this.id).subscribe(boo => {
            if (boo) {
                this.removeStatus = "Coupon was successfuly removed!";
            }
        },
            err => {
                console.error(err.error);
                this.removeStatus = err.error.message;
            }
        )
    }
}