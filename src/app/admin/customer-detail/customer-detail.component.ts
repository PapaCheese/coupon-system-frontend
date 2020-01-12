import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { AdminService } from "../admin.service";
import { CustomerService } from "src/app/customer/customer.service";
import { ICustomer } from "src/app/customer/ICustomer";


@Component({
    templateUrl: './customer-detail.component.html',
    styleUrls: ['../admin.component.css'],
})
export class CustomerDetailComponent implements OnInit {
    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private adminServ: AdminService) { }
    pageTitle: string = 'Customer Detail';
    removeStatus: string;
    toggleUpdate: boolean;
    customer: ICustomer;
    id: number;


    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.adminServ.getCustomer(this.id).subscribe(
            data => this.customer = data,
        )
    }

    onBack(): void {
        this.location.back();
    }

    onRemove(): void {
        this.adminServ.removeCustomer(this.id).subscribe(boo => {
            if (boo) {
                this.removeStatus = "Customer removed successfully";
            }
        },
            err => {
                console.error(err.error.message);
                this.removeStatus = err.error.message;
            }
        );
    }

    onUpdate(): void {
        this.toggleUpdate = !this.toggleUpdate;
    }

}