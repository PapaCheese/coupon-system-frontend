import { Component, OnInit, DoCheck } from '@angular/core';
import { ICompany } from '../../company/ICompany';
import { AdminService } from '../admin.service';

@Component({
    templateUrl: './company-list.component.html',
    styleUrls: ['../admin.component.css'],

})
export class CompanyListComponent implements OnInit {
    toggleCreate: boolean;
    userFilter: string;
    companies: ICompany[];
    constructor(private adminSrv: AdminService) {
    }

    ngOnInit(): void {
        this.adminSrv.getCompanies().subscribe(
            data => this.companies = data,
            err => {
                console.error('Something went wrong in list component', err.message);
            },
        )
    }

    onCreate(){
        this.toggleCreate = !this.toggleCreate;
    }

}

