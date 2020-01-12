import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { CustomerService } from './customer.service';
import { ICoupon } from '../coupon/ICoupon';
import { ICustomer } from './ICustomer';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {

    customer: ICustomer;
    pageTitle: string = 'Customer';
    userFilter: string;
    showImage: boolean = false;
    imageWidth: number = 40;
    imageMargin: number = 2;
    differ: any;
    constructor(private customerSrv: CustomerService) {
    }

    ngOnInit(): void {
        this.customerSrv.getCustomer().subscribe(data => {
            this.customer = data;
            console.log(this.customer);
        },
            err => {
                console.error('Something went wrong in customer list component', err);
            }
        )
    }

    getCoupons() {
        return this.customer.coupons;
    }

    getId() {
        return this.customer.id;
    }

}

