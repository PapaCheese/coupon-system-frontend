import { Component, OnInit, DoCheck, Inject, Input, AfterContentInit, AfterViewInit } from '@angular/core';
import { ICoupon } from '../../coupon/ICoupon';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { CompanyComponent } from '../company.component';

@Component({
    selector: '[company-coupons]',
    templateUrl: '../../coupon/coupon-list.component.html',
    styleUrls: ['../company.component.css'],
})
export class CompanyCouponListComponent implements OnInit {
    id: number;
    pageTitle: string = 'My Coupons';
    userFilter: string;
    showImage: boolean = false;
    coupons: ICoupon[];
    differ: any;
    constructor(private companyServ: CompanyService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.companyServ.getCoupons().subscribe(data => {
            this.coupons = data
        },
            err => {
                console.error(err.error.message);
            }
        )
    }
}


