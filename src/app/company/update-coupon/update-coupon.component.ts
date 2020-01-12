import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyService } from '../company.service';
import { ICoupon } from 'src/app/coupon/ICoupon';
import { CompanyCouponComponent } from '../company-coupons/company-coupon.component';


@Component({
  selector: 'update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['../company.component.css'],
})

export class CompanyUpdateCouponComponent {
  constructor(
    private companyServ: CompanyService) { }

  @ViewChild('form') updateForm: NgForm;
  @Input() coupon: ICoupon;
  updateStatus: string;

  onSubmit() {
    let coupon = this.updateForm.value.coupon;
    coupon.id = this.coupon.id;
    this.companyServ.updateCoupon(this.coupon).subscribe(boo => {
      if (boo) {
        this.updateStatus = "Coupon updated successfully!";
      }
    },
      err => {
        console.error(err.error.message);
        this.updateStatus = err.error.message;
      }
    )

  }
}