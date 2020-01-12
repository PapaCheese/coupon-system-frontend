import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { ICustomer } from 'src/app/customer/ICustomer';


@Component({
  selector: 'update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['../../admin.component.css'],
})

export class UpdateCustomerComponent {
  constructor(
    private adminServ: AdminService) { }

  @ViewChild('form') updateForm: NgForm;
  @Input() customer: ICustomer;
  updateStatus: string;


  onSubmit() {
    let customer: ICustomer = this.updateForm.value.customer;
    this.customer.name = customer.name;
    if(customer.password){
       this.customer.password = customer.password;
    }
    this.adminServ.updateCustomer(this.customer).subscribe(boo => {
      if (boo) {
        this.updateStatus = "Customer updated successfully!";
      }
    },
      err => {
        console.error(err.error.message);
        this.updateStatus = err.error.message;
      }
    )
  }
}