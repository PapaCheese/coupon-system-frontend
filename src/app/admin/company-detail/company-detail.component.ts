import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { ICompany } from "src/app/company/ICompany";
import { AdminService } from "../admin.service";


@Component({
    templateUrl: './company-detail.component.html',
    styleUrls: ['../admin.component.css'],
})
export class CompanyDetailComponent implements OnInit {
    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private adminServ: AdminService) { }
    pageTitle: string = 'Company Detail';
    removeStatus: string;
    toggleUpdate: boolean;
    company: ICompany;
    id: number;


    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.adminServ.getCompany(this.id).subscribe(data => {
            this.company = data;
        },
            err => {
                console.log(err.message);
            },
        )
    }

    onBack(): void {
        this.location.back();
    }

    onRemove(): void {
        this.adminServ.removeCompany(this.id).subscribe(boo => {
            if (boo) {
                this.removeStatus = "Company removed successfully!";
            }
        },
            err => {
                console.error(err.error.message);
                this.removeStatus = err.error.message;
            }
        );
    }

    onUpdate() {
        this.toggleUpdate = !this.toggleUpdate;
    }

}