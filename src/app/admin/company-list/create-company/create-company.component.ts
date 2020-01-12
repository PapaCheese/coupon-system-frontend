import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICompany } from 'src/app/company/ICompany';
import { AdminService } from '../../admin.service';


@Component({
  selector: 'create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['../../admin.component.css']
})

export class CreateCompanyComponent {
  constructor(
    private adminServ: AdminService) { }

  @ViewChild('form') updateForm: NgForm;
  createStatus: string;

  onSubmit() {
    let company: ICompany = this.updateForm.value.company;
    this.adminServ.createCompany(company).subscribe(num => {
      this.createStatus = "Company successfully created with id: " + num;
    },
    err => {
      console.error(err.error.message);
      this.createStatus = err.error.message;
    }
    )
  }
}