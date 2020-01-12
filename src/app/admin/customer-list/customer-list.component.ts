import { Component, OnInit, DoCheck } from '@angular/core';
import { ICustomer } from '../../customer/ICustomer';
import { AdminService } from '../admin.service';

@Component({
    templateUrl: './customer-list.component.html',
    styleUrls: ['../admin.component.css'],

})
export class CustomerListComponent implements OnInit {
    toggleCreate: boolean;
    userFilter: string;
    customers: ICustomer[];
    constructor(private adminSrv: AdminService) {
    }

    ngOnInit(): void {
        this.adminSrv.getCustomers().subscribe(
            data => this.customers = data,
            err => {
                console.error('Something went wrong in list component', err.message);
            },
        )
    }
    
    onCreate(){
        this.toggleCreate = !this.toggleCreate;
    }

}

