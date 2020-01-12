import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ICoupon } from "../../coupon/ICoupon";
import { Location } from '@angular/common';
import { CompanyService } from "../company.service";

@Component({
    templateUrl: './company-coupon.component.html',
    styleUrls: ['../company.component.css'],
})
export class CompanyCouponComponent implements OnInit {
    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private companyServ: CompanyService) { }
    pageTitle: string = 'Coupon Detail';
    toggleUpdate: boolean;
    removeStatus: string;
    coupon: ICoupon;
    id: number;


    ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        this.companyServ.getCoupon(id).subscribe(data => {
            this.coupon = data;
        },
            err => {
                console.error('Something went wrong terribly!', err);
            }
        )

    }

    onRemove(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        this.companyServ.removeCoupon(id).subscribe(boo => {
            if (boo) {
                this.removeStatus = "Coupon was successfuly removed!";
            }
        },
            err => {
                console.error(err.error.message);
                this.removeStatus = err.error.message;
            }
        )
    }

    onBack(): void {
        this.location.back();
    }

    onUpdate() {
        this.toggleUpdate = !this.toggleUpdate;
    }

}