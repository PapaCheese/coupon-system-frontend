import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICompany } from 'src/app/company/ICompany';
import { AdminService } from '../../admin.service';


@Component({
  selector: 'update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['../../admin.component.css'],
})

export class UpdateCompanyComponent {
  constructor(
    private adminServ: AdminService) { }

  @ViewChild('form') updateForm: NgForm;
  @Input() company: ICompany;
  updateStatus: string;


  onSubmit() {
    let company: ICompany = this.updateForm.value.company;
    this.company.name = company.name;
    this.company.email = company.email;
    if(company.password){
      this.company.password = company.password;
    }
    this.adminServ.updateCompany(this.company).subscribe(boo => {
      if(boo){
        this.updateStatus = "Company updated successfully!";
      }
    },
      err => {
        console.error(err.error.message);
        this.updateStatus = err.error.message;
      }
    )
  }
}