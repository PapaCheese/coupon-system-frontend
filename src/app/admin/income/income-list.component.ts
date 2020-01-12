import { Component, OnInit, DoCheck } from '@angular/core';
import { AdminService } from '../admin.service';
import { Iincome } from './Iincome';

@Component({
    templateUrl: './income-list.component.html',
    styleUrls: ['../admin.component.css'],

})
export class IncomeListComponent implements OnInit {

    sum: number;
    pageTitle: string = 'Income list';
    userFilter: string;
    incomes: Iincome[];
    constructor(private adminSrv: AdminService) {
    }

    ngOnInit(): void {
        this.adminSrv.getAllIncome().subscribe(
            data => this.incomes = data,
            err => {
                console.error('Something went wrong in list component', err.message);
            },
        )
        this.adminSrv.getIncomeSum().subscribe(
            data => this.sum = data,
            err => {
                console.error('Something went wrong in list component', err.message);
            },
        )
    }

}

