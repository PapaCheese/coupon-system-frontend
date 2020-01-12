import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyService } from '../company.service';
import { ICoupon } from 'src/app/coupon/ICoupon';

@Component({
  templateUrl: '../create-coupon/create-coupon.component.html',
  styleUrls: ['../company.component.css'],
})

export class CompanyCreateCouponComponent {
  constructor(
    private compService: CompanyService) { }

  @ViewChild('form') updateForm: NgForm;
  coupon: ICoupon;
  createStatus: string;


  onSubmit() {
    this.coupon = this.updateForm.value.coupon;
    console.log(this.coupon);
    this.compService.createCoupon(this.coupon).subscribe(num => {
      this.createStatus = "Coupon successfully created with id: " + num;
    },
      err => {
        console.error(err.error.message);
        this.createStatus = err.error.message;
      }
    )
  }
}