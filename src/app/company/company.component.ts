import { Component, OnInit, DoCheck } from '@angular/core';
import { CompanyService } from './company.service';
import { ICoupon } from '../coupon/ICoupon';
import { ICompany } from './ICompany';
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {

    company: ICompany;
    pageTitle: string = 'Company';
    userFilter: string;
    showImage: boolean = false;
    imageWidth: number = 40;
    imageMargin: number = 2;
    differ: any;
    constructor(private companySrv: CompanyService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.companySrv.getCompany().subscribe(data => {
            this.company = data;
        },
            err => {
                console.error(err.message);
            },
        )
    }

    getCoupons() {
        return this.company.coupons;
    }

    getId() {
        return this.company.id;
    }

}

