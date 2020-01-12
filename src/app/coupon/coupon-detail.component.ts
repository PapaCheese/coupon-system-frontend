import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CouponService } from "./coupon.service";
import { ICoupon } from "./ICoupon";
import { Location } from '@angular/common';


@Component({
    templateUrl: './coupon-detail.component.html',
    styleUrls: ['./coupon-list.component.css']
})
export class CouponDetailComponent implements OnInit {
    constructor(private _location: Location, private _route: ActivatedRoute, private couponServ: CouponService) { }
    pageTitle: string = 'Coupon Detail';
    coupon: ICoupon;


    ngOnInit(): void {
        let id = +this._route.snapshot.paramMap.get('id')
        this.couponServ.getCouponById(id).subscribe(data => {
            this.coupon = data;
        },
            err => {
                console.error('Something went wrong terribly!', err);
            }
        )
    }


    onBack(): void {
        this._location.back();
    }

}