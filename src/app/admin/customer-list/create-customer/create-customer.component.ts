import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { ICustomer } from 'src/app/customer/ICustomer';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['../../admin.component.css'],
})

export class CreateCustomerComponent {
  constructor(
    private adminServ: AdminService) { }

  @ViewChild('form') updateForm: NgForm;
  createStatus: string;


  onSubmit() {
    let customer: ICustomer = this.updateForm.value.customer;
    this.adminServ.createCustomer(customer).subscribe(num => {
      this.createStatus = "Customer successfully created with id: " + num;
    },
      err => {
        console.error(err.error.message);
        this.createStatus = err.error.message;
      }
    )
  }
}